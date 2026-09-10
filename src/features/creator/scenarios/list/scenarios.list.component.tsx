"use client";

import { UiTableComponent } from "@/components/UiTable/table";
import { useGetListQuery } from "@/hooks/use-get-list.query";
import { useTranslations } from "next-intl";
import { scenariosApi } from "../api/scenarios.api";
import { scenariosKeys } from "../api/scenarios.keys";
import { Scenario } from "../types/scenarios.types";
import { scenariosListColumns } from "./scenarios.list.column";
import ScenariosListFilter from "./scenarios.list.filter";
import ScenariosListHeader from "./scenarios.list.header";

export default function ScenariosListComponent() {
  const t = useTranslations("creatorScenarios");
  const tCommon = useTranslations("Common");
  const params = { page: 0, limit: 10 };
  const { data, isPending, isError, error } = useGetListQuery({
    queryKey: [...scenariosKeys.list(params)] as (string | number)[],
    queryFn: () => scenariosApi.getAllScenarios(params),
  });

  if (isPending) {
    return <div className="text-sm text-slate-500">{tCommon("loading")}</div>;
  }
  if (isError) {
    return (
      <div className="text-sm text-red-500">
        {error instanceof Error ? error.message : t("list.error")}
      </div>
    );
  }

  return (
    <>
      <ScenariosListHeader />
      <ScenariosListFilter />
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden copia-table-wrap">
        <div className="copia-table-toolbar flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-slate-100 bg-white">
          <input
            type="search"
            placeholder={t("list.searchPlaceholder")}
            className="copia-table-search w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:max-w-xs"
          />
          <span className="copia-table-meta text-xs text-slate-500 sm:ml-auto">
            {t("list.showingMeta", { from: 1, to: 8, total: 12 })}
          </span>
        </div>
        <UiTableComponent<Scenario>
          id="scenariosTable"
          data={data?.data ?? []}
          columns={scenariosListColumns(t)}
        />
        <div className="copia-table-pagination flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-t border-slate-100 bg-white text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              className="copia-table-page-btn inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 "
              disabled
            >
              {t("list.previous")}
            </button>
            <div className="flex flex-wrap items-center gap-1">
              <button
                type="button"
                className="copia-table-page-btn inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 is-active"
              >
                1
              </button>
              <button
                type="button"
                className="copia-table-page-btn inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 "
              >
                2
              </button>
            </div>
            <button
              type="button"
              className="copia-table-page-btn inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 "
            >
              {t("list.next")}
            </button>
          </div>
          <span className="text-slate-500">
            {t("list.pageOf", { current: 1, total: 2 })}
          </span>
        </div>
      </div>
    </>
  );
}
