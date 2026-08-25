export const featureMessageRegistry = {
  auth: {
    en: () => import("@/features/auth/login/messages/en.json"),
    ja: () => import("@/features/auth/login/messages/ja.json"),
  },
  layouts: {
    en: () => import("@/components/layouts/messages/en.json"),
    ja: () => import("@/components/layouts/messages/ja.json"),
  },
  learnerDashboard: {
    en: () => import("@/features/learner/dashboard/messages/en.json"),
    ja: () => import("@/features/learner/dashboard/messages/ja.json"),
  },
} as const;
