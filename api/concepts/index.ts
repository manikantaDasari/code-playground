import { storage } from "../../server/storage";

type VercelRequest = {
  method?: string;
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string | string[]) => void;
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  try {
    const concepts = await storage.getConcepts();
    res.status(200).json(concepts);
  } catch {
    res.status(500).json({ message: "Failed to fetch concepts" });
  }
}
