import Link from "next/link";
import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
        padding: "40px 0",
        marginTop: 80,
      }}
    >
      <div
        className="container-main"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div>
          <p style={{ fontWeight: 600, fontSize: "0.9rem", margin: 0 }}>
            {personal.name}
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--muted)", margin: "4px 0 0" }}>
            Graduate Software Engineer · Sydney, NSW
          </p>
        </div>

        <div style={{ display: "flex", gap: 20 }}>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.8rem", color: "var(--muted)", textDecoration: "none" }}
          >
            LinkedIn
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.8rem", color: "var(--muted)", textDecoration: "none" }}
          >
            GitHub
          </a>
          <a
            href={`mailto:${personal.email}`}
            style={{ fontSize: "0.8rem", color: "var(--muted)", textDecoration: "none" }}
          >
            Email
          </a>
        </div>

        <p style={{ fontSize: "0.75rem", color: "var(--muted)", margin: 0 }}>
          © {new Date().getFullYear()} {personal.name}
        </p>
      </div>
    </footer>
  );
}
