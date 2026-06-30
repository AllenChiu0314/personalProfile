import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Chun Wai Chiu",
  description: "Software engineering projects including full-stack web applications, GenAI-integrated platforms, cloud-based systems, and Java application development.",
};

export default function ProjectsPage() {
  return (
    <div style={{ padding: "64px 0" }}>
      <div className="container-main">
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 12px" }}>
            Portfolio
          </p>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.04em", margin: "0 0 16px" }}>
            Projects
          </h1>
          <p style={{ fontSize: "0.95rem", color: "var(--muted)", maxWidth: 560, lineHeight: 1.7, margin: 0 }}>
            A selection of software engineering projects spanning full-stack web development, GenAI-integrated applications, cloud-based systems, and Java application development.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
