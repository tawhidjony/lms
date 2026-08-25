"use client";

import { FormInput } from "@/components/form/fields/form-input";
import { FormSelect } from "@/components/form/fields/form-select";
import SwitchLocal from "@/components/switch-local";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";
import { Fragment } from "react";
import { TLoginSchemaInput } from "../schema/login.schema";

export default function LoginView() {
  const t = useTranslations("Auth.login");

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
          <SwitchLocal />
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
