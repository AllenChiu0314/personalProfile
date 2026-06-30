"use client";
import Link from "next/link";
import Image from "next/image";
import Tag from "./Tag";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        overflow: "hidden",
        transition: "box-shadow 0.2s, border-color 0.2s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 20px rgba(0,0,0,0.08)";
        (e.currentTarget as HTMLElement).style.borderColor = "#c4c1b8";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      {/* Image area */}
      <div
        style={{
          background: "var(--surface-alt)",
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: 24,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 8,
                background: "var(--border)",
                margin: "0 auto 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <p style={{ fontSize: "0.75rem", color: "var(--muted)", margin: 0 }}>
              {project.type}
            </p>
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: 8 }}>
          <p style={{ fontSize: "0.75rem", color: "var(--muted)", margin: "0 0 6px", fontWeight: 500 }}>
            {project.period}
          </p>
          <h3
            style={{
              fontSize: "1.05rem",
              fontWeight: 700,
              margin: "0 0 10px",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>
          <p style={{ fontSize: "0.875rem", color: "var(--muted)", margin: "0 0 16px", lineHeight: 1.6 }}>
            {project.summary}
          </p>
        </div>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
          {project.tech.map((t) => (
            <Tag key={t} label={t} small />
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "auto" }}>
          <Link
            href={`/projects/${project.slug}`}
            style={{
              display: "inline-block",
              background: "var(--foreground)",
              color: "#fff",
              padding: "9px 18px",
              borderRadius: 5,
              fontSize: "0.8rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            View Case Study →
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginLeft: 10,
                color: "var(--muted)",
                fontSize: "0.8rem",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Live Site ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
