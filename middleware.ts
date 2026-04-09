import { NextRequest, NextResponse } from "next/server";

type Locale =
  | "ko"
  | "en"
  | "ar"
  | "es"
  | "fr"
  | "it"
  | "ja"
  | "pl"
  | "pt"
  | "tr"
  | "zh-Hans"
  | "zh-Hant";

const LOCALE_COOKIE = "sk_locale";

const ARAB_COUNTRIES = new Set([
  "SA",
  "AE",
  "QA",
  "KW",
  "BH",
  "OM",
  "IQ",
  "JO",
  "LB",
  "SY",
  "YE",
  "EG",
  "LY",
  "TN",
  "DZ",
  "MA",
  "SD",
  "PS",
]);

function normalizeLocale(input: string | null | undefined): Locale | null {
  if (!input) return null;
  const raw = input.trim();
  const v = raw.toLowerCase();
  if (v === "ko" || v.startsWith("ko")) return "ko";
  if (v === "ar" || v.startsWith("ar")) return "ar";
  if (v === "en" || v.startsWith("en")) return "en";
  if (v === "es" || v.startsWith("es")) return "es";
  if (v === "fr" || v.startsWith("fr")) return "fr";
  if (v === "it" || v.startsWith("it")) return "it";
  if (v === "ja" || v.startsWith("ja")) return "ja";
  if (v === "pl" || v.startsWith("pl")) return "pl";
  if (v === "pt" || v.startsWith("pt")) return "pt";
  if (v === "tr" || v.startsWith("tr")) return "tr";
  if (raw === "zh-Hans" || v === "zh-hans" || v.startsWith("zh-hans"))
    return "zh-Hans";
  if (raw === "zh-Hant" || v === "zh-hant" || v.startsWith("zh-hant"))
    return "zh-Hant";
  return null;
}

function inferLocaleFromRequest(req: NextRequest): Locale {
  const qp = normalizeLocale(req.nextUrl.searchParams.get("lang"));
  if (qp) return qp;

  const cookie = normalizeLocale(req.cookies.get(LOCALE_COOKIE)?.value);
  if (cookie) return cookie;

  const country =
    req.headers.get("x-vercel-ip-country") ??
    req.headers.get("cf-ipcountry") ??
    req.headers.get("x-country-code") ??
    null;

  if (country === "KR") return "ko";
  if (country && ARAB_COUNTRIES.has(country)) return "ar";
  if (country === "US") return "en";

  const accept = req.headers.get("accept-language");
  return normalizeLocale(accept) ?? "en";
}

export function middleware(req: NextRequest) {
  const locale = inferLocaleFromRequest(req);
  const res = NextResponse.next();
  res.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

