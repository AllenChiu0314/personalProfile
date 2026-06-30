"use client";
import Link from "next/link";
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
        padding: "24px",
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
      {/* Type label row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <span
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}
        >
          {project.type}
        </span>
        <span style={{ fontSize: "0.75rem", color: "var(--muted)", fontWeight: 500 }}>
          {project.period}
        </span>
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
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
