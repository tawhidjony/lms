export type PackageStatus = "active" | "hidden" | "archived";

export interface PackageQueryParams {
  page: number;
  limit: number;
  search?: string;
}

export type Package = {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  seats: number;
  tenantCount: number;
  status: PackageStatus;
};

export type CreatePackageInput = {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  seats: number;
  status: PackageStatus;
};

export type UpdatePackageInput = Partial<CreatePackageInput>;
