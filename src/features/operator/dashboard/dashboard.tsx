"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function OperatorDashboard() {
  const t = useTranslations("operatorDashboard");
  return (
    <>
      <p className="text-sm text-slate-500 mb-6">{t("title")}</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("stats.totalTenants")}
          </div>
          <div className="text-2xl font-bold text-slate-900">12</div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("stats.availableTenants")}
          </div>
          <div className="text-2xl font-bold text-slate-900">10</div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("stats.trial")}
          </div>
          <div className="text-2xl font-bold text-slate-900">2</div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("stats.validContract")}
          </div>
          <div className="text-2xl font-bold text-slate-900">9</div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-2 bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-slate-800">
              {t("recentTenants.title")}
            </h2>
            <a
              href="tenants.html"
              className="text-xs text-blue-600 hover:underline"
            >
              {t("recentTenants.showAll")}
            </a>
          </div>
          <div className="overflow-hidden copia-table-wrap">
            <div className="copia-table-toolbar flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-slate-100 bg-white">
              <input
                type="search"
                placeholder={t("recentTenants.searchPlaceholder")}
                className="copia-table-search w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:max-w-xs"
              />
              <span className="copia-table-meta text-xs text-slate-500 sm:ml-auto">
                {t("recentTenants.showingMeta", { from: 1, to: 5, total: 5 })}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table
                className="min-w-full text-sm"
                data-copia-table
                data-page-size={5}
                id="copiaTable1"
                data-copia-table-enhanced={1}
              >
                <thead>
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                      {t("recentTenants.columns.tenant")}
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                      {t("recentTenants.columns.plan")}
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                      {t("recentTenants.columns.expiryDate")}
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                      {t("recentTenants.columns.status")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 border-b border-slate-100">
                      Sakura Corporation
                    </td>
                    <td className="px-3 py-2 border-b border-slate-100">
                      Enterprise
                    </td>
                    <td className="px-3 py-2 border-b border-slate-100">
                      2027-03-31
                    </td>
                    <td className="px-3 py-2 border-b border-slate-100">
                      <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                        {t("recentTenants.status.valid")}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-b border-slate-100">
                      Mirai Technologies
                    </td>
                    <td className="px-3 py-2 border-b border-slate-100">
                      Professional
                    </td>
                    <td className="px-3 py-2 border-b border-slate-100">
                      2026-11-15
                    </td>
                    <td className="px-3 py-2 border-b border-slate-100">
                      <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                        {t("recentTenants.status.valid")}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-b border-slate-100">
                      Hikari Logistics
                    </td>
                    <td className="px-3 py-2 border-b border-slate-100">
                      Enterprise
                    </td>
                    <td className="px-3 py-2 border-b border-slate-100">
                      2027-01-20
                    </td>
                    <td className="px-3 py-2 border-b border-slate-100">
                      <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                        {t("recentTenants.status.valid")}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-b border-slate-100">
                      Aozora Healthcare
                    </td>
                    <td className="px-3 py-2 border-b border-slate-100">
                      Professional
                    </td>
                    <td className="px-3 py-2 border-b border-slate-100">
                      2026-09-30
                    </td>
                    <td className="px-3 py-2 border-b border-slate-100">
                      <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                        {t("recentTenants.status.valid")}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border-b border-slate-100">
                      Fuji Retail Group
                    </td>
                    <td className="px-3 py-2 border-b border-slate-100">
                      Trial
                    </td>
                    <td className="px-3 py-2 border-b border-slate-100">
                      2026-08-31
                    </td>
                    <td className="px-3 py-2 border-b border-slate-100">
                      <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">
                        {t("recentTenants.status.trial")}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="copia-table-pagination flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-t border-slate-100 bg-white text-xs text-slate-600">
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  className="copia-table-page-btn inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 "
                  disabled
                >
                  {t("recentTenants.previous")}
                </button>
                <div className="flex flex-wrap items-center gap-1" />
                <button
                  type="button"
                  className="copia-table-page-btn inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 "
                  disabled
                >
                  {t("recentTenants.next")}
                </button>
              </div>
              <span className="text-slate-500">
                {t("recentTenants.pageOf", { current: 1, total: 1 })}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-800 mb-4">
            {t("quickAction.title")}
          </h2>
          <div className="space-y-2">
            <Link
              href="/operator/tenants"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 w-full text-center"
            >
              {t("quickAction.tenantManagement")}
            </Link>
            <Link
              href="/operator/packages"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 w-full text-center"
            >
              {t("quickAction.packageManagement")}
            </Link>
            <Link
              href="/operator/contracts"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 w-full text-center"
            >
              {t("quickAction.contractManagement")}
            </Link>
          </div>
          <p className="text-xs text-slate-500 mt-4 pt-4 border-t border-slate-100">
            {t("quickAction.description")}
          </p>
        </div>
      </div>
    </>
  );
}
