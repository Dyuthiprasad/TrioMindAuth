from datetime import datetime
from .database import db  # Import the db object from database.py

def insert_result(upload_id, trust_score, verdict, explanation, verified_source=None, model_outputs=None, likely_model_source=None, modalities_used=None):
    return db.results.insert_one({
        "upload_id": upload_id,
        "trust_score": trust_score,
        "verdict": verdict,
        "explanation": explanation,
        "verified_source": verified_source,
        "model_outputs": model_outputs or {},
        "likely_model_source": likely_model_source,
        "modalities_used": modalities_used or [],
        "timestamp": datetime.utcnow()
    }).inserted_id
def insert_user_feedback(upload_id, user_rating, user_comment=None, agreed_with_ai=None):
    from datetime import datetime
    return db.user_feedback.insert_one({
        "upload_id": upload_id,
        "user_rating": user_rating,
        "user_comment": user_comment,
        "agreed_with_ai": agreed_with_ai,
        "timestamp": datetime.utcnow()
    }).inserted_id
def insert_ai_feedback(upload_id, modality, ai_verdict, confidence, explanation, likely_model=None):
    from datetime import datetime
    return db.ai_feedback.insert_one({
        "upload_id": upload_id,
        "modality": modality,
        "ai_verdict": ai_verdict,
        "confidence": confidence,
        "explanation": explanation,
        "likely_model": likely_model,
        "timestamp": datetime.utcnow()
    }).inserted_id
