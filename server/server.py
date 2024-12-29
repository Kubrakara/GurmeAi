from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os
from dotenv import load_dotenv
import google.generativeai as genai

# .env dosyasını yükle
load_dotenv()

app = Flask(__name__)
CORS(app)

# .env dosyasından API anahtarını al
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Google Generative AI için yapılandırma
genai.configure(api_key=GEMINI_API_KEY)

generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-2.0-flash-exp",
    generation_config=generation_config,
)

# /api/home endpoint'i (Tarifler)
@app.route('/api/home', methods=['GET'])
def return_home():
    try:
        with open('recipes.json', 'r', encoding='utf-8') as file:
            recipes = json.load(file)
        return jsonify(recipes)
    except Exception as e:
        return jsonify({"error": "Tarifler verisi yüklenirken bir hata oluştu", "details": str(e)}), 500

# /api/menu endpoint'i (Günün Menüsü)
@app.route('/api/menu', methods=['GET'])
def get_menu():
    try:
        with open('menu.json', 'r', encoding='utf-8') as file:
            menu = json.load(file)
        return jsonify(menu)
    except Exception as e:
        return jsonify({"error": "Menu verisi yüklenirken bir hata oluştu", "details": str(e)}), 500

# /api/ai endpoint'i (AI'den tarif oluşturma)
@app.route('/api/ai', methods=['POST'])
def get_ai():
    try:
        data = request.get_json()
        if not data or 'message' not in data:
            return jsonify({"error": "Girdi boş veya 'message' alanı eksik."}), 400

        user_input = data['message']
        chat_session = model.start_chat(history=[])

        # AI modeline mesaj gönder
        message = f"""
        (Verdiğin çıktı JSON formatında olmalı ve şu şekilde olmalı:)
        {{
            "name": "Tarif Adı",
            "ingredients": ["malzeme1", "malzeme2"],
            "instructions": "Tarif yapılışı"
        }}
        Bu malzemelerle tarif oluştur: {user_input}
        """
        response = chat_session.send_message(message)

        # Yanıtı işleyin ve JSON'a dönüştürün
        raw_data = response.text.strip()
        if raw_data.startswith("```json"):
            raw_data = raw_data[7:]
        if raw_data.endswith("```"):
            raw_data = raw_data[:-3]

        recipe = json.loads(raw_data)
        return jsonify(recipe)

    except json.JSONDecodeError as e:
        return jsonify({"error": "Geçersiz JSON formatı", "details": str(e)}), 400
    except Exception as e:
        return jsonify({"error": "Bir hata oluştu", "details": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8000)
