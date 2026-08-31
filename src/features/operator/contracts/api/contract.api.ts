import { apiClient } from "@/lib/axios/client";
import type { TApiListResponse } from "@/types";
import type {
  Contract,
  ContractQueryParams,
  CreateContractInput,
  UpdateContractInput,
} from "../types/contract.types";

export const contractApi = {
  getAllContracts: async (
    params: ContractQueryParams,
  ): Promise<TApiListResponse<Contract>> => {
    const response = await apiClient.get<TApiListResponse<Contract>>(
      "/contracts",
      { params },
    );
    return response.data;
  },
  getContract: async (id: string): Promise<Contract> => {
    const response = await apiClient.get<Contract>(`/contracts/${id}`);
    return response.data;
  },
  createContract: async (input: CreateContractInput): Promise<Contract> => {
    const response = await apiClient.post<Contract>("/contracts", input);
    return response.data;
  },
  updateContract: async (
    id: string,
    input: UpdateContractInput,
  ): Promise<Contract> => {
    const response = await apiClient.put<Contract>(`/contracts/${id}`, input);
    return response.data;
  },
};
