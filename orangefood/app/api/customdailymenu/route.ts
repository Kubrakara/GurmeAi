import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "data",
      "dailymenu.json"
    );
    const data = fs.readFileSync(filePath, "utf-8");
    const menu = JSON.parse(data);

    return NextResponse.json(menu);
  } catch (error) {
    return NextResponse.json(
      { error: "Menü verisi yüklenirken bir hata oluştu", details: error },
      { status: 500 }
    );
  }
}
