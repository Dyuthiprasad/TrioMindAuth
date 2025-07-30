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
