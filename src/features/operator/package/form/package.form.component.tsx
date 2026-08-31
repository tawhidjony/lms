"use client";

import { UiForm } from "@/components/form";
import type { TUiFormRef } from "@/components/form/ui-form.types";
import { Link, useRouter } from "@/i18n/navigation";
import { useQuery } from "@tanstack/react-query";
import { useMessages, useTranslations } from "next-intl";
import { useRef } from "react";

import { packageApi } from "../api/package.api";
import { packageKeys } from "../api/package.keys";
import {
  createPackageFormSchema,
  type TPackageFormSchemaInput,
  type TPackageFormSchemaOutput,
} from "../schemas/package.form.schema";
import { packageFormDefaultValues } from "./package.form.type";
import PackageFormView from "./package.form.view";

type PackageFormComponentProps = {
  packageId?: string;
};

export default function PackageFormComponent({
  packageId,
}: PackageFormComponentProps) {
  const isEdit = Boolean(packageId);
  const messages = useMessages();
  const schema = createPackageFormSchema(messages);
  const formRef = useRef<TUiFormRef<TPackageFormSchemaInput>>(null);
  const router = useRouter();
  const t = useTranslations("operatorPackages");
  const tCommon = useTranslations("Common");

  const { data: packageData, isPending, isError } = useQuery({
    queryKey: [...packageKeys.detail(packageId ?? "")],
    queryFn: () => packageApi.getPackage(packageId as string),
    enabled: isEdit,
  });

  const onSubmit = async (data: TPackageFormSchemaOutput): Promise<void> => {
    if (isEdit && packageId) {
      await packageApi.updatePackage(packageId, data);
    } else {
      await packageApi.createPackage(data);
    }
    router.push("/operator/packages");
  };

  const handleCancel = () => {
    router.push("/operator/packages");
  };

  if (isEdit && isPending) {
    return <div className="text-sm text-slate-500">{tCommon("loading")}</div>;
  }

  if (isEdit && isError) {
    return <div className="text-sm text-red-500">{t("list.error")}</div>;
  }

  const defaultValues: TPackageFormSchemaInput = packageData
    ? {
        name: packageData.name,
        monthlyPrice: packageData.monthlyPrice,
        yearlyPrice: packageData.yearlyPrice,
        seats: packageData.seats,
        status: packageData.status,
      }
    : packageFormDefaultValues;

  return (
    <div className="max-w-2xl">
      <Link
        href="/operator/packages"
        className="text-sm text-blue-600 hover:underline mb-4 inline-block"
      >
        ← {t("backToList")}
      </Link>

      <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
        <UiForm<TPackageFormSchemaInput, TPackageFormSchemaOutput>
          key={packageId ?? "new"}
          schema={schema}
          defaultValues={defaultValues}
          onSubmit={onSubmit}
          ref={formRef}
        >
          <PackageFormView isEdit={isEdit} onCancel={handleCancel} />
        </UiForm>
      </div>
    </div>
  );
}
