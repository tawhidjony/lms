import { Messages } from "next-intl";
import { z } from "zod";

const packageStatuses = ["active", "hidden", "archived"] as const;

export const createPackageFormSchema = (messages: Messages) => {
  const v = messages.operatorPackages.formValidation;

  return z.object({
    name: z.string().min(1, v.name.required),
    monthlyPrice: z.coerce.number().min(0, v.monthlyPrice.min),
    yearlyPrice: z.coerce.number().min(0, v.yearlyPrice.min),
    seats: z.coerce.number().min(1, v.seats.min),
    status: z.enum(packageStatuses, { error: v.status.required }),
  });
};

export type TPackageFormSchema = ReturnType<typeof createPackageFormSchema>;
export type TPackageFormSchemaInput = z.input<TPackageFormSchema>;
export type TPackageFormSchemaOutput = z.output<TPackageFormSchema>;
