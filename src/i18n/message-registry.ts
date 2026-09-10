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
  operatorDashboard: {
    en: () => import("@/features/operator/dashboard/messages/en.json"),
    ja: () => import("@/features/operator/dashboard/messages/ja.json"),
  },
  operatorPackages: {
    en: () => import("@/features/operator/package/messages/en.json"),
    ja: () => import("@/features/operator/package/messages/ja.json"),
  },
  operatorTenant: {
    en: () => import("@/features/operator/tenant/messages/en.json"),
    ja: () => import("@/features/operator/tenant/messages/ja.json"),
  },
  operatorContracts: {
    en: () => import("@/features/operator/contracts/messages/en.json"),
    ja: () => import("@/features/operator/contracts/messages/ja.json"),
  },
  creatorScenarios: {
    en: () => import("@/features/creator/scenarios/messages/en.json"),
    ja: () => import("@/features/creator/scenarios/messages/ja.json"),
  },
} as const;
