import { FormInput } from "@/components/form/fields/form-input";
import { FormSelect } from "@/components/form/fields/form-select";
import { Button } from "@/components/ui";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { Fragment, useTransition } from "react";
import { TLoginSchemaInput } from "../schema/login.schema";

const locales: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "ja", label: "JA" },
];

export default function LoginView() {
  const t = useTranslations("Auth.login");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
      router.refresh();
    });
  };

  return (
    <Fragment>
      <div className="flex items-start justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center">
            C
          </div>
          <div>
            <div className="font-semibold text-slate-900">{t("title")}</div>
            <div className="text-xs text-slate-500">{t("description")}</div>
          </div>
        </div>
        <div
          role="group"
          aria-label={t("language")}
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
      </div>
      <FormInput<TLoginSchemaInput>
        name="email"
        id="email"
        type="email"
        label={t("email")}
        placeholder={t("emailPlaceholder")}
        required
      />
      <FormInput<TLoginSchemaInput>
        name="password"
        id="password"
        type="password"
        label={t("password")}
        placeholder={t("passwordPlaceholder")}
        required
      />
      <FormSelect<TLoginSchemaInput>
        name="role"
        label={t("role")}
        id="role"
        placeholder={t("rolePlaceholder")}
        options={[
          { label: t("roles.learner"), value: "learner" },
          { label: t("roles.creator"), value: "creator" },
          { label: t("roles.companyAdmin"), value: "companyAdmin" },
          { label: t("roles.operator"), value: "operator" },
        ]}
      />

      <Button type="submit" className="w-full">
        {t("submit")}
      </Button>
    </Fragment>
  );
}
