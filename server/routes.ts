import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Demo request route
  app.post("/api/demo-requests", async (req, res) => {
    try {
      const { name, email, company, phone, message } = req.body;
      
      // Basic validation
      if (!name || !email || !company) {
        return res.status(400).json({ 
          error: "Missing required fields: name, email, and company are required" 
        });
      }

      const demoRequest = await storage.createDemoRequest({
        name,
        email,
        company,
        phone,
        message
      });
      
      res.status(201).json(demoRequest);
    } catch (error) {
      console.error(`Error creating demo request: ${error}`);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
