# routes/detect_image.py

from flask import Blueprint, request, jsonify
import io
from models.image_model import predict_image_class

image_detection_bp = Blueprint('image_detection', __name__)

@image_detection_bp.route('/image', methods=['POST'])
def detect_image():
    file = request.files.get("file")

    if not file:
        return jsonify({"error": "No image file uploaded"}), 400

    try:
        # Use your existing function from image_model.py
        result = predict_image_class(io.BytesIO(file.read()))
        return jsonify(result)
    
    except Exception as e:
        return jsonify({"error": f"Image processing failed: {str(e)}"}), 500
