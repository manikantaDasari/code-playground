import { storage } from "../../server/storage";

type RouteContext = {
  params: {
    id: string;
  };
};

export async function GET(_request: Request, context: RouteContext) {
  try {
    const concept = await storage.getConcept(context.params.id);

    if (!concept) {
      return Response.json({ message: "Concept not found" }, { status: 404 });
    }

    return Response.json(concept);
  } catch {
    return Response.json(
      { message: "Failed to fetch concept" },
      { status: 500 },
    );
  }
}
