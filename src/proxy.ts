import createMiddleware from "next-intl/middleware";

import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except api, Next internals, and static files.
  // Required for localePrefix: 'never' so unprefixed routes are rewritten.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
