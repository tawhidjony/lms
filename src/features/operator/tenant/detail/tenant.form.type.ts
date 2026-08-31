import { TTenantFormSchemaInput } from "./tenant.form.schema";

export const tenantFormDefaultValues: TTenantFormSchemaInput = {
  companyName: "",
  japaneseName: "",
  tenantId: "",
  plan: "",
  renewalDate: "",
  status: "active",
  users: 0,
  courses: 0,
  primaryContact: "",
  contactEmail: "",
  location: "",
};
