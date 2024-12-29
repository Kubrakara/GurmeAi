from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import requests
import os
from dotenv import load_dotenv  # dotenv modülünü içe aktar

# .env dosyasını yükle
load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# .env dosyasından API anahtarını al
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "default_api_key")

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

@app.route('/api/ai', methods=['POST', 'OPTIONS'])
def proxy_gemini():
    if request.method == 'OPTIONS':
        return '', 204  # CORS için preflight izinleri

    try:
        # İstemciden gelen malzemeleri al
        data = request.get_json()
        ingredients = data.get('ingredients', '')
        if not ingredients:
            return jsonify({"error": "Malzemeler eksik."}), 400

        # Prompt oluştur
        prompt = f"""
        Evde şu malzemelerle yapılabilecek yemek tariflerini öner: {ingredients}.

        Her bir tarifi aşağıdaki JSON formatında döndür:
        {{
        "recipes": [
            {{
            "name": "Tarif Adı",
            "ingredients": ["Malzeme 1", "Malzeme 2", "Malzeme 3"],
            "instructions": "Tarifin hazırlanışı adım adım açıklanır."
            }}
        ]
        }}

        Lütfen sadece yukarıdaki JSON formatında cevap ver ve başka bir açıklama ekleme.
        """

        # Gemini API çağrısı
        gemini_url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={GEMINI_API_KEY}"
        headers = {"Content-Type": "application/json"}
        payload = {"contents": [{"parts": [{"text": prompt}]}]}

        gemini_response = requests.post(gemini_url, headers=headers, json=payload)

        if gemini_response.status_code != 200:
            return jsonify({"error": "Gemini API çağrısı başarısız.", "details": gemini_response.text}), 500

        gemini_data = gemini_response.json()
        candidates = gemini_data.get('candidates', [])
        if not candidates:
            return jsonify({"error": "Tarif bulunamadı."}), 404

        recipe_text = candidates[0].get('content', {}).get('parts', [{}])[0].get('text', '')
        return jsonify({"recipe": recipe_text})

    except Exception as e:
        return jsonify({"error": "Bir hata oluştu", "details": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8000)
