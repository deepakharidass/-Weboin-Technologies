"use client";

import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 text-slate-900 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/85 dark:text-slate-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3.5 lg:py-5">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-brand-500 to-cyan-400" />
          <span className="text-lg font-semibold tracking-tight md:text-xl">
            Weboin Creative Agency
          </span>
        </div>

        <nav className="flex flex-1 items-center justify-center gap-5 text-sm font-medium text-slate-600 md:justify-center md:gap-7 md:text-lg dark:text-slate-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-2.5 py-1 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800/80 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-800 shadow-sm transition hover:border-brand-500 hover:bg-brand-500 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-500 dark:hover:bg-brand-600 sm:inline-flex"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </header>
  );
}

