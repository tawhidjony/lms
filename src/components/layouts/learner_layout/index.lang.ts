export const learnerLayoutLang = {
  ja: {
    dashboard: "ダッシュボード",
    myCourses: "マイコース",
    notifications: "通知",
  },
  en: {
    dashboard: "Dashboard",
    myCourses: "My Courses",
    notifications: "Notifications",
  },
};

export type LearnerLayoutLang = typeof learnerLayoutLang;
export type LearnerLayoutLangMessages = LearnerLayoutLang["ja"];
export type LearnerLayoutLangKey = keyof LearnerLayoutLangMessages;
