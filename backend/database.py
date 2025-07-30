from pymongo import MongoClient
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Read Mongo URI from environment
MONGO_URI = os.getenv("MONGO_URI")

# Connect to MongoDB
client = MongoClient(MONGO_URI)

# Access database (you can rename this)
db = client["triomind_db"]

# Access collection
users_collection = db["users"]
results_collection = db["results"]
ai_feedback_collection = db["ai_feedback"]
user_feedback_collection = db["user_feedback"]
except Exception as e:
    print("❌ Could not connect to MongoDB:", e)
