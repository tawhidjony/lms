import type { TContractFormSchemaInput } from "./contract.form.schema";

export const contractFormDefaultValues: TContractFormSchemaInput = {
  tenantId: "",
  plan: "",
  status: "valid",
  maxUsers: 1,
  activeUsers: 0,
  contractStart: "",
  contractEnd: "",
  amount: 0,
  currency: "JPY",
};
