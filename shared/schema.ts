import { z } from "zod";

export const codeExampleSchema = z.object({
  language: z.enum(["javascript", "python"]),
  code: z.string(),
  comments: z.array(z.string()),
});

export const conceptSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  difficulty: z.enum(["beginner", "intermediate", "advanced"]),
  icon: z.string(),
  iconColor: z.string(),
  examples: z.object({
    javascript: codeExampleSchema,
    python: codeExampleSchema,
  }),
  comparison: z.object({
    javascript: z.array(z.string()),
    python: z.array(z.string()),
  }),
});

export type CodeExample = z.infer<typeof codeExampleSchema>;
export type Concept = z.infer<typeof conceptSchema>;

export const insertConceptSchema = conceptSchema.omit({ id: true });
export type InsertConcept = z.infer<typeof insertConceptSchema>;
