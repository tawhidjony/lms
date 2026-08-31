import type { ContractQueryParams } from "../types/contract.types";

export const contractKeys = {
  all: ["contracts"] as const,
  lists: () => [...contractKeys.all, "list"] as const,
  list: (params: ContractQueryParams) =>
    [...contractKeys.lists(), params] as const,
  detail: (id: string) => [...contractKeys.all, "detail", id] as const,
  create: () => [...contractKeys.all, "create"] as const,
  update: (id: string) => [...contractKeys.all, "update", id] as const,
  delete: (id: string) => [...contractKeys.all, "delete", id] as const,
};
