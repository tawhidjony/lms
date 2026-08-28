import { apiClient } from "@/lib/axios/client";
import type { TApiListResponse } from "@/types";
import type {
  CreateTenantInput,
  Tenant,
  TenantQueryParams,
  UpdateTenantInput,
} from "../types/tenant.types";

export const tenantApi = {
  getAllTenants: async (
    params: TenantQueryParams,
  ): Promise<TApiListResponse<Tenant>> => {
    const response = await apiClient.get<TApiListResponse<Tenant>>("/tenants", {
      params,
    });
    return response.data;
  },
  getTenant: async (id: string): Promise<Tenant> => {
    const response = await apiClient.get<Tenant>(`/tenants/${id}`);
    return response.data;
  },
  createTenant: async (input: CreateTenantInput): Promise<Tenant> => {
    const response = await apiClient.post<Tenant>("/tenants", input);
    return response.data;
  },
  updateTenant: async (
    id: string,
    input: UpdateTenantInput,
  ): Promise<Tenant> => {
    const response = await apiClient.put<Tenant>(`/tenants/${id}`, input);
    return response.data;
  },
};
