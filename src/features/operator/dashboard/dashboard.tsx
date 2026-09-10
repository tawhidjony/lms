"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function OperatorDashboard() {
  const t = useTranslations("operatorDashboard");
  return (
    <>
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold text-slate-900">
            ダッシュボード
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            プラットフォーム全体の稼働状況
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link className="btn btn-primary" href="/operator/tenants/new">
            テナントを発行
          </Link>
        </div>
      </div>
      <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-6">
        <div className="card card-p">
          <div className="mb-1 text-xs font-medium text-slate-500">
            テナント総数
          </div>
          <div className="text-2xl font-bold text-slate-900">
            9<span className="ml-1 text-sm font-medium text-slate-400">社</span>
          </div>
        </div>
        <div className="card card-p">
          <div className="mb-1 text-xs font-medium text-slate-500">稼働中</div>
          <div className="text-2xl font-bold text-emerald-600">
            3<span className="ml-1 text-sm font-medium text-slate-400">社</span>
          </div>
        </div>
        <div className="card card-p">
          <div className="mb-1 text-xs font-medium text-slate-500">
            トライアル
          </div>
          <div className="text-2xl font-bold text-slate-900">
            6<span className="ml-1 text-sm font-medium text-slate-400">社</span>
          </div>
        </div>
        <div className="card card-p">
          <div className="mb-1 text-xs font-medium text-slate-500">
            利用ユーザー
          </div>
          <div className="text-2xl font-bold text-slate-900">
            44
            <span className="ml-1 text-sm font-medium text-slate-400">名</span>
          </div>
        </div>
        <div className="card card-p">
          <div className="mb-1 text-xs font-medium text-slate-500">
            公開コース
          </div>
          <div className="text-2xl font-bold text-slate-900">
            17
            <span className="ml-1 text-sm font-medium text-slate-400">件</span>
          </div>
        </div>
        <div className="card card-p">
          <div className="mb-1 text-xs font-medium text-slate-500">
            受講完了
          </div>
          <div className="text-2xl font-bold text-slate-900">
            44
            <span className="ml-1 text-sm font-medium text-slate-400">件</span>
          </div>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <section className="card lg:col-span-2">
          <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-100 px-5 py-3.5">
            <div>
              <h2 className="text-sm font-semibold text-slate-800">テナント</h2>
              <p className="mt-0.5 text-xs text-slate-500">
                最近発行されたテナント
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                className="btn btn-secondary btn-sm"
                href="/operator/tenants"
              >
                すべて表示
              </Link>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="th">企業名</th>
                  <th className="th">テナントID</th>
                  <th className="th">プラン</th>
                  <th className="th">ユーザー</th>
                  <th className="th">コース</th>
                  <th className="th">状態</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tr">
                  <td className="td">
                    <Link
                      className="font-medium text-slate-900 hover:underline"
                      href="/operator/tenants/cmtuzoko100903s01lo2qaso1"
                    >
                      Test Company
                    </Link>
                  </td>
                  <td className="td font-mono text-xs text-slate-500">
                    TES-009
                  </td>
                  <td className="td">スタンダード</td>
                  <td className="td">2</td>
                  <td className="td">0</td>
                  <td className="td">
                    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium bg-amber-50 text-amber-700 border-amber-200">
                      トライアル
                    </span>
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    <Link
                      className="font-medium text-slate-900 hover:underline"
                      href="/operator/tenants/cmttyykqt004r3s01500h8a4h"
                    >
                      Test
                    </Link>
                  </td>
                  <td className="td font-mono text-xs text-slate-500">
                    KAT-008
                  </td>
                  <td className="td">トライアル</td>
                  <td className="td">0</td>
                  <td className="td">0</td>
                  <td className="td">
                    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium bg-amber-50 text-amber-700 border-amber-200">
                      トライアル
                    </span>
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    <Link
                      className="font-medium text-slate-900 hover:underline"
                      href="/operator/tenants/cmttr168w03ag3v015bufadzo"
                    >
                      受入テスト検証株式会社
                    </Link>
                  </td>
                  <td className="td font-mono text-xs text-slate-500">
                    TEN-007
                  </td>
                  <td className="td">トライアル</td>
                  <td className="td">5</td>
                  <td className="td">3</td>
                  <td className="td">
                    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium bg-amber-50 text-amber-700 border-amber-200">
                      トライアル
                    </span>
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    <Link
                      className="font-medium text-slate-900 hover:underline"
                      href="/operator/tenants/cmttqnevt038z3v01h3qt9tyz"
                    >
                      ABC Private Ltd
                    </Link>
                  </td>
                  <td className="td font-mono text-xs text-slate-500">
                    ABC-006
                  </td>
                  <td className="td">スタンダード</td>
                  <td className="td">1</td>
                  <td className="td">0</td>
                  <td className="td">
                    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium bg-emerald-50 text-emerald-700 border-emerald-200">
                      有効
                    </span>
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    <Link
                      className="font-medium text-slate-900 hover:underline"
                      href="/operator/tenants/cmttng9h3033w3v01gqbptw6t"
                    >
                      Square Pvt Ltd
                    </Link>
                  </td>
                  <td className="td font-mono text-xs text-slate-500">
                    SQU-005
                  </td>
                  <td className="td">スタンダード</td>
                  <td className="td">2</td>
                  <td className="td">0</td>
                  <td className="td">
                    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium bg-amber-50 text-amber-700 border-amber-200">
                      トライアル
                    </span>
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    <Link
                      className="font-medium text-slate-900 hover:underline"
                      href="/operator/tenants/cmttlnghb02sn3v01gfe2n4p7"
                    >
                      simec
                    </Link>
                  </td>
                  <td className="td font-mono text-xs text-slate-500">
                    SIM-004
                  </td>
                  <td className="td">トライアル</td>
                  <td className="td">0</td>
                  <td className="td">0</td>
                  <td className="td">
                    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium bg-amber-50 text-amber-700 border-amber-200">
                      トライアル
                    </span>
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    <Link
                      className="font-medium text-slate-900 hover:underline"
                      href="/operator/tenants/cmtqyfx0a00ks3v01o2a0mi0i"
                    >
                      pitocms
                    </Link>
                  </td>
                  <td className="td font-mono text-xs text-slate-500">
                    ABC-004
                  </td>
                  <td className="td">トライアル</td>
                  <td className="td">1</td>
                  <td className="td">1</td>
                  <td className="td">
                    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium bg-amber-50 text-amber-700 border-amber-200">
                      トライアル
                    </span>
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    <Link
                      className="font-medium text-slate-900 hover:underline"
                      href="/operator/tenants/cmtqr6s1i005j2j01otmvohba"
                    >
                      株式会社清野サンプル
                    </Link>
                  </td>
                  <td className="td font-mono text-xs text-slate-500">
                    EXA-003
                  </td>
                  <td className="td">トライアル</td>
                  <td className="td">18</td>
                  <td className="td">8</td>
                  <td className="td">
                    <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium bg-emerald-50 text-emerald-700 border-emerald-200">
                      有効
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <div className="space-y-4">
          <section className="card ">
            <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-100 px-5 py-3.5">
              <div>
                <h2 className="text-sm font-semibold text-slate-800">
                  更新が近い契約
                </h2>
                <p className="mt-0.5 text-xs text-slate-500">
                  60日以内に更新日を迎える契約
                </p>
              </div>
            </div>
            <ul className="divide-y divide-slate-100">
              <li className="flex items-center justify-between px-5 py-3">
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-slate-800">
                    株式会社サンプル商事
                  </div>
                  <div className="text-[11px] text-slate-500">トライアル</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-600">2026/09/18</div>
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium bg-emerald-50 text-emerald-700 border-emerald-200">
                    有効
                  </span>
                </div>
              </li>
              <li className="flex items-center justify-between px-5 py-3">
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-slate-800">
                    株式会社清野サンプル
                  </div>
                  <div className="text-[11px] text-slate-500">トライアル</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-600">2026/10/07</div>
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium bg-emerald-50 text-emerald-700 border-emerald-200">
                    有効
                  </span>
                </div>
              </li>
              <li className="flex items-center justify-between px-5 py-3">
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-slate-800">
                    pitocms
                  </div>
                  <div className="text-[11px] text-slate-500">トライアル</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-600">2026/10/07</div>
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium bg-amber-50 text-amber-700 border-amber-200">
                    トライアル
                  </span>
                </div>
              </li>
              <li className="flex items-center justify-between px-5 py-3">
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-slate-800">
                    simec
                  </div>
                  <div className="text-[11px] text-slate-500">トライアル</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-600">2026/10/09</div>
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium bg-amber-50 text-amber-700 border-amber-200">
                    トライアル
                  </span>
                </div>
              </li>
              <li className="flex items-center justify-between px-5 py-3">
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-slate-800">
                    受入テスト検証株式会社
                  </div>
                  <div className="text-[11px] text-slate-500">トライアル</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-600">2026/10/09</div>
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium bg-amber-50 text-amber-700 border-amber-200">
                    トライアル
                  </span>
                </div>
              </li>
              <li className="flex items-center justify-between px-5 py-3">
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium text-slate-800">
                    Test
                  </div>
                  <div className="text-[11px] text-slate-500">トライアル</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-600">2026/10/09</div>
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium bg-amber-50 text-amber-700 border-amber-200">
                    トライアル
                  </span>
                </div>
              </li>
            </ul>
          </section>
          <section className="card ">
            <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-100 px-5 py-3.5">
              <div>
                <h2 className="text-sm font-semibold text-slate-800">プラン</h2>
              </div>
            </div>
            <div className="px-5 py-4 text-sm text-slate-600">
              <p className="mb-3">
                現在 <span className="font-semibold text-slate-900">4</span>{" "}
                件のプランが有効です。
              </p>
              <Link
                className="btn btn-secondary btn-sm"
                href="/operator/packages"
              >
                プランを管理
              </Link>
            </div>
          </section>
        </div>
      </div>

      {/* ========================================================== */}
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
