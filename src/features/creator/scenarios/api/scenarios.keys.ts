import type { ScenarioQueryParams } from "../types/scenarios.types";

export const scenariosKeys = {
  all: ["scenarios"] as const,
  lists: () => [...scenariosKeys.all, "list"] as const,
  list: (params: ScenarioQueryParams) =>
    [...scenariosKeys.lists(), params] as const,
  detail: (id: string) => [...scenariosKeys.all, "detail", id] as const,
  create: () => [...scenariosKeys.all, "create"] as const,
  update: (id: string) => [...scenariosKeys.all, "update", id] as const,
  delete: (id: string) => [...scenariosKeys.all, "delete", id] as const,
};
