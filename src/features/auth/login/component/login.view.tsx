"use client";

import { FormInput } from "@/components/form/fields/form-input";
import { FormSelect } from "@/components/form/fields/form-select";
import { Button, Switch } from "@/components/ui";
import { useLang } from "@/lang";
import { Fragment } from "react/jsx-runtime";
import { TLoginSchemaInput } from "../schema/login.schema";

export default function LoginView() {
  const { t, locale, setLocale } = useLang();

  return (
    <Fragment>
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center">
            C
          </div>
          <div>
            <div className="font-semibold text-slate-900">Copia LMS</div>
            <div className="text-xs text-slate-500">{t.brandSubtitle}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
          <span className={locale === "ja" ? "text-slate-900" : "text-slate-400"}>
            JA
          </span>
          <Switch
            checked={locale === "en"}
            onCheckedChange={(checked) => setLocale(checked ? "en" : "ja")}
            aria-label="Toggle language"
          />
          <span className={locale === "en" ? "text-slate-900" : "text-slate-400"}>
            EN
          </span>
        </div>
      </div>
      <FormInput<TLoginSchemaInput>
        name="email"
        id="email"
        type="email"
        label={t.email}
        placeholder={t.emailPlaceholder}
        required
      />
      <FormInput<TLoginSchemaInput>
        name="password"
        id="password"
        type="password"
        label={t.password}
        placeholder={t.passwordPlaceholder}
        required
      />
      <FormSelect<TLoginSchemaInput>
        name="role"
        label={t.role}
        id="role"
        placeholder={t.rolePlaceholder}
        options={[
          { label: t.roles.learner, value: "learner" },
          { label: t.roles.creator, value: "creator" },
          { label: t.roles.companyAdmin, value: "companyAdmin" },
          { label: t.roles.operator, value: "operator" },
        ]}
      />

      <Button type="submit" className="w-full">
        {t.login}
      </Button>
    </Fragment>
  );
}
