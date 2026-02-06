import { createClient } from "next-sanity";

// Hardcoded values with env override for flexibility
export const projectId = "vp344hy3";
export const dataset = "production";
export const apiVersion = "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
