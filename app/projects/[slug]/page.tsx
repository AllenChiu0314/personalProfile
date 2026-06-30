import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/Tag";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Chun Wai Chiu`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const prev = projects[projectIndex - 1] ?? null;
  const next = projects[projectIndex + 1] ?? null;

  return (
    <div style={{ padding: "64px 0" }}>
      <div className="container-main">
        {/* Back */}
        <Link
          href="/projects"
          style={{
            fontSize: "0.85rem",
            color: "var(--muted)",
            textDecoration: "none",
            fontWeight: 500,
            display: "inline-block",
            marginBottom: 40,
          }}
        >
          ← All Projects
        </Link>

        {/* Header */}
        <div style={{ maxWidth: 760, marginBottom: 56 }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: "0 0 12px",
            }}
          >
            {project.type} · {project.period}
          </p>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              margin: "0 0 20px",
              lineHeight: 1.1,
            }}
          >
            {project.title}
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--muted)",
              lineHeight: 1.7,
              margin: "0 0 24px",
            }}
          >
            {project.summary}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
            {project.tech.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "var(--foreground)",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: 5,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                View Live Site ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "transparent",
                  color: "var(--foreground)",
                  padding: "10px 20px",
                  borderRadius: 5,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1px solid var(--border)",
                }}
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>

        {/* Screenshot */}
        {project.image && (
          <div
            style={{
              borderRadius: 8,
              overflow: "hidden",
              border: "1px solid var(--border)",
              marginBottom: 64,
              position: "relative",
              height: 400,
            }}
          >
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              priority
            />
          </div>
        )}

        {/* Case study grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* Main */}
          <div>
            <CaseSection title="The Problem">
              <p style={{ margin: 0 }}>{project.problem}</p>
            </CaseSection>

            <CaseSection title="The Solution">
              <p style={{ margin: 0 }}>{project.solution}</p>
            </CaseSection>

            <CaseSection title="My Contribution">
              <p style={{ margin: 0 }}>{project.contribution}</p>
            </CaseSection>

            <CaseSection title="Key Features">
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                {project.features.map((f, i) => (
                  <li key={i} style={{ marginBottom: 8, lineHeight: 1.65 }}>
                    {f}
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection title="Technical Focus">
              <p style={{ margin: 0 }}>{project.technicalFocus}</p>
            </CaseSection>

            <CaseSection title="What I Learned">
              <p style={{ margin: 0 }}>{project.learned}</p>
            </CaseSection>

            <CaseSection title="Future Improvements">
              <p style={{ margin: 0 }}>{project.futureWork}</p>
            </CaseSection>
          </div>

          {/* Sidebar */}
          <div style={{ position: "sticky", top: 80 }}>
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: 24,
              }}
            >
              <h3
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  margin: "0 0 20px",
                }}
              >
                Project Details
              </h3>
              <SidebarDetail label="Type" value={project.type} />
              <SidebarDetail label="Period" value={project.period} />
              <SidebarDetail label="Employer Value" value={project.employerValue} last />
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            marginTop: 80,
            paddingTop: 40,
            borderTop: "1px solid var(--border)",
          }}
        >
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: 20,
                textDecoration: "none",
                display: "block",
              }}
            >
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "var(--muted)",
                  margin: "0 0 6px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                ← Previous
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: 20,
                textDecoration: "none",
                display: "block",
                textAlign: "right",
              }}
            >
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "var(--muted)",
                  margin: "0 0 6px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Next →
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {next.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

function CaseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2
        style={{
          fontSize: "1.05rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          margin: "0 0 14px",
          paddingBottom: 12,
          borderBottom: "1px solid var(--border)",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontSize: "0.9rem",
          color: "var(--muted)",
          lineHeight: 1.75,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function SidebarDetail({
  label,
  value,
  last,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      style={{
        marginBottom: last ? 0 : 16,
        paddingBottom: last ? 0 : 16,
        borderBottom: last ? "none" : "1px solid var(--border)",
      }}
    >
      <p
        style={{
          fontSize: "0.68rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "var(--muted)",
          margin: "0 0 4px",
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: "0.85rem",
          color: "var(--foreground)",
          margin: 0,
          lineHeight: 1.55,
        }}
      >
        {value}
      </p>
    </div>
  );
}
