from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Setup JWT
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY", "fallback-secret-if-missing")
jwt = JWTManager(app)

# Import routes
from routes.detect_text import text_detection_bp
from routes.detect_image import image_detection_bp
from routes.detect_video import video_detection_bp
from routes.detect_audio import audio_detection_bp
from routes.auth_routes import auth  # 👈 Your login/register routes go here

# Register route blueprints
app.register_blueprint(text_detection_bp, url_prefix="/detect")
app.register_blueprint(image_detection_bp, url_prefix="/detect")
app.register_blueprint(video_detection_bp, url_prefix="/detect")
app.register_blueprint(audio_detection_bp, url_prefix="/detect")
app.register_blueprint(auth, url_prefix="/auth")  # 👈 Register auth routes with /auth prefix

@app.route("/")
def home():
    return {"message": "Deepfake Detection Backend is running."}

if __name__ == "__main__":
    app.run(debug=True)
