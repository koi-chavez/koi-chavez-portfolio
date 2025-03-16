import { NextResponse } from "next/server";

export const config = {
  runtime: "edge", // Specifies the edge function
};

export async function GET() {
  return NextResponse.json({ message: "Hello from an Edge Function!" });
}
