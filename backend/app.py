from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

conversation_history = []

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json['message']
    emotion = request.json['emotion']  # From webcam
    
    # Store last 5 messages
    conversation_history.append({"role": "user", "content": user_message})
    if len(conversation_history) > 5:
        conversation_history.pop(0)
        
    # Build context-aware prompt
    context = "\n".join([msg['content'] for msg in conversation_history[-3:]])
    persona = PERSONAS[request.json['persona']]
    
    prompt = f"""
    {persona['prompt']}
    Current emotional state: {emotion}
    Recent context: {context}
    Respond to: {user_message}
    """
    
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "system", "content": prompt}]
    )
    
    return jsonify({"reply": response.choices[0].message.content})