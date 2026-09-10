"use client";

import { useTranslations } from "next-intl";

export default function ScenariosListFilter() {
  const t = useTranslations("creatorScenarios");

  return (
    <>
      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm mb-4">
        <div className="flex flex-wrap gap-3 items-center">
          <label className="text-xs font-medium text-slate-600 shrink-0">
            {t("filter.label")}
          </label>
          <select
            id="scenarioStatusFilter"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 max-w-40"
          >
            <option value="all">{t("filter.allStatuses")}</option>
            <option value="draft">{t("status.draft")}</option>
            <option value="published">{t("status.published")}</option>
            <option value="archived">{t("status.archived")}</option>
          </select>
          <select
            id="scenarioDifficultyFilter"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 max-w-40"
          >
            <option value="all">{t("filter.allDifficulties")}</option>
            <option value="beginner">{t("difficulty.beginner")}</option>
            <option value="intermediate">{t("difficulty.intermediate")}</option>
            <option value="advanced">{t("difficulty.advanced")}</option>
          </select>
          <span className="text-xs text-slate-400 ml-auto">
            {t("filter.hint")}
          </span>
        </div>
      </div>
    </>
  );
}
