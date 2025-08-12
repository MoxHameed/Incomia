import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSalarySchema, insertJobSchema, insertTestimonialSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Salary routes
  app.get("/api/salaries", async (req, res) => {
    try {
      const salaries = await storage.getSalaries();
      res.json(salaries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch salaries" });
    }
  });

  app.get("/api/salaries/:id", async (req, res) => {
    try {
      const salary = await storage.getSalary(req.params.id);
      if (!salary) {
        return res.status(404).json({ message: "Salary not found" });
      }
      res.json(salary);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch salary" });
    }
  });

  app.post("/api/salaries", async (req, res) => {
    try {
      const validatedData = insertSalarySchema.parse(req.body);
      const salary = await storage.createSalary(validatedData);
      res.status(201).json(salary);
    } catch (error) {
      res.status(400).json({ message: "Invalid salary data", error });
    }
  });

  // Job routes
  app.get("/api/jobs", async (req, res) => {
    try {
      const jobs = await storage.getJobs();
      res.json(jobs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch jobs" });
    }
  });

  app.get("/api/jobs/:id", async (req, res) => {
    try {
      const job = await storage.getJob(req.params.id);
      if (!job) {
        return res.status(404).json({ message: "Job not found" });
      }
      res.json(job);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch job" });
    }
  });

  app.post("/api/jobs", async (req, res) => {
    try {
      const validatedData = insertJobSchema.parse(req.body);
      const job = await storage.createJob(validatedData);
      res.status(201).json(job);
    } catch (error) {
      res.status(400).json({ message: "Invalid job data", error });
    }
  });

  // Testimonial routes
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  app.post("/api/testimonials", async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validatedData);
      res.status(201).json(testimonial);
    } catch (error) {
      res.status(400).json({ message: "Invalid testimonial data", error });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
