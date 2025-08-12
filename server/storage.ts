import { type Salary, type Job, type Testimonial, type InsertSalary, type InsertJob, type InsertTestimonial } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Salary methods
  getSalaries(): Promise<Salary[]>;
  getSalary(id: string): Promise<Salary | undefined>;
  createSalary(salary: InsertSalary): Promise<Salary>;
  
  // Job methods
  getJobs(): Promise<Job[]>;
  getJob(id: string): Promise<Job | undefined>;
  createJob(job: InsertJob): Promise<Job>;
  
  // Testimonial methods
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: string): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private salaries: Map<string, Salary>;
  private jobs: Map<string, Job>;
  private testimonials: Map<string, Testimonial>;

  constructor() {
    this.salaries = new Map();
    this.jobs = new Map();
    this.testimonials = new Map();
    
    // Initialize with some sample data
    this.initializeData();
  }

  private async initializeData() {
    // Sample salaries
    const sampleSalaries: InsertSalary[] = [
      {
        position: "Product Manager",
        company: "Tech Startup",
        baseSalary: 145000,
        bonus: 25000,
        stock: 30000,
        totalComp: 200000,
        location: "San Francisco, CA",
        experience: "5 years exp",
        verified: true,
      },
      {
        position: "UX Designer",
        company: "Fortune 500",
        baseSalary: 98000,
        bonus: 8000,
        stock: 12000,
        totalComp: 118000,
        location: "Austin, TX",
        experience: "3 years exp",
        verified: true,
      },
      {
        position: "Data Scientist",
        company: "Fintech",
        baseSalary: 165000,
        bonus: 40000,
        stock: 55000,
        totalComp: 260000,
        location: "New York, NY",
        experience: "7 years exp",
        verified: true,
      },
      {
        position: "Software Engineer",
        company: "BigTech",
        baseSalary: 125000,
        bonus: 15000,
        stock: 25000,
        totalComp: 165000,
        location: "Seattle, WA",
        experience: "4 years exp",
        verified: true,
      },
      {
        position: "Marketing Manager",
        company: "E-commerce",
        baseSalary: 88000,
        bonus: 12000,
        stock: 8000,
        totalComp: 108000,
        location: "Los Angeles, CA",
        experience: "6 years exp",
        verified: true,
      }
    ];

    for (const salary of sampleSalaries) {
      await this.createSalary(salary);
    }

    // Sample jobs
    const sampleJobs: InsertJob[] = [
      {
        title: "Senior Frontend Developer",
        company: "TechCorp Inc.",
        location: "Remote / San Francisco, CA",
        salaryMin: 120000,
        salaryMax: 160000,
        hasEquity: true,
        hasBenefits: true,
        skills: ["React", "TypeScript", "Node.js"],
        description: "Join our team building the next generation of web applications.",
      },
      {
        title: "Product Marketing Manager",
        company: "StartupXYZ",
        location: "New York, NY",
        salaryMin: 85000,
        salaryMax: 110000,
        hasEquity: true,
        hasBenefits: true,
        skills: ["Marketing", "SaaS", "Analytics"],
        description: "Drive product marketing strategy for our growing SaaS platform.",
      },
      {
        title: "Data Engineer",
        company: "DataFlow Solutions",
        location: "Austin, TX",
        salaryMin: 130000,
        salaryMax: 170000,
        hasEquity: true,
        hasBenefits: true,
        skills: ["Python", "AWS", "Spark"],
        description: "Build scalable data pipelines and infrastructure.",
      }
    ];

    for (const job of sampleJobs) {
      await this.createJob(job);
    }

    // Sample testimonials
    const sampleTestimonials: InsertTestimonial[] = [
      {
        name: "Michael R.",
        title: "Software Engineer",
        quote: "Using Incomia's salary data, I negotiated a $35K raise. The transparency gave me the confidence to know my worth.",
        rating: 5,
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      },
      {
        name: "Sarah L.",
        title: "Marketing Manager",
        quote: "Found my dream job through their transparent job board. No more guessing games about compensation!",
        rating: 5,
        avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      },
      {
        name: "David K.",
        title: "Product Designer",
        quote: "The career insights helped me pivot industries and increase my salary by 60%. This community is invaluable.",
        rating: 5,
        avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      }
    ];

    for (const testimonial of sampleTestimonials) {
      await this.createTestimonial(testimonial);
    }
  }

  async getSalaries(): Promise<Salary[]> {
    return Array.from(this.salaries.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getSalary(id: string): Promise<Salary | undefined> {
    return this.salaries.get(id);
  }

  async createSalary(insertSalary: InsertSalary): Promise<Salary> {
    const id = randomUUID();
    const salary: Salary = {
      ...insertSalary,
      id,
      createdAt: new Date(),
      bonus: insertSalary.bonus ?? 0,
      stock: insertSalary.stock ?? 0,
      verified: insertSalary.verified ?? true,
    };
    this.salaries.set(id, salary);
    return salary;
  }

  async getJobs(): Promise<Job[]> {
    return Array.from(this.jobs.values()).sort((a, b) => 
      new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
    );
  }

  async getJob(id: string): Promise<Job | undefined> {
    return this.jobs.get(id);
  }

  async createJob(insertJob: InsertJob): Promise<Job> {
    const id = randomUUID();
    const job: Job = {
      ...insertJob,
      id,
      postedAt: new Date(),
      description: insertJob.description ?? null,
      hasEquity: insertJob.hasEquity ?? false,
      hasBenefits: insertJob.hasBenefits ?? true,
    };
    this.jobs.set(id, job);
    return job;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getTestimonial(id: string): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = {
      ...insertTestimonial,
      id,
      createdAt: new Date(),
      rating: insertTestimonial.rating ?? 5,
      avatarUrl: insertTestimonial.avatarUrl ?? null,
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
