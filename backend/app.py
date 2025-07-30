from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Import routes
from routes.detect_text import text_detection_bp
from routes.detect_image import image_detection_bp  # ✅ Added
from routes.detect_video import video_detection_bp
from routes.detect_audio import audio_detection_bp

# Register routes
app.register_blueprint(text_detection_bp, url_prefix="/detect")
app.register_blueprint(image_detection_bp, url_prefix="/detect")  
app.register_blueprint(video_detection_bp, url_prefix="/detect")
app.register_blueprint(audio_detection_bp, url_prefix="/detect")


@app.route("/")
def home():
    return {"message": "Deepfake Detection Backend is running."}

if __name__ == "__main__":
    app.run(debug=True)
