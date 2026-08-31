"use client";

import { FormInput } from "@/components/form/fields/form-input";
import { FormSelect } from "@/components/form/fields/form-select";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";

import { TTenantFormSchemaInput } from "./tenant.form.schema";

type TenantFormViewProps = {
  onCancel?: () => void;
};

export default function TenantFormView({ onCancel }: TenantFormViewProps) {
  const t = useTranslations("operatorTenant");

  return (
    <>
      <div className="grid gap-3 text-sm sm:grid-cols-2">
        <div className="sm:col-span-2">
          <FormInput<TTenantFormSchemaInput>
            name="companyName"
            id="tenantFormName"
            label={t("form.companyName")}
            placeholder={t("form.companyNamePlaceholder")}
            required
          />
        </div>

        <div className="sm:col-span-2">
          <FormInput<TTenantFormSchemaInput>
            name="japaneseName"
            id="tenantFormNameJa"
            label={t("form.japaneseName")}
            placeholder={t("form.japaneseNamePlaceholder")}
          />
        </div>

        <div>
          <FormInput<TTenantFormSchemaInput>
            name="tenantId"
            id="tenantFormTenantId"
            label={t("form.tenantId")}
            placeholder={t("form.tenantIdPlaceholder")}
            className="font-mono"
            required
          />
        </div>

        <div>
          <FormSelect<TTenantFormSchemaInput>
            name="plan"
            id="tenantFormPlan"
            label={t("form.plan")}
            placeholder={t("form.planPlaceholder")}
            options={[
              { label: t("form.planOptions.enterprise"), value: "Enterprise" },
              {
                label: t("form.planOptions.professional"),
                value: "Professional",
              },
              { label: t("form.planOptions.trial"), value: "Trial" },
            ]}
            required
          />
        </div>

        <div>
          <FormInput<TTenantFormSchemaInput>
            name="renewalDate"
            id="tenantFormRenewal"
            type="date"
            label={t("form.renewalDate")}
            required
          />
        </div>

        <div>
          <FormSelect<TTenantFormSchemaInput>
            name="status"
            id="tenantFormStatus"
            label={t("form.status")}
            placeholder={t("form.statusPlaceholder")}
            options={[
              { label: t("form.statusOptions.active"), value: "active" },
              { label: t("form.statusOptions.trial"), value: "trial" },
              { label: t("form.statusOptions.suspended"), value: "suspended" },
              { label: t("form.statusOptions.inactive"), value: "inactive" },
            ]}
            required
          />
        </div>

        <div>
          <FormInput<TTenantFormSchemaInput>
            name="users"
            id="tenantFormUsers"
            type="number"
            min={0}
            label={t("form.users")}
          />
        </div>

        <div>
          <FormInput<TTenantFormSchemaInput>
            name="courses"
            id="tenantFormCourses"
            type="number"
            min={0}
            label={t("form.courses")}
          />
        </div>

        <div>
          <FormInput<TTenantFormSchemaInput>
            name="primaryContact"
            id="tenantFormContact"
            label={t("form.primaryContact")}
          />
        </div>

        <div>
          <FormInput<TTenantFormSchemaInput>
            name="contactEmail"
            id="tenantFormEmail"
            type="email"
            label={t("form.contactEmail")}
          />
        </div>

        <div className="sm:col-span-2">
          <FormInput<TTenantFormSchemaInput>
            name="location"
            id="tenantFormLocation"
            label={t("form.location")}
            placeholder={t("form.locationPlaceholder")}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          color="neutral"
          onClick={onCancel}
        >
          {t("form.cancel")}
        </Button>
        <Button type="submit" id="tenantFormSave">
          {t("form.save")}
        </Button>
      </div>
    </>
  );
}
