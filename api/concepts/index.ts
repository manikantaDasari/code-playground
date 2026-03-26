import { storage } from "../../server/storage";

export async function GET() {
  try {
    const concepts = await storage.getConcepts();
    return Response.json(concepts);
  } catch {
    return Response.json(
      { message: "Failed to fetch concepts" },
      { status: 500 },
    );
  }
}
