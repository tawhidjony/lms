"use client";

import { useTranslations } from "next-intl";

export default function OperatorPackages() {
  const t = useTranslations("operatorPackages");

  return (
    <>
      <div className="flex flex-wrap justify-between items-start gap-3 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">{t("title")}</h2>
          <p className="text-sm text-slate-500">{t("description")}</p>
        </div>
        <a
          href="package-edit.html?id=new"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          {t("addPackage")}
        </a>
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
          <span className="text-xs text-slate-400 ml-auto">
            {t("filterHint")}
          </span>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden copia-table-wrap">
        <div className="copia-table-toolbar flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-slate-100 bg-white">
          <input
            type="search"
            placeholder={t("searchPlaceholder")}
            className="copia-table-search w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:max-w-xs"
          />
          <span className="copia-table-meta text-xs text-slate-500 sm:ml-auto">
            {t("showingMeta", { from: 1, to: 4, total: 4 })}
          </span>
        </div>
        <div className="overflow-x-auto">
          <table
            id="packagesTable"
            className="min-w-full text-sm"
            data-copia-table
            data-page-size={8}
            data-copia-table-enhanced={1}
          >
            <thead>
              <tr>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  パッケージ
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  月額
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  年額
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  シート
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  テナント
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  ステータス
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  操作
                </th>
              </tr>
            </thead>
            <tbody id="packagesTableBody">
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-violet-200 bg-violet-50 text-violet-700">
                    Enterprise
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-medium">
                  ¥480,000
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  ¥5,184,000
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  500
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  4
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-green-200 bg-green-50 text-green-700">
                    {t("status.active")}
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <a
                    href="package-edit.html?id=pkg-enterprise"
                    className="copia-table-action is-primary"
                  >
                    {t("edit")}
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-blue-200 bg-blue-50 text-blue-700">
                    Professional
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-medium">
                  ¥220,000
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  ¥2,376,000
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  350
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  5
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-green-200 bg-green-50 text-green-700">
                    {t("status.active")}
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <a
                    href="package-edit.html?id=pkg-professional"
                    className="copia-table-action is-primary"
                  >
                    {t("edit")}
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-amber-200 bg-amber-50 text-amber-700">
                    Trial
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-medium">
                  {t("free")}
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  {t("free")}
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  50
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  3
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-green-200 bg-green-50 text-green-700">
                    {t("status.active")}
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <a
                    href="package-edit.html?id=pkg-trial"
                    className="copia-table-action is-primary"
                  >
                    {t("edit")}
                  </a>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-slate-200 bg-slate-50 text-slate-600">
                    {t("unnamed")}
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-medium">
                  {t("free")}
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  {t("free")}
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  100
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  0
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-green-200 bg-green-50 text-green-700">
                    {t("status.active")}
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <a
                    href="package-edit.html?id=pkg-1787823041225"
                    className="copia-table-action is-primary"
                  >
                    {t("edit")}
                  </a>
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
              {t("previous")}
            </button>
            <div className="flex flex-wrap items-center gap-1" />
            <button
              type="button"
              className="copia-table-page-btn inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 "
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
