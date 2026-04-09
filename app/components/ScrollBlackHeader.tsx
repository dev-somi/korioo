"use client";

import {
  Check,
  ChevronDown,
  Globe,
  LogIn,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type NavItem = { label: string; href: string };

export type HeaderCopy = {
  languageLabel: string;
  login: string;
  signup: string;
  nav: readonly NavItem[];
};

export function ScrollBlackHeader({
  copy,
  localeCode,
  thresholdPx = 8,
}: {
  copy: HeaderCopy;
  localeCode:
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
  thresholdPx?: number;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > thresholdPx);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [thresholdPx]);

  useEffect(() => {
    if (!isScrolled) setMobileOpen(false);
  }, [isScrolled]);

  useEffect(() => {
    if (!langOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!langWrapRef.current) return;
      if (e.target instanceof Node && !langWrapRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLangOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [langOpen]);

  const theme = useMemo(() => {
    if (isScrolled) {
      return {
        wrap: "bg-white/95 text-zinc-900 border-zinc-200/70 shadow-sm",
        link: "text-zinc-700 hover:text-zinc-900",
        pill: "bg-zinc-100 text-zinc-800 ring-black/10 hover:bg-zinc-200/60",
        login: "text-zinc-800 hover:bg-zinc-100",
        menuBtn: "bg-zinc-100 text-zinc-900 ring-black/10 hover:bg-zinc-200/60",
        divider: "border-zinc-200/70",
        mobileItem: "hover:bg-zinc-100",
        chevron: "opacity-70",
      } as const;
    }

    return {
      // 스크롤 안 내렸을 때: "색 없는(투명)" 헤더
      wrap: "bg-transparent text-white border-transparent shadow-none",
      link: "text-white/90 hover:text-white",
      pill: "bg-white/10 text-white ring-white/15 hover:bg-white/15",
      login: "text-white/90 hover:bg-white/10",
      menuBtn: "bg-white/10 text-white ring-white/15 hover:bg-white/15",
      divider: "border-white/10",
      mobileItem: "hover:bg-white/10",
      chevron: "opacity-80",
    } as const;
  }, [isScrolled]);

  const languageOptions = useMemo(
    () =>
      [
        { code: "en", label: "영어" },
        { code: "ar", label: "العربية" },
        { code: "es", label: "Español" },
        { code: "fr", label: "Français" },
        { code: "it", label: "Italiano" },
        { code: "ja", label: "日本語" },
        { code: "ko", label: "한국어" },
        { code: "pl", label: "Polski" },
        { code: "pt", label: "Português" },
        { code: "tr", label: "Türkçe" },
        { code: "zh-Hans", label: "中文 (简体)" },
        { code: "zh-Hant", label: "中文 (繁體)" },
      ] as const,
    [],
  );

  const onSelectLang = (code: (typeof languageOptions)[number]["code"]) => {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", code);
    window.location.assign(url.toString());
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={[
          theme.wrap,
          "backdrop-blur border-b transition-colors duration-200",
        ].join(" ")}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="text-base font-extrabold tracking-tight">
              <span className="text-primary">Say</span>Korean
            </span>
          </a>

          <div className="hidden items-center gap-6 text-sm font-semibold md:flex">
            {copy.nav.map((i) => (
              <a key={i.label} href={i.href} className={theme.link}>
                {i.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block" ref={langWrapRef}>
              <button
                type="button"
                className={`btn inline-flex gap-2 px-4 py-2 text-sm ring-1 ${theme.pill}`}
                aria-label="Language"
                aria-haspopup="menu"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
                {copy.languageLabel}
                <ChevronDown
                  className={`h-4 w-4 ${theme.chevron}`}
                  aria-hidden="true"
                />
              </button>

              {langOpen ? (
                <div
                  role="menu"
                  aria-label="Select language"
                  className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md"
                >
                  <div className="py-2">
                    {languageOptions.map((opt) => {
                      const isSelected = opt.code === localeCode;
                      return (
                        <button
                          key={opt.code}
                          type="button"
                          role="menuitem"
                          className={[
                            "flex w-full items-center gap-3 px-4 py-2.5 text-left text-base font-semibold text-zinc-900 hover:bg-zinc-50",
                            isSelected ? "bg-zinc-50" : "",
                          ].join(" ")}
                          onClick={() => onSelectLang(opt.code)}
                        >
                          <span className="inline-flex w-5 justify-center">
                            {isSelected ? (
                              <Check
                                className="h-5 w-5 text-zinc-900"
                                aria-hidden="true"
                              />
                            ) : (
                              <span className="h-5 w-5" aria-hidden="true" />
                            )}
                          </span>
                          <span>{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>

            <a
              href="#login"
              className={`btn hidden px-4 py-2 text-sm sm:inline-flex ${theme.login}`}
            >
              <LogIn className="mr-2 h-4 w-4" aria-hidden="true" />
              {copy.login}
            </a>

            <a
              href="#signup"
              className="btn btn-primary px-4 py-2 text-sm shadow-md"
            >
              {copy.signup}
            </a>

            <button
              type="button"
              className={`btn inline-flex h-9 w-9 items-center justify-center ring-1 md:hidden ${theme.menuBtn}`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <X className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {mobileOpen ? (
          <div className={`border-t md:hidden ${theme.divider}`}>
            <div className="mx-auto grid max-w-6xl gap-1 px-4 py-3 text-sm font-semibold sm:px-6">
              {copy.nav.map((i) => (
                <a
                  key={i.label}
                  href={i.href}
                  className={`rounded-xl px-3 py-2 ${theme.mobileItem}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {i.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

