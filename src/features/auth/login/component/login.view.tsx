import { FormInput } from "@/components/form/fields/form-input";
import { FormSelect } from "@/components/form/fields/form-select";
import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";
import { Fragment } from "react/jsx-runtime";
import { TLoginSchemaInput } from "../schema/login.schema";

export default function LoginView() {
  const t = useTranslations("Auth.login");
  return (
    <Fragment>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center">
          C
        </div>
        <div>
          <div className="font-semibold text-slate-900">{t("title")}</div>
          <div className="text-xs text-slate-500">
            ログイン · 株式会社サクラ デモ
          </div>
        </div>
      </div>
      <FormInput<TLoginSchemaInput>
        name="email"
        id="email"
        type="email"
        label="メールアドレス"
        placeholder="メールアドレスを入力してください"
        required
      />
      <FormInput<TLoginSchemaInput>
        name="password"
        id="password"
        type="password"
        label="パスワード"
        placeholder="パスワードを入力してください"
        required
      />
      <FormSelect<TLoginSchemaInput>
        name="role"
        label="ロール"
        id="role"
        placeholder="ロールを選択してください"
        options={[
          { label: "受講者", value: "learner" },
          { label: "制作者", value: "creator" },
          { label: "企業管理者", value: "companyAdmin" },
          { label: "Copia運用者", value: "operator" },
        ]}
      />

      <Button type="submit" className="w-full">
        ログイン
      </Button>
    </Fragment>
  );
}
