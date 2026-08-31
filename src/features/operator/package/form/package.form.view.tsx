"use client";

import { FormInput } from "@/components/form/fields/form-input";
import { FormSelect } from "@/components/form/fields/form-select";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";

import type { TPackageFormSchemaInput } from "../schemas/package.form.schema";

type PackageFormViewProps = {
  isEdit?: boolean;
  onCancel?: () => void;
};

export default function PackageFormView({
  isEdit = false,
  onCancel,
}: PackageFormViewProps) {
  const t = useTranslations("operatorPackages");

  return (
    <>
      <h2 className="text-lg font-semibold text-slate-800 mb-6">
        {isEdit ? t("form.editTitle") : t("form.addTitle")}
      </h2>

      <div className="grid gap-3 text-sm sm:grid-cols-2">
        <div className="sm:col-span-2">
          <FormInput<TPackageFormSchemaInput>
            name="name"
            id="packageFormName"
            label={t("form.name")}
            placeholder={t("form.namePlaceholder")}
            required
          />
        </div>

        <div>
          <FormInput<TPackageFormSchemaInput>
            name="monthlyPrice"
            id="packageFormMonthlyPrice"
            type="number"
            min={0}
            label={t("form.monthlyPrice")}
            placeholder={t("form.monthlyPricePlaceholder")}
          />
        </div>

        <div>
          <FormInput<TPackageFormSchemaInput>
            name="yearlyPrice"
            id="packageFormYearlyPrice"
            type="number"
            min={0}
            label={t("form.yearlyPrice")}
            placeholder={t("form.yearlyPricePlaceholder")}
          />
        </div>

        <div>
          <FormInput<TPackageFormSchemaInput>
            name="seats"
            id="packageFormSeats"
            type="number"
            min={1}
            label={t("form.seats")}
            placeholder={t("form.seatsPlaceholder")}
            required
          />
        </div>

        <div>
          <FormSelect<TPackageFormSchemaInput>
            name="status"
            id="packageFormStatus"
            label={t("form.status")}
            placeholder={t("form.statusPlaceholder")}
            options={[
              { label: t("form.statusOptions.active"), value: "active" },
              { label: t("form.statusOptions.hidden"), value: "hidden" },
              { label: t("form.statusOptions.archived"), value: "archived" },
            ]}
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
        <Button type="submit" id="packageFormSave">
          {t("form.save")}
        </Button>
      </div>
    </>
  );
}
