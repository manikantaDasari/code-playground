import { storage } from "../../server/storage";

type VercelRequest = {
  method?: string;
  query?: {
    id?: string | string[];
  };
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

  const id = Array.isArray(req.query?.id) ? req.query.id[0] : req.query?.id;

  if (!id) {
    res.status(400).json({ message: "Concept id is required" });
    return;
  }

  try {
    const concept = await storage.getConcept(id);

    if (!concept) {
      res.status(404).json({ message: "Concept not found" });
      return;
    }

    res.status(200).json(concept);
  } catch {
    res.status(500).json({ message: "Failed to fetch concept" });
  }
}
