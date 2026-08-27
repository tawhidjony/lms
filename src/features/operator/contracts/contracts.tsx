"use client";

export default function OperatorContracts() {
  return (
    <>
      <div className="flex flex-wrap justify-between items-start gap-3 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">契約管理</h2>
          <p className="text-sm text-slate-500">
            テナント全体のサブスクリプション、シート割当、請求
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            data-demo-save="CSVを出力しました"
          >
            CSV出力
          </button>
          <button
            id="btnAddContract"
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            + 契約を追加
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            有効契約
          </div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="contractStatActive"
          >
            8
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            月次売上
          </div>
          <div
            className="text-2xl font-bold text-slate-900"
            id="contractStatMrr"
          >
            ¥2.8M
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            シート超過
          </div>
          <div
            className="text-2xl font-bold text-red-600"
            id="contractStatOverage"
          >
            3
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm mb-4">
        <div className="flex flex-wrap gap-3 items-center">
          <label className="text-xs font-medium text-slate-600 shrink-0">
            フィルター:
          </label>
          <select
            id="contractStatusFilter"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 max-w-[160px]"
          >
            <option value="all">すべてのステータス</option>
            <option value="active">有効</option>
            <option value="trial">トライアル</option>
            <option value="suspended">停止</option>
            <option value="expired">期限切れ</option>
          </select>
          <select
            id="contractPlanFilter"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 max-w-[160px]"
          >
            <option value="all">すべてのプラン</option>
            <option value="Enterprise">エンタープライズ</option>
            <option value="Professional">プロフェッショナル</option>
            <option value="Trial">トライアル</option>
          </select>
          <span className="text-xs text-slate-400 ml-auto">
            テーブル検索でテナント名を検索
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
            id="contractsTable"
            className="min-w-full text-sm"
            data-copia-table
            data-page-size={8}
            data-copia-table-enhanced={1}
          >
            <thead>
              <tr>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  テナント
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  プラン
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  シート
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  使用
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  開始
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  更新
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  月額
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  ステータス
                </th>
                <th className="px-3 py-2 text-left text-xs font-semibold text-slate-500 bg-slate-50 border-b border-slate-200">
                  操作
                </th>
              </tr>
            </thead>
            <tbody id="contractsTableBody">
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <a
                    href="tenant-detail.html?id=sakura"
                    className="font-medium text-sm text-slate-800 hover:text-blue-600"
                  >
                    Sakura Corporation
                  </a>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-violet-200 bg-violet-50 text-violet-700">
                    Enterprise
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  500
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  245
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2025-04-01
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2027-03-31
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-medium">
                  ¥480,000
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
                      data-contract-edit="ctr1"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-contract-status="ctr1"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=sakura"
                      className="copia-table-action"
                    >
                      テナント
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <a
                    href="tenant-detail.html?id=mirai"
                    className="font-medium text-sm text-slate-800 hover:text-blue-600"
                  >
                    Mirai Technologies
                  </a>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-blue-200 bg-blue-50 text-blue-700">
                    Professional
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  350
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  312
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2025-09-15
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2026-11-15
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-medium">
                  ¥220,000
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
                      data-contract-edit="ctr2"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-contract-status="ctr2"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=mirai"
                      className="copia-table-action"
                    >
                      テナント
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <a
                    href="tenant-detail.html?id=hikari"
                    className="font-medium text-sm text-slate-800 hover:text-blue-600"
                  >
                    Hikari Logistics
                  </a>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-violet-200 bg-violet-50 text-violet-700">
                    Enterprise
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  500
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  428
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2025-02-01
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2027-01-20
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-medium">
                  ¥480,000
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
                      data-contract-edit="ctr3"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-contract-status="ctr3"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=hikari"
                      className="copia-table-action"
                    >
                      テナント
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <a
                    href="tenant-detail.html?id=aozora"
                    className="font-medium text-sm text-slate-800 hover:text-blue-600"
                  >
                    Aozora Healthcare
                  </a>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-blue-200 bg-blue-50 text-blue-700">
                    Professional
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  250
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  186
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2025-10-01
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2026-09-30
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-medium">
                  ¥180,000
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
                      data-contract-edit="ctr4"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-contract-status="ctr4"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=aozora"
                      className="copia-table-action"
                    >
                      テナント
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <a
                    href="tenant-detail.html?id=fuji"
                    className="font-medium text-sm text-slate-800 hover:text-blue-600"
                  >
                    Fuji Retail Group
                  </a>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-amber-200 bg-amber-50 text-amber-700">
                    Trial
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  50
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-red-600 font-medium">
                  52
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2026-06-01
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2026-08-31
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-medium">
                  —
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
                      data-contract-edit="ctr5"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-contract-status="ctr5"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=fuji"
                      className="copia-table-action"
                    >
                      テナント
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <a
                    href="tenant-detail.html?id=kizuna"
                    className="font-medium text-sm text-slate-800 hover:text-blue-600"
                  >
                    Kizuna Manufacturing
                  </a>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-violet-200 bg-violet-50 text-violet-700">
                    Enterprise
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  500
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-red-600 font-medium">
                  520
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2025-06-01
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2027-06-30
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-medium">
                  ¥480,000
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
                      data-contract-edit="ctr6"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-contract-status="ctr6"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=kizuna"
                      className="copia-table-action"
                    >
                      テナント
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <a
                    href="tenant-detail.html?id=sora"
                    className="font-medium text-sm text-slate-800 hover:text-blue-600"
                  >
                    Sora Financial Services
                  </a>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-blue-200 bg-blue-50 text-blue-700">
                    Professional
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  150
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  98
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2025-12-01
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2026-12-15
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-medium">
                  ¥220,000
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
                      data-contract-edit="ctr7"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-contract-status="ctr7"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=sora"
                      className="copia-table-action"
                    >
                      テナント
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-3 border-b border-slate-100">
                  <a
                    href="tenant-detail.html?id=tsubaki"
                    className="font-medium text-sm text-slate-800 hover:text-blue-600"
                  >
                    Tsubaki Education
                  </a>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-amber-200 bg-amber-50 text-amber-700">
                    Trial
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  50
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-red-600 font-medium">
                  64
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2026-05-15
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2026-09-01
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-medium">
                  —
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
                      data-contract-edit="ctr8"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-contract-status="ctr8"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=tsubaki"
                      className="copia-table-action"
                    >
                      テナント
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition hidden">
                <td className="px-4 py-3 border-b border-slate-100">
                  <a
                    href="tenant-detail.html?id=nexus"
                    className="font-medium text-sm text-slate-800 hover:text-blue-600"
                  >
                    Nexus Consulting
                  </a>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-blue-200 bg-blue-50 text-blue-700">
                    Professional
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  100
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  74
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2025-08-01
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2026-10-20
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-medium">
                  ¥220,000
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
                      data-contract-edit="ctr9"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-contract-status="ctr9"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=nexus"
                      className="copia-table-action"
                    >
                      テナント
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition hidden">
                <td className="px-4 py-3 border-b border-slate-100">
                  <a
                    href="tenant-detail.html?id=wave"
                    className="font-medium text-sm text-slate-800 hover:text-blue-600"
                  >
                    Wave Media Group
                  </a>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-blue-200 bg-blue-50 text-blue-700">
                    Professional
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  200
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  135
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2025-03-01
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2027-02-28
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-medium">
                  ¥220,000
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
                      data-contract-edit="ctr10"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-contract-status="ctr10"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=wave"
                      className="copia-table-action"
                    >
                      テナント
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition hidden">
                <td className="px-4 py-3 border-b border-slate-100">
                  <a
                    href="tenant-detail.html?id=green"
                    className="font-medium text-sm text-slate-800 hover:text-blue-600"
                  >
                    Green Energy Co.
                  </a>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-violet-200 bg-violet-50 text-violet-700">
                    Enterprise
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  300
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  210
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2025-05-01
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2027-04-15
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-medium">
                  ¥480,000
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
                      data-contract-edit="ctr11"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-contract-status="ctr11"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=green"
                      className="copia-table-action"
                    >
                      テナント
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition hidden">
                <td className="px-4 py-3 border-b border-slate-100">
                  <a
                    href="tenant-detail.html?id=pixel"
                    className="font-medium text-sm text-slate-800 hover:text-blue-600"
                  >
                    Pixel Games Studio
                  </a>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-amber-200 bg-amber-50 text-amber-700">
                    Trial
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  50
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm">
                  38
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2026-04-01
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm text-slate-600">
                  2026-07-31
                </td>
                <td className="px-4 py-3 border-b border-slate-100 text-sm font-medium">
                  —
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium border-slate-200 bg-slate-100 text-slate-600">
                    期限切れ
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-slate-100">
                  <div className="copia-table-actions">
                    <button
                      type="button"
                      data-contract-edit="ctr12"
                      className="copia-table-action is-primary"
                    >
                      編集
                    </button>
                    <button
                      type="button"
                      data-contract-status="ctr12"
                      className="copia-table-action"
                    >
                      ステータス
                    </button>
                    <a
                      href="tenant-detail.html?id=pixel"
                      className="copia-table-action"
                    >
                      テナント
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
        id="contractFormModal"
        className="hidden fixed inset-0 z-50 items-center justify-center bg-black/40 p-4"
      >
        <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
          <h3
            id="contractFormTitle"
            className="font-semibold text-slate-800 mb-4"
          >
            契約を追加
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div className="sm:col-span-2">
              <label className="text-xs font-medium text-slate-600">
                テナント
              </label>
              <select
                id="contractFormTenant"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">
                プラン
              </label>
              <select
                id="contractFormPlan"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
              >
                <option value="Enterprise">エンタープライズ</option>
                <option value="Professional">プロフェッショナル</option>
                <option value="Trial">トライアル</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">
                ステータス
              </label>
              <select
                id="contractFormStatus"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
              >
                <option value="active">有効</option>
                <option value="trial">トライアル</option>
                <option value="suspended">停止</option>
                <option value="expired">期限切れ</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">
                シート割当
              </label>
              <input
                id="contractFormSeats"
                type="number"
                min={1}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">
                使用シート
              </label>
              <input
                id="contractFormUsed"
                type="number"
                min={0}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">
                開始日
              </label>
              <input
                id="contractFormStart"
                type="date"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600">
                更新日
              </label>
              <input
                id="contractFormRenewal"
                type="date"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-medium text-slate-600">
                月額料金（¥）
              </label>
              <input
                id="contractFormMonthly"
                type="number"
                min={0}
                step={1000}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-medium text-slate-600">備考</label>
              <input
                id="contractFormNote"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1"
                placeholder="請求に関する任意のメモ"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-end mt-6">
            <button
              data-close-modal="contractFormModal"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              キャンセル
            </button>
            <button
              id="contractFormSave"
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              契約を保存
            </button>
          </div>
        </div>
      </div>
      <div
        id="contractStatusModal"
        className="hidden fixed inset-0 z-50 items-center justify-center bg-black/40 p-4"
      >
        <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6">
          <h3 className="font-semibold text-slate-800 mb-2">
            契約ステータスの変更
          </h3>
          <p className="text-sm text-slate-600 mb-1">
            <span
              id="contractStatusName"
              className="font-medium text-slate-800"
            />
          </p>
          <p className="text-xs text-slate-500 mb-4">
            現在: <span id="contractStatusCurrent" />
          </p>
          <label className="text-xs font-medium text-slate-600">
            新しいステータス
          </label>
          <select
            id="contractStatusSelect"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 mt-1 mb-4"
          >
            <option value="active">有効 — 請求中</option>
            <option value="trial">トライアル — 月額なし</option>
            <option value="suspended">停止 — 支払い問題</option>
            <option value="expired">期限切れ — 契約終了</option>
          </select>
          <div className="flex gap-2 justify-end">
            <button
              data-close-modal="contractStatusModal"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              キャンセル
            </button>
            <button
              id="contractStatusSave"
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
