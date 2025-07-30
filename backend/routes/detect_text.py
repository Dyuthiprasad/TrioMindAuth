# routes/detect_text.py

from flask import Blueprint, request
import pdfplumber
import json
import io
from models.trained_model import predict_fake_news
from models.fact_check_api import fact_check_claim

text_detection_bp = Blueprint('text_detection', __name__)

@text_detection_bp.route("/text", methods=["POST"])
def detect_text():
    file = request.files.get("file")

    if not file:
        return {"error": "No file uploaded"}, 400

    filename = file.filename.lower()

    try:
        # Read content based on file type
        if filename.endswith(".txt"):
            content = file.read().decode("utf-8", errors="ignore")

        elif filename.endswith(".pdf"):
            content = ""
            with pdfplumber.open(io.BytesIO(file.read())) as pdf:
                for page in pdf.pages:
                    content += page.extract_text() or ""

        elif filename.endswith(".json"):
            json_data = json.load(file)
            content = json.dumps(json_data, indent=2)

        elif filename.endswith(".docx"):
            from docx import Document
            doc = Document(file)
            content = "\n".join([para.text for para in doc.paragraphs])

        else:
            return {"error": "Unsupported file type"}, 400

    except Exception as e:
        return {"error": f"Failed to read file: {str(e)}"}, 500

    if not content.strip():
        return {"error": "File contains no readable text"}, 400

    # === Google Fact Check API ===
    fact_result = fact_check_claim(content)
    fact_available = fact_result.get("fact_check_available", False)
    claim_reviews = fact_result.get("claim_reviews", [])

    # === AI Model Confidence Check ===
    model_result = predict_fake_news(content)
    model_confidence = model_result.get("confidence", 0.0)

    # === Final Decision Logic ===
    if fact_available and claim_reviews:
        top_claim = claim_reviews[0]
        headline = top_claim.get("text", "")
        publisher = top_claim.get("publisher", "Unknown Source")
        publish_date = top_claim.get("publish_date", "Unknown Date")

        final_verdict = "True – Verified by reliable source"
        explanation = (
            f"This news is verified by {publisher} on {publish_date}. "
            f"The AI model also supports this with {model_confidence:.2f}% confidence it is not AI-generated."
        )
        final_confidence = 95.0  # Prioritizing fact-check

    elif not fact_available and model_result.get("verdict") == "Fake News":
        final_verdict = "Likely Fake"
        explanation = (
            "No verified news source found and the AI model suggests it's AI-generated. "
            "This content is likely fake."
        )
        final_confidence = model_confidence

    elif not fact_available and model_result.get("verdict") == "Real News":
        final_verdict = "Unclear – No Verification Found"
        explanation = (
            "No news source confirms this content, but it does not appear to be AI-generated either."
        )
        final_confidence = model_confidence

    else:
        final_verdict = "Unclear"
        explanation = "Insufficient signals from both model and fact-check sources."
        final_confidence = model_confidence

    return {
        "fact_check_result": fact_result,
        "model_confidence": round(model_confidence, 2),
        "final_verdict": final_verdict,
        "confidence": round(final_confidence, 2),
        "explanation": explanation
    }
