import { Link } from "@/i18n/navigation";

const notifications = [
  {
    id: "n1",
    title: "リマインダー: 情報セキュリティ基礎 — 7月31日期限",
    subtitle: "営業部の必須研修",
    date: "2026年7月20日",
    href: "/learner/my-courses",
  },
  {
    id: "n2",
    title: "職場安全 — 決定ポイントを保存しました",
    subtitle: "あなたのパス: 選択A → 動画A",
    date: "2026年7月20日",
    href: "/learner/courses/lc2/play",
  },
  {
    id: "n3",
    title: "新入社員オンボーディング完了",
    subtitle: "スコア: 100% — 修了証が利用可能",
    date: "2026年7月17日",
    href: "/learner/certificates/lc4",
  },
];

export default function Notifications() {
  return (
    <div className="space-y-3">
      {notifications.map((item) => (
        <div
          key={item.id}
          className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="text-sm font-medium text-slate-800">{item.title}</div>
          <div className="mt-1 text-xs text-slate-500">{item.subtitle}</div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="text-[11px] text-slate-400">{item.date}</div>
            <Link
              href={item.href}
              className="text-xs font-medium text-blue-600 hover:underline"
            >
              開く
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
