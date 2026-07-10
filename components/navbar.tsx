"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useLanguage } from "@/lib/i18n";

export default function Navbar() {
  const { t, lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.nav.about, href: "#sobre" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projetos" },
    { label: t.nav.experience, href: "#experiencia" },
    { label: t.nav.contact, href: "#contato" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground">
            VS
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            vdsilveira
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggle}
            aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
            className="rounded-md border border-border px-2.5 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <Link
            href="https://github.com/vdsilveira"
            target="_blank"
            aria-label="GitHub"
            className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <FiGithub className="h-4 w-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vdsilveira/"
            target="_blank"
            aria-label="LinkedIn"
            className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <FiLinkedin className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggle}
            aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
            className="rounded-md border border-border px-2.5 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="rounded-md border border-border p-2 text-foreground"
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
