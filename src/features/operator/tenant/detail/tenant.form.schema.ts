import { Messages } from "next-intl";
import { z } from "zod";

const tenantStatuses = ["active", "trial", "suspended", "inactive"] as const;

export const createTenantFormSchema = (messages: Messages) => {
  const v = messages.operatorTenant.formValidation;

  return z.object({
    companyName: z.string().min(1, v.companyName.required),
    japaneseName: z.string(),
    tenantId: z.string().min(1, v.tenantId.required),
    plan: z.string().min(1, v.plan.required),
    renewalDate: z.string().min(1, v.renewalDate.required),
    status: z.enum(tenantStatuses, { error: v.status.required }),
    users: z.coerce.number().min(0, v.users.min),
    courses: z.coerce.number().min(0, v.courses.min),
    primaryContact: z.string(),
    contactEmail: z.union([z.literal(""), z.email(v.contactEmail.invalid)]),
    location: z.string(),
  });
};

export type TTenantFormSchema = ReturnType<typeof createTenantFormSchema>;
export type TTenantFormSchemaInput = z.input<TTenantFormSchema>;
export type TTenantFormSchemaOutput = z.output<TTenantFormSchema>;
