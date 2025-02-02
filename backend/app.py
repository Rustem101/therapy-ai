from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS  # Enable CORS for React frontend
import openai
import json
import os
from dotenv import load_dotenv

# Load environment variables (OpenAI key)
load_dotenv()

app = Flask(__name__)
CORS(app)  # Allow React to connect

# Load therapist data from JSON file
with open('therapists.json', 'r') as f:
    therapists = json.load(f)

# OpenAI setup
openai.api_key = os.getenv("OPENAI_API_KEY")

# API Endpoints
@app.route('/therapists', methods=['GET'])
def get_therapists():
    """Return list of therapists to display on the frontend."""
    return jsonify(therapists)

@app.route('/chat', methods=['POST'])
def chat():
    """Handle chat messages and return AI therapist responses."""
    data = request.json
    user_message = data.get('message')
    therapist_id = data.get('therapist_id')

    # Find selected therapist
    therapist = next((t for t in therapists if t['id'] == therapist_id), None)
    if not therapist:
        return jsonify({"error": "Therapist not found"}), 404

    # Craft system prompt based on therapist's approach
    system_prompt = f"""
    You are {therapist['name']}, a therapist specializing in {therapist['approach']}.
    Respond empathetically and professionally. Keep responses under 3 sentences.
    """

    return jsonify({"response": "You're good bro, don't worry!"})

    # # Call OpenAI
    # try:
    #     response = openai.ChatCompletion.create(
    #         model="gpt-4",
    #         messages=[
    #             {"role": "system", "content": system_prompt},
    #             {"role": "user", "content": user_message}
    #         ]
    #     )
    #     ai_response = response['choices'][0]['message']['content']
    #     return jsonify({"response": ai_response})
    
    # except Exception as e:
    #     return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)