export const featureMessageRegistry = {
  auth: {
    en: () => import("@/features/auth/login/messages/en.json"),
    ja: () => import("@/features/auth/login/messages/ja.json"),
  },
} as const;
