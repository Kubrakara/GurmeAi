import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "data", "recipes.json");
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
