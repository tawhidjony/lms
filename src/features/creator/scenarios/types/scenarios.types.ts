export interface ScenarioQueryParams {
  page: number;
  limit: number;
  search?: string;
}

export type ScenarioStatus = "draft" | "published" | "archived";
export type ScenarioDifficulty = "beginner" | "intermediate" | "advanced";

export type Scenario = {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: ScenarioDifficulty;
  steps: number;
  status: ScenarioStatus;
  updatedAt: string;
};

export type CreateScenarioInput = {
  title: string;
  description: string;
  category: string;
  difficulty: ScenarioDifficulty;
  steps: number;
  status: ScenarioStatus;
};

export type UpdateScenarioInput = Partial<CreateScenarioInput>;
