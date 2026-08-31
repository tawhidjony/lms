export type ContractStatus = "valid" | "trial" | "suspended" | "expired";

export interface ContractQueryParams {
  page: number;
  limit: number;
  search?: string;
}

export type Contract = {
  id: string;
  tenantId: string;
  tenantName: string;
  plan: string;
  maxUsers: number;
  activeUsers: number;
  contractStart: string;
  contractEnd: string;
  amount: number;
  currency: string;
  status: ContractStatus;
};

export type CreateContractInput = {
  tenantId: string;
  plan: string;
  maxUsers: number;
  activeUsers: number;
  contractStart: string;
  contractEnd: string;
  amount: number;
  currency: string;
  status: ContractStatus;
};

export type UpdateContractInput = Partial<CreateContractInput>;
