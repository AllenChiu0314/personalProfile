"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { personal } from "@/lib/data";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(248, 247, 244, 0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container-main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "-0.03em",
            color: "var(--foreground)",
            textDecoration: "none",
          }}
        >
          {personal.name}
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.875rem",
                color: pathname === link.href ? "var(--accent)" : "var(--muted)",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  pathname === link.href ? "var(--accent)" : "var(--muted)")
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="mobile-menu-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            display: "none",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span style={{ display: "block", width: 22, height: 2, background: "var(--foreground)", borderRadius: 2 }} />
          <span style={{ display: "block", width: 22, height: 2, background: "var(--foreground)", borderRadius: 2 }} />
          <span style={{ display: "block", width: 22, height: 2, background: "var(--foreground)", borderRadius: 2 }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            background: "var(--surface)",
            borderBottom: "1px solid var(--border)",
            padding: "16px 24px",
          }}
          className="mobile-nav"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "10px 0",
                fontSize: "0.95rem",
                color: "var(--foreground)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
