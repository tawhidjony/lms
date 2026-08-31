"use client";
export default function AdminDashboardPage() {
  return (
    <>
      <p className="text-sm text-slate-500 mb-4">
        Sakura Corporation · 株式会社サクラ
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            従業員総数
          </div>
          <div className="text-2xl font-bold text-slate-900">245</div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            有効受講者
          </div>
          <div className="text-2xl font-bold text-slate-900">218</div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            割当コース
          </div>
          <div className="text-2xl font-bold text-slate-900">18</div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">完了率</div>
          <div className="text-2xl font-bold text-slate-900">76%</div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-slate-500 mb-1">
            期限超過の研修
          </div>
          <div className="text-2xl font-bold text-red-600">14</div>
        </div>
      </div>
      <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm mb-6">
        <h2 className="text-sm font-semibold mb-3">研修フロー</h2>
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600">
          <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full font-medium">
            制作者が公開
          </span>
          <span>→</span>
          <span className="px-3 py-1.5 bg-slate-100 rounded-full">
            カタログ
          </span>
          <span>→</span>
          <span className="px-3 py-1.5 bg-slate-100 rounded-full">割当</span>
          <span>→</span>
          <span className="px-3 py-1.5 bg-slate-100 rounded-full">受講者</span>
          <span>→</span>
          <span className="px-3 py-1.5 bg-slate-100 rounded-full">
            レポート
          </span>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mb-6">
        <div className="lg:col-span-2 bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
            <div>
              <h2 className="text-sm font-semibold text-slate-800">
                部署別研修完了状況
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Group size: <span id="caGroupSize">7</span> learners · Privacy
                minimum: 5
              </p>
            </div>
            <select
              id="caDeptFilter"
              className="rounded-md border border-slate-300 px-3 py-2 text-sm max-w-[200px]"
            >
              <option value="all">All departments</option>
              <option value="Sales">Sales</option>
              <option value="Finance">Finance</option>
              <option value="Customer Support">Customer Support</option>
              <option value="Human Resources">Human Resources</option>
            </select>
          </div>
          <div
            id="caPrivacyBanner"
            className="hidden rep-privacy-banner rep-privacy-inline mb-3"
          >
            Results are hidden because the sample size is too small.
          </div>
          <div id="caChartWrap">
            <canvas
              id="caChart"
              height={475}
              width={1017}
              style={{
                display: "block",
                boxSizing: "border-box",
                height: 475,
                width: 1017,
              }}
            />
          </div>
        </div>
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-800 mb-3">部署</h2>
          <ul className="text-sm space-y-2">
            <li className="flex justify-between py-1.5 border-b border-slate-50">
              <span>人事</span>
              <span className="text-slate-400">—</span>
            </li>
            <li className="flex justify-between py-1.5 border-b border-slate-50">
              <span>営業</span>
              <span className="text-slate-400">—</span>
            </li>
            <li className="flex justify-between py-1.5 border-b border-slate-50">
              <span>エンジニアリング</span>
              <span className="text-slate-400">—</span>
            </li>
            <li className="flex justify-between py-1.5 border-b border-slate-50">
              <span>カスタマーサポート</span>
              <span className="text-slate-400">—</span>
            </li>
            <li className="flex justify-between py-1.5 border-b border-slate-50">
              <span>経理</span>
              <span className="text-slate-400">—</span>
            </li>
          </ul>
          <a
            href="departments.html"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 w-full mt-4 text-center"
          >
            部署を管理
          </a>
        </div>
      </div>
    </>
  );
}
