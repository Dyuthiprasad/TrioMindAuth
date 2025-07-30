from flask import Blueprint, request
import os
import tempfile

from models.audio_model import predict_audio
from models.keyword_heuristics import keyword_scan
import whisper

audio_detection_bp = Blueprint("audio_detection", __name__)

@audio_detection_bp.route("/audio", methods=["POST"])
def detect_audio():
    file = request.files.get("file")
    if not file:
        return {"error": "No audio file uploaded"}, 400

    with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as temp_audio:
        file.save(temp_audio.name)
        audio_path = temp_audio.name

    # Step 1: AI voice detection
    model_result = predict_audio(audio_path)

    # Step 2: Transcribe using Whisper
    transcript = whisper.load_model("base").transcribe(audio_path)["text"]

    # Step 3: Heuristic scan
    keyword_result = keyword_scan(transcript)

    # Final logic
    if model_result["verdict"] == "AI-Generated" and keyword_result["is_suspicious"]:
        final_verdict = "Highly Suspicious – Likely Scam"
    elif model_result["verdict"] == "AI-Generated":
        final_verdict = "Possibly Synthetic – Caution Advised"
    elif keyword_result["is_suspicious"]:
        final_verdict = "Suspicious – Human Voice with Scam Indicators"
    else:
        final_verdict = "Likely Human – No Red Flags"

    return {
        "final_verdict": final_verdict,
        "model_result": model_result,
        "transcript": transcript,
        "keyword_flags": keyword_result
    }
