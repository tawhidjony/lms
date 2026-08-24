export const loginLang = {
  ja: {
    brandSubtitle: "ログイン · 株式会社サクラ デモ",
    email: "メールアドレス",
    emailPlaceholder: "メールアドレスを入力してください",
    password: "パスワード",
    passwordPlaceholder: "パスワードを入力してください",
    role: "ロール",
    rolePlaceholder: "ロールを選択してください",
    roles: {
      learner: "受講者",
      creator: "制作者",
      companyAdmin: "企業管理者",
      operator: "Copia運用者",
    },
    login: "ログイン",
  },
  en: {
    brandSubtitle: "Login · Sakura Inc. Demo",
    email: "Email",
    emailPlaceholder: "Enter your email address",
    password: "Password",
    passwordPlaceholder: "Enter your password",
    role: "Role",
    rolePlaceholder: "Select a role",
    roles: {
      learner: "Learner",
      creator: "Creator",
      companyAdmin: "Company Admin",
      operator: "Copia Operator",
    },
    login: "Login",
  },
};

export type LoginLang = typeof loginLang;
export type LoginLangMessages = LoginLang["ja"];
