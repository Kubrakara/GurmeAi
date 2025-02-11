import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Girdi boş veya 'message' alanı eksik." },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
      (Verdiğin çıktı JSON formatında olmalı ve şu şekilde olmalı:)
      {
        "name": "Tarif Adı",
        "ingredients": ["malzeme1", "malzeme2"],
        "instructions": "Tarif yapılışı"
      }
      Bu malzemelerle tarif oluştur: ${message}
    `;

    const result = await model.generateContent(prompt);
    let response = result.response.text().trim();

    // AI yanıtında varsa kod bloklarını temizle
    if (response.startsWith("```json")) {
      response = response.replace(/```json|```/g, "").trim();
    } else if (response.startsWith("```")) {
      response = response.replace(/```/g, "").trim();
    }

    // JSON olmayan açıklamaları temizle
    const jsonStart = response.indexOf("{");
    const jsonEnd = response.lastIndexOf("}");
    if (jsonStart === -1 || jsonEnd === -1) {
      throw new Error("Geçerli JSON formatı bulunamadı.");
    }

    const jsonString = response.slice(jsonStart, jsonEnd + 1);

    let recipe;
    try {
      recipe = JSON.parse(jsonString);
    } catch (error) {
      return NextResponse.json(
        { error: "AI yanıtı geçersiz JSON formatında.", details: error },
        { status: 400 }
      );
    }

    return NextResponse.json(recipe);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Bir hata oluştu", details: error.message },
      { status: 500 }
    );
  }
}
