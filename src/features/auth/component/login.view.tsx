import { FormInput } from "@/components/form/fields/form-input";
import { Button } from "@/components/ui";
import { Fragment } from "react/jsx-runtime";
import { TLoginSchemaInput } from "./schema/login.schema";

export default function LoginView() {
  return (
    <Fragment>
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
      <FormInput<TLoginSchemaInput>
        name="email"
        id="email"
        type="email"
        label="メールアドレス"
        placeholder="メールアドレスを入力してください"
      />
      <label className="block text-xs font-medium text-slate-600 mb-1">
        パスワード
      </label>
      <FormInput<TLoginSchemaInput>
        name="password"
        id="password"
        type="password"
        label="パスワード"
        placeholder="パスワードを入力してください"
      />
      <label className="block text-xs font-medium text-slate-600 mb-1">
        ロール
      </label>

      <Button type="submit" className="w-full">
        ログイン
      </Button>
    </Fragment>
  );
}
