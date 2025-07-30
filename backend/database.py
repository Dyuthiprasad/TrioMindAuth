from pymongo import MongoClient
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Read Mongo URI from environment
MONGO_URI = os.getenv("mongodb+srv://14chitrashree10d:hacksky@triomind%23333@cluster0.6strltm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

# Connect to MongoDB
client = MongoClient(mongodb+srv://14chitrashree10d:hacksky@triomind%23333@cluster0.6strltm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0)

# Access database (you can rename this)
db = client["triomind_db"]

# Access collection
users_collection = db["users"]
results_collection = db["results"]
ai_feedback_collection = db["ai_feedback"]
user_feedback_collection = db["user_feedback"]
