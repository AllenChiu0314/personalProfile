"use client";
import { personal } from "@/lib/data";

export default function HeroLinks() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      {[
        { label: "LinkedIn", href: personal.linkedin },
        { label: "GitHub", href: personal.github },
        { label: "Email", href: `mailto:${personal.email}` },
      ].map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          style={{
            fontSize: "0.85rem",
            color: "var(--muted)",
            textDecoration: "none",
            fontWeight: 500,
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "var(--muted)";
          }}
        >
          {link.label} ↗
        </a>
      ))}
    </div>
  );
}
