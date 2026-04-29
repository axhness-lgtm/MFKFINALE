import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Standard utility for merging Tailwind CSS classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generates a URL-friendly slug from a product name and ID.
 * Example: ("New Piece", "1027") -> "new-piece-1027"
 */
export function generateProductSlug(name: string, id: string): string {
  if (!name) return id;
  
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
    .replace(/(^-|-$)+/g, '');    // Remove leading/trailing hyphens
    
  return `${slug}-${id}`;
}

/**
 * Extracts the product ID from a slug.
 * Example: "new-piece-1027" -> "1027"
 */
export function extractIdFromSlug(slug: string): string {
  if (!slug) return '';
  
  // If it's just a number, return it (backward compatibility)
  if (/^\d+$/.test(slug)) return slug;
  
  const parts = slug.split('-');
  return parts[parts.length - 1]; // The ID is always the last part
}
