"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

const locales: { value: Locale; label: string }[] = [
  { value: "ja", label: "JA" },
  { value: "en", label: "EN" },
] as const;

export default function SwitchLocal() {
  const t = useTranslations("Auth.login");
  const locale = useLocale() as Locale;

  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div
      role="group"
      aria-label={t("language") as string}
      className="inline-flex shrink-0 rounded-md border border-slate-200 bg-slate-50 p-0.5"
    >
      {locales.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          disabled={isPending}
          aria-pressed={locale === value}
          onClick={() => switchLocale(value)}
          className={`rounded px-2.5 py-1 text-xs font-medium transition-colors disabled:opacity-60 ${
            locale === value
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-500 hover:text-slate-800"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
