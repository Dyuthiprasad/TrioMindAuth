from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash
from database import users_collection  # make sure this points to your MongoDB users collection

auth = Blueprint("auth", __name__)

@auth.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    # Validate fields
    if not name or not email or not password:
        return jsonify({"success": False, "message": "All fields are required."}), 400

    # Check if user exists
    if users_collection.find_one({"email": email}):
        return jsonify({"success": False, "message": "Email already registered."}), 409

    # Hash password
    hashed_password = generate_password_hash(password)

    # Insert user
    users_collection.insert_one({
        "name": name,
        "email": email,
        "password": hashed_password
    })

    return jsonify({"success": True, "message": "User registered successfully."}), 201
