import type { TenantQueryParams } from "../types/tenant.types";

export const tenantKeys = {
  all: ["tenants"] as const,
  lists: () => [...tenantKeys.all, "list"] as const,
  list: (params: TenantQueryParams) => [...tenantKeys.lists(), params] as const,
  detail: (id: string) => [...tenantKeys.all, "detail", id] as const,
  create: () => [...tenantKeys.all, "create"] as const,
  update: (id: string) => [...tenantKeys.all, "update", id] as const,
  delete: (id: string) => [...tenantKeys.all, "delete", id] as const,
};
