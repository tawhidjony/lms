"use client";

import { Button, Modal, type TModalRef } from "@/components/ui";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRef } from "react";
import TenantFormComponent from "./form/tenant.form.component";

export default function OperatorTenant() {
  const t = useTranslations("operatorTenant");
  const modalRef = useRef<TModalRef | null>(null);

  return (
    <>
      <Modal modalRef={modalRef} title={t("form.addTitle")}>
        <TenantFormComponent modalRef={modalRef} />
      </Modal>
      <div className="flex flex-wrap justify-between items-start gap-3 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">{t("title")}</h2>
          <p className="text-sm text-slate-500">
            {t("description")}{" "}
            <a href="packages.html" className="text-blue-600 hover:underline">
              {t("viewPackages")}
            </a>
          </p>
        </div>
        <Button id="btnAddTenant" onClick={() => modalRef.current?.modalOpen()}>
          {t("addTenant")}
        </Button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("stats.total")}
          </div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="tenantStatTotal"
          >
            12
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("stats.active")}
          </div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="tenantStatActive"
          >
            8
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("stats.trial")}
          </div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="tenantStatTrial"
          >
            2
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            {t("stats.suspended")}
          </div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="tenantStatSuspended"
          >
            2
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm mb-4">
        <div className="flex flex-wrap gap-3 items-center">
          <label className="text-xs font-medium text-slate-600 shrink-0">
            {t("filter")}
          </label>
          <select
            id="tenantStatusFilter"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 max-w-[160px]"
          >
            <option value="all">{t("statusFilter.all")}</option>
            <option value="active">{t("statusFilter.active")}</option>
            <option value="trial">{t("statusFilter.trial")}</option>
            <option value="suspended">{t("statusFilter.suspended")}</option>
            <option value="inactive">{t("statusFilter.inactive")}</option>
          </select>
          <select
            id="tenantPlanFilter"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 max-w-[160px]"
          >
            <option value="all">{t("planFilter.all")}</option>
            <option value="Enterprise">{t("planFilter.enterprise")}</option>
            <option value="Professional">{t("planFilter.professional")}</option>
            <option value="Trial">{t("planFilter.trial")}</option>
          </select>
          <span className="text-xs text-slate-400 ml-auto">
            {t("searchHint")}
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
            {t("showingMeta", { from: 1, to: 8, total: 12 })}
          </span>
        </div>
        <div className="overflow-x-auto">
          <table
            id="tenantsTable"
            className="min-w-full text-sm"
            data-copia-table
            data-page-size={8}
            data-copia-table-enhanced={1}
          >
            <thead>
              <tr>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  {t("columns.company")}
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  {t("columns.tenantId")}
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  {t("columns.users")}
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  {t("columns.courses")}
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  {t("columns.plan")}
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  {t("columns.expiry")}
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  {t("columns.status")}
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  {t("columns.actions")}
                </th>
              </tr>
            </thead>
            <tbody id="tenantsTableBody">
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      SC
                    </span>
                    <div>
                      <a
                        href="tenant-detail.html?id=sakura"
                        className="font-medium text-slate-800 hover:text-blue-600 text-sm"
                      >
                        Sakura Corporation
                      </a>
                      <div className="text-[11px] text-slate-400">
                        株式会社サクラ
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-mono text-slate-600">
                  SKR-001
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  245
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  18
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-violet-200 bg-violet-50 text-violet-700">
                    Enterprise
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2027-03-31
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-green-200 bg-green-50 text-green-700">
                    有効
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs px-1 py-2"
                    >
                      編集
                    </Button>
                    <Button type="button" variant="outline" size="sm">
                      ステータス
                    </Button>
                    <Link href="/operator/tenant/detail">詳細</Link>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      MT
                    </span>
                    <div>
                      <a
                        href="tenant-detail.html?id=mirai"
                        className="font-medium text-slate-800 hover:text-blue-600 text-sm"
                      >
                        Mirai Technologies
                      </a>
                      <div className="text-[11px] text-slate-400">
                        未来テクノロジー株式会社
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-mono text-slate-600">
                  MIR-002
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  312
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  14
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-blue-200 bg-blue-50 text-blue-700">
                    Professional
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2026-11-15
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-green-200 bg-green-50 text-green-700">
                    有効
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="copia-table-actions">
                    <button
                      type="button"
                      data-tenant-edit="mirai"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-tenant-status="mirai"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=mirai"
                      className="copia-table-action"
                    >
                      詳細
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      HL
                    </span>
                    <div>
                      <a
                        href="tenant-detail.html?id=hikari"
                        className="font-medium text-slate-800 hover:text-blue-600 text-sm"
                      >
                        Hikari Logistics
                      </a>
                      <div className="text-[11px] text-slate-400">
                        光ロジスティクス株式会社
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-mono text-slate-600">
                  HIK-003
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  428
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  22
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-violet-200 bg-violet-50 text-violet-700">
                    Enterprise
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2027-01-20
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-green-200 bg-green-50 text-green-700">
                    有効
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="copia-table-actions">
                    <button
                      type="button"
                      data-tenant-edit="hikari"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-tenant-status="hikari"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=hikari"
                      className="copia-table-action"
                    >
                      詳細
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      AH
                    </span>
                    <div>
                      <a
                        href="tenant-detail.html?id=aozora"
                        className="font-medium text-slate-800 hover:text-blue-600 text-sm"
                      >
                        Aozora Healthcare
                      </a>
                      <div className="text-[11px] text-slate-400">
                        青空ヘルスケア株式会社
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-mono text-slate-600">
                  AOZ-004
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  186
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  11
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-blue-200 bg-blue-50 text-blue-700">
                    Professional
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2026-09-30
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-green-200 bg-green-50 text-green-700">
                    有効
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="copia-table-actions">
                    <button
                      type="button"
                      data-tenant-edit="aozora"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-tenant-status="aozora"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=aozora"
                      className="copia-table-action"
                    >
                      詳細
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      FR
                    </span>
                    <div>
                      <a
                        href="tenant-detail.html?id=fuji"
                        className="font-medium text-slate-800 hover:text-blue-600 text-sm"
                      >
                        Fuji Retail Group
                      </a>
                      <div className="text-[11px] text-slate-400">
                        富士リテールグループ
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-mono text-slate-600">
                  FUJ-005
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  52
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  4
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-amber-200 bg-amber-50 text-amber-700">
                    Trial
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2026-08-31
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-amber-200 bg-amber-50 text-amber-700">
                    トライアル
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="copia-table-actions">
                    <button
                      type="button"
                      data-tenant-edit="fuji"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-tenant-status="fuji"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=fuji"
                      className="copia-table-action"
                    >
                      詳細
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      KM
                    </span>
                    <div>
                      <a
                        href="tenant-detail.html?id=kizuna"
                        className="font-medium text-slate-800 hover:text-blue-600 text-sm"
                      >
                        Kizuna Manufacturing
                      </a>
                      <div className="text-[11px] text-slate-400">
                        絆製造株式会社
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-mono text-slate-600">
                  KIZ-006
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  520
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  26
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-violet-200 bg-violet-50 text-violet-700">
                    Enterprise
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2027-06-30
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-green-200 bg-green-50 text-green-700">
                    有効
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="copia-table-actions">
                    <button
                      type="button"
                      data-tenant-edit="kizuna"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-tenant-status="kizuna"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=kizuna"
                      className="copia-table-action"
                    >
                      詳細
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      SF
                    </span>
                    <div>
                      <a
                        href="tenant-detail.html?id=sora"
                        className="font-medium text-slate-800 hover:text-blue-600 text-sm"
                      >
                        Sora Financial Services
                      </a>
                      <div className="text-[11px] text-slate-400">
                        空金融サービス
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-mono text-slate-600">
                  SOR-007
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  98
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  8
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-blue-200 bg-blue-50 text-blue-700">
                    Professional
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2026-12-15
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-green-200 bg-green-50 text-green-700">
                    有効
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="copia-table-actions">
                    <button
                      type="button"
                      data-tenant-edit="sora"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-tenant-status="sora"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=sora"
                      className="copia-table-action"
                    >
                      詳細
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      TE
                    </span>
                    <div>
                      <a
                        href="tenant-detail.html?id=tsubaki"
                        className="font-medium text-slate-800 hover:text-blue-600 text-sm"
                      >
                        Tsubaki Education
                      </a>
                      <div className="text-[11px] text-slate-400">
                        椿エデュケーション
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-mono text-slate-600">
                  TSU-008
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  64
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  6
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-amber-200 bg-amber-50 text-amber-700">
                    Trial
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2026-09-01
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-amber-200 bg-amber-50 text-amber-700">
                    トライアル
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="copia-table-actions">
                    <button
                      type="button"
                      data-tenant-edit="tsubaki"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-tenant-status="tsubaki"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=tsubaki"
                      className="copia-table-action"
                    >
                      詳細
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition hidden">
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      NC
                    </span>
                    <div>
                      <a
                        href="tenant-detail.html?id=nexus"
                        className="font-medium text-slate-800 hover:text-blue-600 text-sm"
                      >
                        Nexus Consulting
                      </a>
                      <div className="text-[11px] text-slate-400">
                        ネクサスコンサルティング
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-mono text-slate-600">
                  NEX-009
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  74
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  9
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-blue-200 bg-blue-50 text-blue-700">
                    Professional
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2026-10-20
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-red-200 bg-red-50 text-red-700">
                    停止中
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="copia-table-actions">
                    <button
                      type="button"
                      data-tenant-edit="nexus"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-tenant-status="nexus"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=nexus"
                      className="copia-table-action"
                    >
                      詳細
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition hidden">
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      WM
                    </span>
                    <div>
                      <a
                        href="tenant-detail.html?id=wave"
                        className="font-medium text-slate-800 hover:text-blue-600 text-sm"
                      >
                        Wave Media Group
                      </a>
                      <div className="text-[11px] text-slate-400">
                        ウェーブメディア
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-mono text-slate-600">
                  WAV-010
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  135
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  12
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-blue-200 bg-blue-50 text-blue-700">
                    Professional
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2027-02-28
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-green-200 bg-green-50 text-green-700">
                    有効
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="copia-table-actions">
                    <button
                      type="button"
                      data-tenant-edit="wave"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-tenant-status="wave"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=wave"
                      className="copia-table-action"
                    >
                      詳細
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition hidden">
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      GE
                    </span>
                    <div>
                      <a
                        href="tenant-detail.html?id=green"
                        className="font-medium text-slate-800 hover:text-blue-600 text-sm"
                      >
                        Green Energy Co.
                      </a>
                      <div className="text-[11px] text-slate-400">
                        グリーンエナジー株式会社
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-mono text-slate-600">
                  GRN-011
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  210
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  15
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-violet-200 bg-violet-50 text-violet-700">
                    Enterprise
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2027-04-15
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-green-200 bg-green-50 text-green-700">
                    有効
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="copia-table-actions">
                    <button
                      type="button"
                      data-tenant-edit="green"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-tenant-status="green"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=green"
                      className="copia-table-action"
                    >
                      詳細
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition hidden">
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      PG
                    </span>
                    <div>
                      <a
                        href="tenant-detail.html?id=pixel"
                        className="font-medium text-slate-800 hover:text-blue-600 text-sm"
                      >
                        Pixel Games Studio
                      </a>
                      <div className="text-[11px] text-slate-400">
                        ピクセルゲームズ
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-mono text-slate-600">
                  PIX-012
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  38
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  3
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-amber-200 bg-amber-50 text-amber-700">
                    Trial
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2026-07-31
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-slate-200 bg-slate-100 text-slate-600">
                    無効
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="copia-table-actions">
                    <button
                      type="button"
                      data-tenant-edit="pixel"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-tenant-status="pixel"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=pixel"
                      className="copia-table-action"
                    >
                      詳細
                    </a>
                  </div>
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
