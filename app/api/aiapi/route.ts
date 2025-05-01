import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Girdi boş veya 'message' alanı eksik." },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
Aşağıdaki malzemeleri dikkate alarak toplam 5 farklı yemek tarifi oluştur.

🔹 Kurallar:
- 1. tarif, sadece kullanıcı tarafından verilen malzemelerle hazırlanmalı. Ekstra malzeme kullanma.
- Diğer 4 tarifte, ihtiyaca göre başka malzemeler ekleyebilirsin.
- Eğer verilen malzeme çok azsa, 1. tarif buna uygun şekilde minimalist olmalı.
- Tarifler aşağıdaki kategorilere hitap etmeli:
  1. Sadece kullanıcı malzemeleriyle (Minimal)
  2. Geleneksel Türk mutfağı
  3. Sağlıklı veya düşük kalorili
  4. Yaratıcı veya sıra dışı
  5. Pratik/günlük ev yemeği

🔹 İçerik Formatı:
Her tarif aşağıdaki gibi tanımlı olacak:
- "name": Tarifin adı
- "type": Tarifin kategorisi ("Geleneksel", "Sağlıklı", "Pratik" vb.)
- "ingredients": Malzemeler (emoji BAŞTA, örnek: "🥔 2 adet patates")
- "instructions": Adım adım açıklama, numaralandırılmış

🔹 JSON Format Kuralları:
- Sadece geçerli bir JSON array döndür.
- Markdown (\`\`\`), açıklama veya başka metin ekleme.

[
  {
    "name": "Elma Dilimleri",
    "type": "Minimal",
    "ingredients": ["🍎 1 adet elma"],
    "instructions": "1. Elmayı yıkayın. 2. Dilimleyin ve servis yapın."
  },
  ...
]

📌 Dışında hiçbir şey yazma. Kod bloğu kullanma. Sadece geçerli bir JSON array döndür.

Kullanıcının elindeki malzemeler: ${message}
`;

    const result = await model.generateContent(prompt);
    let response = result.response.text().trim();

    response = response.replace(/```json|```/g, "").trim();

    const jsonStart = response.indexOf("[");
    const jsonEnd = response.lastIndexOf("]");

    if (jsonStart === -1 || jsonEnd === -1) {
      throw new Error("Geçerli JSON dizisi bulunamadı.");
    }

    const jsonString = response.slice(jsonStart, jsonEnd + 1);

    let recipes;
    try {
      recipes = JSON.parse(jsonString);
    } catch (error) {
      return NextResponse.json(
        {
          error: "AI yanıtı geçersiz JSON formatında.",
          raw: jsonString,
          details: (error as Error).message,
        },
        { status: 400 }
      );
    }

    if (!Array.isArray(recipes)) {
      return NextResponse.json(
        { error: "Beklenen format: JSON array." },
        { status: 422 }
      );
    }

    return NextResponse.json({ recipes });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Bilinmeyen bir hata oluştu.";
    return NextResponse.json(
      { error: "Sunucu hatası", details: errorMessage },
      { status: 500 }
    );
  }
}
