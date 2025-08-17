import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all concepts
  app.get("/api/concepts", async (req, res) => {
    try {
      const concepts = await storage.getConcepts();
      res.json(concepts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch concepts" });
    }
  });

  // Get a specific concept by ID
  app.get("/api/concepts/:id", async (req, res) => {
    try {
      const concept = await storage.getConcept(req.params.id);
      if (!concept) {
        res.status(404).json({ message: "Concept not found" });
        return;
      }
      res.json(concept);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch concept" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
