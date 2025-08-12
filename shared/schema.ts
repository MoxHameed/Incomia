import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const salaries = pgTable("salaries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  position: text("position").notNull(),
  company: text("company").notNull(),
  baseSalary: integer("base_salary").notNull(),
  bonus: integer("bonus").default(0),
  stock: integer("stock").default(0),
  totalComp: integer("total_comp").notNull(),
  location: text("location").notNull(),
  experience: text("experience").notNull(),
  verified: boolean("verified").default(true),
  createdAt: timestamp("created_at").default(sql`now()`).notNull(),
});

export const jobs = pgTable("jobs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  company: text("company").notNull(),
  location: text("location").notNull(),
  salaryMin: integer("salary_min").notNull(),
  salaryMax: integer("salary_max").notNull(),
  hasEquity: boolean("has_equity").default(false),
  hasBenefits: boolean("has_benefits").default(true),
  skills: text("skills").array().notNull(),
  description: text("description"),
  postedAt: timestamp("posted_at").default(sql`now()`).notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  title: text("title").notNull(),
  quote: text("quote").notNull(),
  rating: integer("rating").default(5),
  avatarUrl: text("avatar_url"),
  createdAt: timestamp("created_at").default(sql`now()`).notNull(),
});

export const insertSalarySchema = createInsertSchema(salaries).omit({
  id: true,
  createdAt: true,
});

export const insertJobSchema = createInsertSchema(jobs).omit({
  id: true,
  postedAt: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
  createdAt: true,
});

export type InsertSalary = z.infer<typeof insertSalarySchema>;
export type InsertJob = z.infer<typeof insertJobSchema>;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;

export type Salary = typeof salaries.$inferSelect;
export type Job = typeof jobs.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;
