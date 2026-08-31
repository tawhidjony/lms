export interface TenantQueryParams {
  page: number;
  limit: number;
  search?: string;
}

export type Tenant = {
  id: string;
  initials: string;
  name: string;
  nameJa: string;
  tenantId: string;
  users: number;
  courses: number;
  plan: string;
  expiryDate: string; // ISO date string
  status: string;
};

export type CreateTenantInput = {
  companyName: string;
  japaneseName: string;
  tenantId: string;
  plan: string;
  renewalDate: string;
  status: "active" | "trial" | "suspended" | "inactive";
  users: number;
  courses: number;
  primaryContact: string;
  contactEmail: string;
  location: string;
};

export type UpdateTenantInput = Partial<CreateTenantInput>;
