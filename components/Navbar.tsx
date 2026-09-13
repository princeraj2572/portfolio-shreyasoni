"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/certifications", label: "Certifications" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-warmCream/85 border-b border-softPink/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            className="group flex items-center gap-2 text-2xl font-bold tracking-tight text-charcoalPlum hover:text-rosePink transition-colors"
            href="/"
          >
            <span className="w-10 h-10 rounded-full bg-softPink flex items-center justify-center text-rosePink shadow-sm group-hover:scale-110 transition-transform">
              🌸
            </span>
            <span className="font-gaegu text-3xl font-bold text-deepRose">
              Shreya Soni <span className="text-rosePink inline-block animate-pulse">♡</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  pathname === link.href
                    ? "text-deepRose bg-softPink/50"
                    : "text-mutedPlum hover:text-deepRose hover:bg-softPink/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="ml-2 px-4 py-2 rounded-full text-sm font-bold bg-softPink text-deepRose border border-accentPink/60 hover:bg-rosePink hover:text-white shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
              href="/contact"
            >
              <span>Contact</span>
              <span>♡</span>
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 rounded-xl text-charcoalPlum hover:bg-softPink transition-colors"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-softPink/40 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold ${
                  pathname === link.href ? "text-deepRose bg-softPink/60" : "text-mutedPlum hover:bg-softPink/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-sm font-bold bg-softPink text-deepRose"
            >
              Let&apos;s Connect ♡
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
