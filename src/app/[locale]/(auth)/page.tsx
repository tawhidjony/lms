import LoginComponent from "@/features/auth/login/component/login.component";
import { getTranslations } from "next-intl/server";

export default async function LoginPage() {
  const t = await getTranslations("Auth");
  return (
    <div>
      <h1>{t("login.title")}</h1>
      <LoginComponent />
    </div>
  );
}
