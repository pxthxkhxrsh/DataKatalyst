import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDemoRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Demo request route
  app.post("/api/demo-requests", async (req, res) => {
    try {
      const result = insertDemoRequestSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ 
          error: "Invalid request data", 
          details: result.error.errors 
        });
      }

      const demoRequest = await storage.createDemoRequest(result.data);
      console.log(`New demo request created: ${demoRequest.name} (${demoRequest.email})`);
      
      res.status(201).json(demoRequest);
    } catch (error) {
      console.error(`Error creating demo request: ${error}`);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
