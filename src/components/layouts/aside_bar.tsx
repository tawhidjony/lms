import Link from "next/link";
import AsideBarItem from "./asidebar_item";
import { SidebarItemType } from "./types";

export default function AsideBar({
  menuItems,
}: {
  menuItems: ReadonlyArray<SidebarItemType>;
}) {
  return (
    <aside
      id="appSidebar"
      className="fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-white flex flex-col transform -translate-x-full lg:translate-x-0 transition-transform shadow-xl"
    >
      <div className="h-16 flex items-center gap-3 px-4 border-b border-slate-700/80">
        <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-sm shadow-sm">
          C
        </div>
        <div>
          <div className="font-semibold text-sm leading-tight tracking-tight">
            Copia LMS
          </div>
          <div className="text-[11px] text-slate-400">制作者</div>
        </div>
      </div>
      <AsideBarItem menuItems={menuItems} />
      <div className="p-3 border-t border-slate-700">
        <Link
          href="/"
          className="block px-3 py-2 rounded-md text-sm text-slate-400 hover:text-white hover:bg-slate-800"
        >
          ログアウト
        </Link>
      </div>
    </aside>
  );
}
