import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
      
      res.json({ 
        success: true, 
        message: "Contact request submitted successfully. We will call you back soon!",
        id: contactRequest.id 
      });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: "Invalid request data", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  // Get all contact requests (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const requests = await storage.getContactRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact requests" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
