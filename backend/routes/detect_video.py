from flask import Blueprint, request
from models.video_sync import analyze_sync
from models.whisper_transcribe import transcribe_audio
from models.news_api_checker import check_news

import os
import tempfile
import cv2  # Replacing MoviePy with OpenCV

video_detection_bp = Blueprint("video_detection", __name__)

@video_detection_bp.route("/video", methods=["POST"])
def detect_video():
    file = request.files.get("file")
    if not file:
        return {"error": "No video file uploaded"}, 400

    try:
        with tempfile.TemporaryDirectory() as tmpdir:
            # Save uploaded video file
            video_path = os.path.join(tmpdir, "input_video.mp4")
            file.save(video_path)

            # Step 1: Validate video using OpenCV
            cap = cv2.VideoCapture(video_path)
            if not cap.isOpened():
                return {"error": "Invalid or unreadable video file"}, 400

            fps = cap.get(cv2.CAP_PROP_FPS)
            frame_count = cap.get(cv2.CAP_PROP_FRAME_COUNT)
            duration = frame_count / fps if fps > 0 else 0
            cap.release()

            if duration <= 0:
                return {"error": "Video has zero or unknown duration"}, 400

            # Step 2: Audio-Video Sync Analysis
            sync_result = analyze_sync(video_path)

            # Step 3: Transcribe Audio using Whisper
            transcription = transcribe_audio(video_path)

            # Step 4: Fact Check the Transcript via News API
            news_result = check_news(transcription)

            # Step 5: Final Verdict
            if sync_result["is_synced"] and news_result["fact_check_available"]:
                verdict = "Likely Real"
            elif not sync_result["is_synced"] and not news_result["fact_check_available"]:
                verdict = "Likely Fake"
            else:
                verdict = "Unclear – Needs Review"

            final_confidence = round(
                (sync_result["score"] + news_result["confidence"]) / 2, 2
            )

            return {
                "verdict": verdict,
                "confidence": final_confidence,
                "explanation": f"{sync_result['explanation']} | {news_result['message']}",
                "transcription": transcription,
                "fact_check_result": news_result,
                "sync_check_result": sync_result
            }

    except Exception as e:
        return {"error": f"Video processing failed: {str(e)}"}, 500
