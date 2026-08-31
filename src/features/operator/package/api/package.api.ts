import { apiClient } from "@/lib/axios/client";
import type { TApiListResponse } from "@/types";
import type {
  CreatePackageInput,
  Package,
  PackageQueryParams,
  UpdatePackageInput,
} from "../types/package.types";

export const packageApi = {
  getAllPackages: async (
    params: PackageQueryParams,
  ): Promise<TApiListResponse<Package>> => {
    const response = await apiClient.get<TApiListResponse<Package>>(
      "/packages",
      { params },
    );
    return response.data;
  },
  getPackage: async (id: string): Promise<Package> => {
    const response = await apiClient.get<Package>(`/packages/${id}`);
    return response.data;
  },
  createPackage: async (input: CreatePackageInput): Promise<Package> => {
    const response = await apiClient.post<Package>("/packages", input);
    return response.data;
  },
  updatePackage: async (
    id: string,
    input: UpdatePackageInput,
  ): Promise<Package> => {
    const response = await apiClient.put<Package>(`/packages/${id}`, input);
    return response.data;
  },
};
