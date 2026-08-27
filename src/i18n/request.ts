import { getRequestConfig, RequestConfig } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { loadMessages } from "./message-loader";

export default getRequestConfig(
  async ({ requestLocale }): Promise<RequestConfig> => {
    const requestedLocale = await requestLocale;

    const locale = routing.locales.includes(requestedLocale as Locale)
      ? requestedLocale
      : routing.defaultLocale;

    return {
      locale: locale as Locale,
      messages: await loadMessages(locale as Locale),
    };
  },
);
