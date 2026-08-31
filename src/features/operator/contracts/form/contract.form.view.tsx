"use client";

import { FormInput } from "@/components/form/fields/form-input";
import { FormSelect } from "@/components/form/fields/form-select";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";

import type { TContractFormSchemaInput } from "./contract.form.schema";

type TenantOption = {
  label: string;
  value: string;
};

type ContractFormViewProps = {
  isEdit?: boolean;
  tenantOptions: TenantOption[];
  isTenantsLoading?: boolean;
  onCancel?: () => void;
};

export default function ContractFormView({
  isEdit = false,
  tenantOptions,
  isTenantsLoading = false,
  onCancel,
}: ContractFormViewProps) {
  const t = useTranslations("operatorContracts");

  return (
    <>
      <div className="grid gap-3 text-sm sm:grid-cols-2">
        <div className="sm:col-span-2">
          <FormSelect<TContractFormSchemaInput>
            name="tenantId"
            id="contractFormTenant"
            label={t("form.tenant")}
            placeholder={t("form.tenantPlaceholder")}
            options={tenantOptions}
            disabled={isEdit || isTenantsLoading}
            required
          />
        </div>

        <div>
          <FormSelect<TContractFormSchemaInput>
            name="plan"
            id="contractFormPlan"
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
          <FormSelect<TContractFormSchemaInput>
            name="status"
            id="contractFormStatus"
            label={t("form.status")}
            placeholder={t("form.statusPlaceholder")}
            options={[
              { label: t("form.statusOptions.valid"), value: "valid" },
              { label: t("form.statusOptions.trial"), value: "trial" },
              { label: t("form.statusOptions.suspended"), value: "suspended" },
              { label: t("form.statusOptions.expired"), value: "expired" },
            ]}
            required
          />
        </div>

        <div>
          <FormInput<TContractFormSchemaInput>
            name="maxUsers"
            id="contractFormSeats"
            type="number"
            min={1}
            label={t("form.seatAllocation")}
            required
          />
        </div>

        <div>
          <FormInput<TContractFormSchemaInput>
            name="activeUsers"
            id="contractFormUsed"
            type="number"
            min={0}
            label={t("form.usedSeats")}
          />
        </div>

        <div>
          <FormInput<TContractFormSchemaInput>
            name="contractStart"
            id="contractFormStart"
            type="date"
            label={t("form.startDate")}
            required
          />
        </div>

        <div>
          <FormInput<TContractFormSchemaInput>
            name="contractEnd"
            id="contractFormRenewal"
            type="date"
            label={t("form.renewalDate")}
            required
          />
        </div>

        <div>
          <FormInput<TContractFormSchemaInput>
            name="amount"
            id="contractFormMonthly"
            type="number"
            min={0}
            step={1000}
            label={t("form.monthlyFee")}
          />
        </div>

        <div>
          <FormInput<TContractFormSchemaInput>
            name="currency"
            id="contractFormCurrency"
            label={t("form.currency")}
            required
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
        <Button type="submit" id="contractFormSave">
          {t("form.save")}
        </Button>
      </div>
    </>
  );
}
