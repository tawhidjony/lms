"use client";

import { Button } from "@/components/ui";

export default function AdminCatelogPage() {
  return (
    <>
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
          Course Catalog
        </p>
        <div className="flex flex-wrap items-end justify-between gap-3 mt-2">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              公開コース一覧
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              制作者から公開されたコースをボックス形式で確認し、そのまま割当できます。
            </p>
          </div>
          <a
            href="assignments.html"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            割当管理へ
          </a>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <p id="catalogCount" className="text-sm text-slate-500">
          1–6 / 12件のコース
        </p>
        <p className="text-xs text-slate-400">1ページあたり6件表示</p>
      </div>
      <div
        id="companyCatalogGrid"
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                コンプライアンス
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mt-3">
                情報セキュリティ基礎
              </h3>
              <p className="text-sm text-slate-500 mt-1">動画 + クイズ</p>
            </div>
            <div className="h-11 w-11 shrink-0 rounded-xl text-white flex items-center justify-center text-sm font-semibold bg-slate-900">
              IS
            </div>
          </div>
          <dl className="space-y-2 text-sm">
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-500">学習時間</dt>
              <dd className="font-medium text-slate-800">45分</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-500">公開日</dt>
              <dd className="font-medium text-slate-800">2026-07-10</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-500">制作者</dt>
              <dd className="font-medium text-slate-800">Mika Kobayashi</dd>
            </div>
          </dl>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <span className="text-xs text-slate-400">コースID: C1</span>
            <a
              href="assignments.html?course=c1"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 text-xs"
            >
              割当
            </a>
          </div>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                安全
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mt-3">
                職場安全シナリオ
              </h3>
              <p className="text-sm text-slate-500 mt-1">分岐動画</p>
            </div>
            <div className="h-11 w-11 shrink-0 rounded-xl text-white flex items-center justify-center text-sm font-semibold bg-orange-500">
              WS
            </div>
          </div>
          <dl className="space-y-2 text-sm">
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-500">学習時間</dt>
              <dd className="font-medium text-slate-800">35分</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-500">公開日</dt>
              <dd className="font-medium text-slate-800">2026-07-18</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-500">制作者</dt>
              <dd className="font-medium text-slate-800">Mika Kobayashi</dd>
            </div>
          </dl>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <span className="text-xs text-slate-400">コースID: C2</span>
            <a
              href="assignments.html?course=c2"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 text-xs"
            >
              割当
            </a>
          </div>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                オンボーディング
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mt-3">
                新入社員オンボーディング
              </h3>
              <p className="text-sm text-slate-500 mt-1">動画コース</p>
            </div>
            <div className="h-11 w-11 shrink-0 rounded-xl text-white flex items-center justify-center text-sm font-semibold bg-emerald-600">
              ON
            </div>
          </div>
          <dl className="space-y-2 text-sm">
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-500">学習時間</dt>
              <dd className="font-medium text-slate-800">60分</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-500">公開日</dt>
              <dd className="font-medium text-slate-800">2026-06-28</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-500">制作者</dt>
              <dd className="font-medium text-slate-800">Mika Kobayashi</dd>
            </div>
          </dl>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <span className="text-xs text-slate-400">コースID: C3</span>
            <a
              href="assignments.html?course=c3"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 text-xs"
            >
              割当
            </a>
          </div>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                カスタマーサービス
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mt-3">
                カスタマーサービス卓越
              </h3>
              <p className="text-sm text-slate-500 mt-1">動画 + クイズ</p>
            </div>
            <div className="h-11 w-11 shrink-0 rounded-xl text-white flex items-center justify-center text-sm font-semibold bg-violet-600">
              CS
            </div>
          </div>
          <dl className="space-y-2 text-sm">
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-500">学習時間</dt>
              <dd className="font-medium text-slate-800">40分</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-500">公開日</dt>
              <dd className="font-medium text-slate-800">2026-07-12</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-500">制作者</dt>
              <dd className="font-medium text-slate-800">Mika Kobayashi</dd>
            </div>
          </dl>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <span className="text-xs text-slate-400">コースID: C4</span>
            <a
              href="assignments.html?course=c4"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 text-xs"
            >
              割当
            </a>
          </div>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                安全
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mt-3">
                緊急対応研修
              </h3>
              <p className="text-sm text-slate-500 mt-1">分岐動画</p>
            </div>
            <div className="h-11 w-11 shrink-0 rounded-xl text-white flex items-center justify-center text-sm font-semibold bg-orange-500">
              ER
            </div>
          </div>
          <dl className="space-y-2 text-sm">
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-500">学習時間</dt>
              <dd className="font-medium text-slate-800">30分</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-500">公開日</dt>
              <dd className="font-medium text-slate-800">2026-07-05</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-500">制作者</dt>
              <dd className="font-medium text-slate-800">Mika Kobayashi</dd>
            </div>
          </dl>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <span className="text-xs text-slate-400">コースID: C5</span>
            <a
              href="assignments.html?course=c5"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 text-xs"
            >
              割当
            </a>
          </div>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                コンプライアンス
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mt-3">
                ハラスメント防止
              </h3>
              <p className="text-sm text-slate-500 mt-1">動画コース</p>
            </div>
            <div className="h-11 w-11 shrink-0 rounded-xl text-white flex items-center justify-center text-sm font-semibold bg-slate-900">
              HP
            </div>
          </div>
          <dl className="space-y-2 text-sm">
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-500">学習時間</dt>
              <dd className="font-medium text-slate-800">25分</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-500">公開日</dt>
              <dd className="font-medium text-slate-800">2026-06-22</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-slate-500">制作者</dt>
              <dd className="font-medium text-slate-800">Mika Kobayashi</dd>
            </div>
          </dl>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <span className="text-xs text-slate-400">コースID: C6</span>
            <a
              href="assignments.html?course=c6"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 text-xs"
            >
              割当
            </a>
          </div>
        </article>
      </div>
      <div className="mt-6 flex items-center justify-between flex-wrap gap-3 px-4 py-3.5 border border-slate-200 rounded-md bg-white">
        <div className="text-sm text-slate-500">1–6 / 12件</div>
        <div className="flex items-center gap-3">
          <Button variant="outline" color="neutral" size="sm" disabled>
            前へ
          </Button>
          <Button variant="outline" color="neutral" size="sm">
            1
          </Button>
          <Button variant="outline" color="neutral" size="sm">
            2
          </Button>
          <Button variant="outline" color="neutral" size="sm">
            次へ
          </Button>
        </div>
      </div>
    </>
  );
}
