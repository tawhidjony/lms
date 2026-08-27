import { Button } from "@/components/ui";
import Link from "next/link";

export default function OperatorTenant() {
  return (
    <>
      <div className="flex flex-wrap justify-between items-start gap-3 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">テナント管理</h2>
          <p className="text-sm text-slate-500">
            Copia LMSプラットフォーム上の企業を管理 ·{" "}
            <a href="packages.html" className="text-blue-600 hover:underline">
              サブスクリプションパッケージを見る
            </a>
          </p>
        </div>
        <button
          id="btnAddTenant"
          type="button"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          + テナントを追加
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            テナント総数
          </div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="tenantStatTotal"
          >
            12
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">有効</div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="tenantStatActive"
          >
            8
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            トライアル
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
            停止 / 無効
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
            フィルター:
          </label>
          <select
            id="tenantStatusFilter"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 max-w-[160px]"
          >
            <option value="all">すべてのステータス</option>
            <option value="active">有効</option>
            <option value="trial">トライアル</option>
            <option value="suspended">停止</option>
            <option value="inactive">無効</option>
          </select>
          <select
            id="tenantPlanFilter"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 max-w-[160px]"
          >
            <option value="all">すべてのプラン</option>
            <option value="Enterprise">エンタープライズ</option>
            <option value="Professional">プロフェッショナル</option>
            <option value="Trial">トライアル</option>
          </select>
          <span className="text-xs text-slate-400 ml-auto">
            下のテーブル検索で名前やIDを検索
          </span>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden copia-table-wrap">
        <div className="copia-table-toolbar flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-slate-100 bg-white">
          <input
            type="search"
            placeholder="テーブルを検索…"
            className="copia-table-search w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:max-w-xs"
          />
          <span className="copia-table-meta text-xs text-slate-500 sm:ml-auto">
            全12件中 1–8件表示
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
                  会社
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  テナントID
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  ユーザー
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  コース
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  プラン
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  有効期限
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  ステータス
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  操作
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
              前へ
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
              次へ
            </button>
          </div>
          <span className="text-slate-500">ページ 1 / 2</span>
        </div>
      </div>
      <div
        id="tenantFormModal"
        className="hidden fixed inset-0 z-50 items-center justify-center bg-black/40 p-4"
      >
        <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
          <h3
            id="tenantFormTitle"
            className="font-semibold text-slate-800 mb-4"
          >
            テナントを追加
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div className="sm:col-span-2">
              <label className="text-xs font-medium text-slate-600">
                会社名
              </label>
              <input
                id="tenantFormName"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
                placeholder="Sakura Corporation"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-medium text-slate-600">
                日本語名
              </label>
              <input
                id="tenantFormNameJa"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
                placeholder="株式会社サクラ"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">
                テナントID
              </label>
              <input
                id="tenantFormTenantId"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1 font-mono"
                placeholder="SKR-001"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">
                プラン
              </label>
              <select
                id="tenantFormPlan"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
              >
                <option value="Enterprise">エンタープライズ</option>
                <option value="Professional">プロフェッショナル</option>
                <option value="Trial">トライアル</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">
                更新日
              </label>
              <input
                id="tenantFormRenewal"
                type="date"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">
                ステータス
              </label>
              <select
                id="tenantFormStatus"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
              >
                <option value="active">有効</option>
                <option value="trial">トライアル</option>
                <option value="suspended">停止</option>
                <option value="inactive">無効</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">
                ユーザー
              </label>
              <input
                id="tenantFormUsers"
                type="number"
                min={0}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
                defaultValue={0}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">
                コース
              </label>
              <input
                id="tenantFormCourses"
                type="number"
                min={0}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
                defaultValue={0}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">
                主担当者
              </label>
              <input
                id="tenantFormContact"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">
                連絡先メール
              </label>
              <input
                id="tenantFormEmail"
                type="email"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-medium text-slate-600">
                所在地
              </label>
              <input
                id="tenantFormLocation"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
                placeholder="東京"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-end mt-6">
            <button
              data-close-modal="tenantFormModal"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              キャンセル
            </button>
            <button
              id="tenantFormSave"
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              テナントを保存
            </button>
          </div>
        </div>
      </div>
      <div
        id="tenantStatusModal"
        className="hidden fixed inset-0 z-50 items-center justify-center bg-black/40 p-4"
      >
        <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6">
          <h3 className="font-semibold text-slate-800 mb-2">
            テナントステータスの変更
          </h3>
          <p className="text-sm text-slate-600 mb-1">
            <span
              id="statusTenantName"
              className="font-medium text-slate-800"
            />
          </p>
          <p className="text-xs text-slate-500 mb-4">
            現在: <span id="statusCurrentBadge" />
          </p>
          <label className="text-xs font-medium text-slate-600">
            新しいステータス
          </label>
          <select
            id="statusNewSelect"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1 mb-4"
          >
            <option value="active">有効 — フルアクセス</option>
            <option value="trial">トライアル — 期間限定</option>
            <option value="suspended">停止 — アクセス制限</option>
            <option value="inactive">無効 — 契約終了</option>
          </select>
          <div className="flex gap-2 justify-end">
            <button
              data-close-modal="tenantStatusModal"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              キャンセル
            </button>
            <button
              id="tenantStatusSave"
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              ステータス更新
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
