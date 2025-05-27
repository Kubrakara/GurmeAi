import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public", "data", "recipes.json");

export async function GET() {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const recipes = JSON.parse(data);

    return NextResponse.json(recipes);
  } catch (error) {
    return NextResponse.json(
      { error: "Tarifler verisi yüklenirken bir hata oluştu", details: error },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const newRecipe = await req.json(); // { name, description, ingredients, steps, image, category }

    const file = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(file);

    const category = newRecipe.category || "Genel";
    if (!data[category]) data[category] = [];

    data[category].push(newRecipe);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Tarif kaydedilirken bir hata oluştu", details: error },
      { status: 500 }
    );
  }
}
