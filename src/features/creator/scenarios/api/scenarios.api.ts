import { apiClient } from "@/lib/axios/client";
import type { TApiListResponse } from "@/types";
import type {
  CreateScenarioInput,
  Scenario,
  ScenarioQueryParams,
  UpdateScenarioInput,
} from "../types/scenarios.types";

export const scenariosApi = {
  getAllScenarios: async (
    params: ScenarioQueryParams,
  ): Promise<TApiListResponse<Scenario>> => {
    const response = await apiClient.get<TApiListResponse<Scenario>>(
      "/scenarios",
      { params },
    );
    return response.data;
  },
  getScenario: async (id: string): Promise<Scenario> => {
    const response = await apiClient.get<Scenario>(`/scenarios/${id}`);
    return response.data;
  },
  createScenario: async (input: CreateScenarioInput): Promise<Scenario> => {
    const response = await apiClient.post<Scenario>("/scenarios", input);
    return response.data;
  },
  updateScenario: async (
    id: string,
    input: UpdateScenarioInput,
  ): Promise<Scenario> => {
    const response = await apiClient.put<Scenario>(`/scenarios/${id}`, input);
    return response.data;
  },
};
