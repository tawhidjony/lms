"use client";

import { useTranslations } from "next-intl";

export default function ContractListFilter() {
  const t = useTranslations("operatorContracts");

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm mb-4">
      <div className="flex flex-wrap gap-3 items-center">
        <label className="text-xs font-medium text-slate-600 shrink-0">
          {t("filter")}
        </label>
        <select
          id="contractStatusFilter"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 max-w-40"
        >
          <option value="all">{t("statusFilter.all")}</option>
          <option value="valid">{t("statusFilter.valid")}</option>
          <option value="trial">{t("statusFilter.trial")}</option>
          <option value="suspended">{t("statusFilter.suspended")}</option>
          <option value="expired">{t("statusFilter.expired")}</option>
        </select>
        <select
          id="contractPlanFilter"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 max-w-40"
        >
          <option value="all">{t("planFilter.all")}</option>
          <option value="Enterprise">{t("planFilter.enterprise")}</option>
          <option value="Professional">{t("planFilter.professional")}</option>
          <option value="Trial">{t("planFilter.trial")}</option>
        </select>
        <span className="text-xs text-slate-400 ml-auto">{t("searchHint")}</span>
      </div>
    </div>
  );
}
