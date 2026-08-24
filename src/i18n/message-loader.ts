import { featureMessageRegistry } from "@/i18n/message-registry";
import type { Locale } from "@/i18n/routing";

const globalMessages = {
  en: {
    common: () => import("@/messages/en/common.json"),
    navigation: () => import("@/messages/en/navigation.json"),
    validation: () => import("@/messages/en/validation.json"),
  },

  ja: {
    common: () => import("@/messages/ja/common.json"),
    navigation: () => import("@/messages/ja/navigation.json"),
    validation: () => import("@/messages/ja/validation.json"),
  },
} as const;

export async function loadMessages(locale: Locale) {
  const globalLoaders = globalMessages[locale];

  const featureLoaders = Object.values(featureMessageRegistry).map((feature) =>
    feature[locale](),
  );

  const [common, navigation, validation, ...features] = await Promise.all([
    globalLoaders.common(),
    globalLoaders.navigation(),
    globalLoaders.validation(),
    ...featureLoaders,
  ]);

  return {
    ...common.default,
    ...navigation.default,
    ...validation.default,
    ...Object.assign({}, ...features.map((feature) => feature.default)),
  };
}
