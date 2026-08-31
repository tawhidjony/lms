import type { PackageQueryParams } from "../types/package.types";

export const packageKeys = {
  all: ["packages"] as const,
  lists: () => [...packageKeys.all, "list"] as const,
  list: (params: PackageQueryParams) =>
    [...packageKeys.lists(), params] as const,
  detail: (id: string) => [...packageKeys.all, "detail", id] as const,
  create: () => [...packageKeys.all, "create"] as const,
  update: (id: string) => [...packageKeys.all, "update", id] as const,
  delete: (id: string) => [...packageKeys.all, "delete", id] as const,
};
