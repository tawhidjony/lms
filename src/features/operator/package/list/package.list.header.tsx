"use client";

import { ButtonLink } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function PackageListHeader() {
  const t = useTranslations("operatorPackages");

  return (
    <>
      <div className="flex flex-wrap justify-between items-start gap-3 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">{t("title")}</h2>
          <p className="text-sm text-slate-500">{t("description")}</p>
        </div>
        <ButtonLink href="/operator/packages/new" size="md">
          {t("addPackage")}
        </ButtonLink>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("stats.total")}
          </div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="packageStatTotal"
          >
            4
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("stats.active")}
          </div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="packageStatActive"
          >
            4
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("stats.tenants")}
          </div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="packageStatTenants"
          >
            12
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("stats.mrr")}
          </div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="packageStatMrr"
          >
            ¥3M
          </div>
        </div>
      </div>
    </>
  );
}
