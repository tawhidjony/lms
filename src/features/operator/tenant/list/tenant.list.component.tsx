"use client";
import { UiTableComponent } from "@/components/UiTable/table";
import { useGetListQuery } from "@/hooks/use-get-list.query";
import { useTranslations } from "next-intl";
import { tenantApi } from "../api/tenant.api";
import { tenantKeys } from "../api/tenant.keys";
import { Tenant } from "../types/tenant.types";
import { tenantListColumns } from "./tenant.list.column";
import TenantListFilter from "./tenant.list.filter";
import TenantListHeader from "./tenant.list.header";

export default function TenantListComponent() {
  const t = useTranslations("operatorTenant");

  const tCommon = useTranslations("Common");
  const params = { page: 0, limit: 10 };
  const { data, isPending, isError, error } = useGetListQuery({
    queryKey: [...tenantKeys.list(params)] as (string | number)[],
    queryFn: () => tenantApi.getAllTenants(params),
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
      <TenantListHeader />
      <TenantListFilter />
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden copia-table-wrap">
        <div className="copia-table-toolbar flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-slate-100 bg-white">
          <input
            type="search"
            placeholder={t("searchPlaceholder")}
            className="copia-table-search w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:max-w-xs"
          />
          <span className="copia-table-meta text-xs text-slate-500 sm:ml-auto">
            {t("showingMeta", { from: 1, to: 8, total: 12 })}
          </span>
        </div>
        <UiTableComponent<Tenant>
          id="tenantsTable"
          data={data?.data ?? []}
          columns={tenantListColumns}
        />
        <div className="copia-table-pagination flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-t border-slate-100 bg-white text-xs text-slate-600">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              className="copia-table-page-btn inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 "
              disabled
            >
              {t("previous")}
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
              {t("next")}
            </button>
          </div>
          <span className="text-slate-500">
            {t("pageOf", { current: 1, total: 2 })}
          </span>
        </div>
      </div>

      <div
        id="tenantStatusModal"
        className="hidden fixed inset-0 z-50 items-center justify-center bg-black/40 p-4"
      >
        <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6">
          <h3 className="font-semibold text-slate-800 mb-2">
            {t("statusModal.title")}
          </h3>
          <p className="text-sm text-slate-600 mb-1">
            <span
              id="statusTenantName"
              className="font-medium text-slate-800"
            />
          </p>
          <p className="text-xs text-slate-500 mb-4">
            {t("statusModal.current")} <span id="statusCurrentBadge" />
          </p>
          <label className="text-xs font-medium text-slate-600">
            {t("statusModal.newStatus")}
          </label>
          <select
            id="statusNewSelect"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1 mb-4"
          >
            <option value="active">
              {t("statusModal.statusOptions.active")}
            </option>
            <option value="trial">
              {t("statusModal.statusOptions.trial")}
            </option>
            <option value="suspended">
              {t("statusModal.statusOptions.suspended")}
            </option>
            <option value="inactive">
              {t("statusModal.statusOptions.inactive")}
            </option>
          </select>
          <div className="flex gap-2 justify-end">
            <button
              data-close-modal="tenantStatusModal"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              {t("statusModal.cancel")}
            </button>
            <button
              id="tenantStatusSave"
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              {t("statusModal.update")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
