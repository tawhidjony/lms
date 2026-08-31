import { Messages } from "next-intl";
import { z } from "zod";

export const contractStatuses = [
  "valid",
  "trial",
  "suspended",
  "expired",
] as const;

export const createContractFormSchema = (messages: Messages) => {
  const v = messages.operatorContracts.formValidation;

  return z.object({
    tenantId: z.string().min(1, v.tenantId.required),
    plan: z.string().min(1, v.plan.required),
    status: z.enum(contractStatuses, { error: v.status.required }),
    maxUsers: z.coerce.number().min(1, v.maxUsers.min),
    activeUsers: z.coerce.number().min(0, v.activeUsers.min),
    contractStart: z.string().min(1, v.contractStart.required),
    contractEnd: z.string().min(1, v.contractEnd.required),
    amount: z.coerce.number().min(0, v.amount.min),
    currency: z.string().min(1, v.currency.required),
  });
};

export type TContractFormSchema = ReturnType<typeof createContractFormSchema>;
export type TContractFormSchemaInput = z.input<TContractFormSchema>;
export type TContractFormSchemaOutput = z.output<TContractFormSchema>;
