export default function LoginComponent() {
  return (
    <div className="w-full max-w-md bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center">
          C
        </div>
        <div>
          <div className="font-semibold text-slate-900">Copia LMS</div>
          <div className="text-xs text-slate-500">
            ログイン · 株式会社サクラ デモ
          </div>
        </div>
      </div>
      <label className="block text-xs font-medium text-slate-600 mb-1">
        メールアドレス
      </label>
      <input
        type="email"
        defaultValue="yuki.tanaka@sakura-corp.jp"
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm mb-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <label className="block text-xs font-medium text-slate-600 mb-1">
        パスワード
      </label>
      <input
        type="password"
        defaultValue="••••••••"
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm mb-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <label className="block text-xs font-medium text-slate-600 mb-1">
        ロール
      </label>
      <select
        id="roleSelect"
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm mb-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        <option value="learner" selected>
          受講者
        </option>
        <option value="creator">制作者</option>
        <option value="companyAdmin">企業管理者</option>
        <option value="operator">Copia運用者</option>
      </select>
      <button
        id="loginBtn"
        type="button"
        className="w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5"
      >
        ログイン
      </button>
    </div>
  );
}
