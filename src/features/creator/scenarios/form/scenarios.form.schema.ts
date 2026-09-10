import { Messages } from "next-intl";
import { z } from "zod";

const scenarioStatuses = ["draft", "published", "archived"] as const;
const scenarioDifficulties = [
  "beginner",
  "intermediate",
  "advanced",
] as const;

export const createScenarioFormSchema = (messages: Messages) => {
  const v = messages.creatorScenarios.formValidation;

  return z.object({
    title: z.string().min(1, v.title.required),
    description: z.string(),
    category: z.string().min(1, v.category.required),
    difficulty: z.enum(scenarioDifficulties, {
      error: v.difficulty.required,
    }),
    steps: z.coerce.number().min(0, v.steps.min),
    status: z.enum(scenarioStatuses, { error: v.status.required }),
  });
};

export type TScenarioFormSchema = ReturnType<typeof createScenarioFormSchema>;
export type TScenarioFormSchemaInput = z.input<TScenarioFormSchema>;
export type TScenarioFormSchemaOutput = z.output<TScenarioFormSchema>;
