"use client";

import { UiTableComponent } from "@/components/UiTable/table";
import { useGetListQuery } from "@/hooks/use-get-list.query";
import { useTranslations } from "next-intl";
import { packageApi } from "../api/package.api";
import { packageKeys } from "../api/package.keys";
import type { Package } from "../types/package.types";
import { packageListColumns } from "./package.list.column";
import PackageListFilter from "./package.list.filter";
import PackageListHeader from "./package.list.header";

export default function PackageListComponent() {
  const t = useTranslations("operatorPackages");
  const tCommon = useTranslations("Common");
  const params = { page: 0, limit: 10 };

  const { data, isPending, isError, error } = useGetListQuery({
    queryKey: [...packageKeys.list(params)] as (string | number)[],
    queryFn: () => packageApi.getAllPackages(params),
  });

  console.log(data);

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

  const items = data?.data ?? [];
  const total = data?.meta?.total ?? items.length;
  const from = items.length > 0 ? 1 : 0;
  const to = items.length;

  return (
    <>
      <PackageListHeader />
      <PackageListFilter />
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden copia-table-wrap">
        <div className="copia-table-toolbar flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-slate-100 bg-white">
          <input
            type="search"
            placeholder={t("searchPlaceholder")}
            className="copia-table-search w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:max-w-xs"
          />
          <span className="copia-table-meta text-xs text-slate-500 sm:ml-auto">
            {t("showingMeta", { from, to, total })}
          </span>
        </div>
        <UiTableComponent<Package>
          id="packagesTable"
          data={data?.data ?? []}
          columns={packageListColumns(t)}
        />
        <div className="copia-table-pagination flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-t border-slate-100 bg-white text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              className="copia-table-page-btn inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50"
              disabled
            >
              {t("previous")}
            </button>
            <div className="flex flex-wrap items-center gap-1" />
            <button
              type="button"
              className="copia-table-page-btn inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50"
              disabled
            >
              {t("next")}
            </button>
          </div>
          <span className="text-slate-500">
            {t("pageOf", { current: 1, total: 1 })}
          </span>
        </div>
      </div>
    </>
  );
}
