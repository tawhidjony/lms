import { routing } from "@/i18n/routing";
import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const handleI18n = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  // Keep cookie-based switching, but ignore Accept-Language so
  // first visits use defaultLocale (ja) instead of the browser language.
  const headers = new Headers(request.headers);
  headers.delete("accept-language");
  return handleI18n(new NextRequest(request, { headers }));
}

export const config = {
  // Match all pathnames except api, Next internals, and static files.
  // Required for localePrefix: 'never' so unprefixed routes are rewritten.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
