import { reference, z } from "astro:content";
import type { ImageFunction } from "astro:content";

export const articleSchema = (image: ImageFunction) =>
  z.object({
    isDraft: z.boolean().default(false),
    isMainHeadline: z.boolean().default(false),
    isSubHeadline: z.boolean().default(false),
    cover: image(),
    covert_alt: z.string().optional(),
    title: z.string().max(60, "Too long, max 60 characters"),
    description: z.string().max(160, "Too long, max 160 characters"),
    category: reference("categories"),
    authors: z.array(reference("authors")).min(1),
    publishedTime: z.string().datetime().or(z.date()),
    // Financial-specific metadata
    financialTickers: z.array(z.string()).optional(),
    marketSector: z.enum([
      "banking",
      "mining",
      "consumer",
      "property",
      "infrastructure",
      "energy",
      "technology",
      "healthcare",
      "agriculture",
      "manufacturing",
      "transportation",
      "telecommunications"
    ]).optional(),
    analysisType: z.enum(["fundamental", "technical", "news", "opinion"]).optional(),
    riskLevel: z.enum(["low", "medium", "high"]).optional(),
  });

export const viewSchema = z.object({
  title: z.string(),
  description: z.string(),
  blocks: z.array(z.any()),
});

export const categorySchema = z.object({
  title: z.string(),
  path: z
    .string()
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "The string must be a slug (only lowercase letters, numbers, and hyphens)."
    ),
  description: z.string(),
  color: z.string().regex(/^#[0-9a-fA-F]{6}$/, "Color must be a valid hex color code"),
});

export const authorSchema = (Image: ImageFunction) =>
  z.object({
    name: z.string(),
    job: z.string(),
    avatar: Image(),
    bio: z.string(),
    social: z.array(
      z.object({
        name: z.string(),
        url: z.string(),
        icon: z.string(),
      })
    ),
    // Financial expertise fields
    expertise: z.array(z.string()).optional(),
    credentials: z.string().optional(),
    yearsExperience: z.number().optional(),
  });

// avatar: Image().refine(
//   (img) => {
//       const isValidWidth = img.width > 100 && img.width < 2000;
//       const isValidHeight = img.height > 100 && img.height < 2000;
//       return isValidWidth && isValidHeight;
//   },
//   "Avatar image must have width and height between 100 and 2000"
// ),
