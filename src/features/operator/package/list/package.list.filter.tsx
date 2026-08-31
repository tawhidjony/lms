"use client";

import { useTranslations } from "next-intl";

export default function PackageListFilter() {
  const t = useTranslations("operatorPackages");

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm mb-4">
      <div className="flex flex-wrap gap-3 items-center">
        <label className="text-xs font-medium text-slate-600 shrink-0">
          {t("filter")}
        </label>
        <select
          id="packageStatusFilter"
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 max-w-40"
        >
          <option value="all">{t("statusFilter.all")}</option>
          <option value="active">{t("statusFilter.active")}</option>
          <option value="hidden">{t("statusFilter.hidden")}</option>
          <option value="archived">{t("statusFilter.archived")}</option>
        </select>
        <span className="text-xs text-slate-400 ml-auto">{t("filterHint")}</span>
      </div>
    </div>
  );
}
