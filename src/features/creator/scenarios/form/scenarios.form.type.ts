import { TScenarioFormSchemaInput } from "./scenarios.form.schema";

export const scenarioFormDefaultValues: TScenarioFormSchemaInput = {
  title: "",
  description: "",
  category: "",
  difficulty: "beginner",
  steps: 0,
  status: "draft",
};
