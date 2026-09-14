"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Flower2, Heart, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const SECTION_IDS = ["home", "about", "education", "skills", "certifications", "contact"];

const NAV_LINKS = [
  { href: "/#about", label: "About", sectionId: "about" },
  { href: "/#education", label: "Education", sectionId: "education" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/#skills", label: "Skills", sectionId: "skills" },
  { href: "/#certifications", label: "Certifications", sectionId: "certifications" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (link: (typeof NAV_LINKS)[number]) => {
    if (link.sectionId) return pathname === "/" && activeSection === link.sectionId;
    return pathname === link.href;
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-warmCream/85 border-b border-softPink/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            className="group flex items-center gap-2 text-2xl font-bold tracking-tight text-charcoalPlum hover:text-rosePink transition-colors"
            href="/"
          >
            <span className="w-10 h-10 rounded-full bg-softPink flex items-center justify-center text-rosePink shadow-sm group-hover:scale-110 transition-transform">
              <Flower2 className="w-5 h-5" />
            </span>
            <span className="font-gaegu text-3xl font-bold text-deepRose flex items-center gap-1.5">
              Shreya Soni <Heart className="w-5 h-5 fill-rosePink text-rosePink inline-block animate-pulse" />
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  isActive(link)
                    ? "text-deepRose bg-softPink/50"
                    : "text-mutedPlum hover:text-deepRose hover:bg-softPink/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="ml-2 px-4 py-2 rounded-full text-sm font-bold bg-softPink text-deepRose border border-accentPink/60 hover:bg-rosePink hover:text-white shadow-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
              href="/#contact"
            >
              <span>Contact</span>
              <Heart className="w-4 h-4 fill-current" />
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 rounded-xl text-charcoalPlum hover:bg-softPink transition-colors"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                  isActive(link) ? "text-deepRose bg-softPink/60" : "text-mutedPlum hover:bg-softPink/60"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-sm font-bold bg-softPink text-deepRose flex items-center gap-1.5"
            >
              Let&apos;s Connect <Heart className="w-4 h-4 fill-current" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
