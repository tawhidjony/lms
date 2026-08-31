import type { TPackageFormSchemaInput } from "../schemas/package.form.schema";

export const packageFormDefaultValues: TPackageFormSchemaInput = {
  name: "",
  monthlyPrice: 0,
  yearlyPrice: 0,
  seats: 1,
  status: "active",
};
