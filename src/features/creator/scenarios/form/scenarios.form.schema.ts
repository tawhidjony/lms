import { z } from "zod";

const scenarioStatuses = ["draft", "published", "archived"] as const;
const scenarioDifficulties = [
  "beginner",
  "intermediate",
  "advanced",
] as const;

export const createScenarioFormSchema = () => {
  return z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string(),
    category: z.string().min(1, "Category is required"),
    difficulty: z.enum(scenarioDifficulties, {
      error: "Difficulty is required",
    }),
    steps: z.coerce.number().min(0, "Steps must be 0 or greater"),
    status: z.enum(scenarioStatuses, { error: "Status is required" }),
  });
};

export type TScenarioFormSchema = ReturnType<typeof createScenarioFormSchema>;
export type TScenarioFormSchemaInput = z.input<TScenarioFormSchema>;
export type TScenarioFormSchemaOutput = z.output<TScenarioFormSchema>;
