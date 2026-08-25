"use client";

import { useLang } from "@/lang";
import { Switch } from "../ui";
import Breadcrumb from "../ui/breadcrumb/breadcrumb";
import { SidebarItemType } from "./types";

type HeaderProps = {
  breadcrumb: ReadonlyArray<SidebarItemType>;
};

export default function Header({ breadcrumb }: HeaderProps) {
  const { locale, setLocale } = useLang();

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6 sticky top-0 z-20 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          id="sidebarToggle"
          type="button"
          className="lg:hidden p-2 rounded-md border border-slate-200 text-slate-600"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Breadcrumb breadcrumb={breadcrumb} />
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
          <span
            className={locale === "ja" ? "text-slate-900" : "text-slate-400"}
          >
            JA
          </span>
          <Switch
            checked={locale === "en"}
            onCheckedChange={(checked) => setLocale(checked ? "en" : "ja")}
            aria-label="Toggle language"
          />
          <span
            className={locale === "en" ? "text-slate-900" : "text-slate-400"}
          >
            EN
          </span>
        </div>
        <span className="hidden md:inline text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-md px-2.5 py-1">
          Sakura Corporation
        </span>
        <button
          type="button"
          className="relative p-2 rounded-md border border-slate-200 text-slate-600"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.75"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <div className="relative">
          <button
            id="profileBtn"
            type="button"
            className="flex items-center gap-2 rounded-md border border-slate-200 pl-1 pr-2 py-1"
          >
            <span className="w-7 h-7 rounded bg-blue-600 text-white text-xs font-semibold flex items-center justify-center">
              MK
            </span>
            <span className="hidden sm:block text-left">
              <span className="block text-xs font-medium text-slate-800">
                Mika Kobayashi
              </span>
              <span className="block text-[11px] text-slate-500">制作者</span>
            </span>
          </button>
          <div
            id="profileMenu"
            className="hidden absolute right-0 mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-lg py-1 z-50"
          >
            <a
              href="#"
              data-role-nav="operator"
              className="block px-3 py-2 text-sm hover:bg-slate-50"
            >
              Copia運用者
            </a>
            <a
              href="#"
              data-role-nav="companyAdmin"
              className="block px-3 py-2 text-sm hover:bg-slate-50"
            >
              企業管理者
            </a>
            <a
              href="#"
              data-role-nav="creator"
              className="block px-3 py-2 text-sm hover:bg-slate-50"
            >
              制作者
            </a>
            <a
              href="#"
              data-role-nav="learner"
              className="block px-3 py-2 text-sm hover:bg-slate-50"
            >
              受講者
            </a>
            <div className="border-t my-1" />
            <a
              href="../index.html"
              className="block px-3 py-2 text-sm hover:bg-slate-50"
            >
              終了
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
