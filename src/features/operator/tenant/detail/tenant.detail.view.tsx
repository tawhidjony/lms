"use client";
import { Button } from "@/components/ui";
import { Link } from "@/i18n/navigation";

export default function TenantDetailView() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <Link
            href="/operator/tenants"
            className="text-sm text-blue-600 hover:underline"
          >
            ← テナント
          </Link>
          <h2 className="text-lg font-semibold mt-1">Sakura Corporation</h2>
          <p className="text-sm text-slate-500">
            テナントID: SKR-001 · 東京本社 · 株式会社サクラ
          </p>
        </div>
        <Button
          color="neutral"
          variant="outline"
          onClick={() => {
            alert("テナントを停止しました");
          }}
        >
          テナントを停止
        </Button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            ユーザー
          </div>
          <div className="text-2xl font-bold text-slate-900">245</div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            公開コース
          </div>
          <div className="text-2xl font-bold text-slate-900">18</div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            有効受講者
          </div>
          <div className="text-2xl font-bold text-slate-900">218</div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">プラン</div>
          <div className="text-2xl font-bold text-slate-900">Enterprise</div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <h3 className="text-sm font-semibold mb-3">契約詳細</h3>
          <dl className="text-sm space-y-2">
            <div className="flex justify-between">
              <dt className="text-slate-500">プラン</dt>
              <dd>Enterprise（500シート）</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">開始日</dt>
              <dd>2025-04-01</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">更新日</dt>
              <dd>2027-03-31</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">ストレージ上限</dt>
              <dd>500 GB</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">主担当者</dt>
              <dd>Yuki Tanaka (admin@companya.jp)</dd>
            </div>
          </dl>
          <div className="flex flex-wrap gap-2 mt-4">
            <a
              href="contracts.html"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              契約を見る
            </a>
            <a
              href="package-edit.html?id=pkg-enterprise"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              パッケージを見る
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <h3 className="text-sm font-semibold mb-3">最近のアクティビティ</h3>
          <ul className="text-sm space-y-2 text-slate-600">
            <li>
              7月18日 — Mika Kobayashi が<em>職場安全シナリオ</em>を公開
            </li>
            <li>
              7月15日 — Yuki Tanaka が営業部に情報セキュリティを割当（142名）
            </li>
            <li>7月10日 — CSVで28名の新規ユーザーをインポート</li>
            <li>7月08日 — ストレージ使用量が180 GBを超過</li>
          </ul>
        </div>
      </div>
    </>
  );
}
