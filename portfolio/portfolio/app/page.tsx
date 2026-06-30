import Link from "next/link";
import { personal, education, experience, skills, projects, research } from "@/lib/data";
import Tag from "@/components/Tag";
import ProjectCard from "@/components/ProjectCard";
import HeroLinks from "@/components/HeroLinks";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      {/* HERO */}
      <section style={{ padding: "100px 0 80px", borderBottom: "1px solid var(--border)" }}>
        <div className="container-main">
          <div style={{ maxWidth: 720 }}>
            <p style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 20px" }}>
              Sydney, NSW · Available for graduate roles
            </p>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 24px" }}>
              {personal.name}
            </h1>
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: "var(--muted)", lineHeight: 1.65, margin: "0 0 36px", maxWidth: 620 }}>
              {personal.summary}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 40 }}>
              <Link href="/projects" style={{ background: "var(--foreground)", color: "#fff", padding: "11px 22px", borderRadius: 6, fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
                View Projects
              </Link>
              <a href={`mailto:${personal.email}`} style={{ background: "transparent", color: "var(--foreground)", padding: "11px 22px", borderRadius: 6, fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", border: "1px solid var(--border)" }}>
                Contact Me
              </a>
            </div>
            <HeroLinks />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "60px", alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 10px" }}>About</p>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.03em", margin: 0 }}>Background</h2>
            </div>
            <div>
              {personal.about.split("\n\n").map((para, i) => (
                <p key={i} style={{ fontSize: "0.95rem", lineHeight: 1.8, color: i === 0 ? "var(--foreground)" : "var(--muted)", margin: i < personal.about.split("\n\n").length - 1 ? "0 0 16px" : 0 }}>
                  {para}
                </p>
              ))}
              <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
                {personal.workRights}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" style={{ padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-main">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 48, flexWrap: "wrap", gap: 12 }}>
            <div>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 10px" }}>Work</p>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.03em", margin: 0 }}>Featured Projects</h2>
            </div>
            <Link href="/projects" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--accent)", textDecoration: "none" }}>
              View all →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" style={{ padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "60px", alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 10px" }}>Publication</p>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.03em", margin: 0 }}>Research</h2>
            </div>
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: 28 }}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
                {research.topics.map((t) => <Tag key={t} label={t} small />)}
              </div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: "0 0 10px", lineHeight: 1.4, letterSpacing: "-0.01em" }}>
                {research.title}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)", margin: "0 0 12px", lineHeight: 1.65 }}>
                {research.summary}
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--muted)", margin: "0 0 20px" }}>
                {research.authors} · {research.year}
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <a href={research.arxivUrl} target="_blank" rel="noopener noreferrer" style={{ background: "var(--foreground)", color: "#fff", padding: "9px 18px", borderRadius: 5, fontSize: "0.8rem", fontWeight: 600, textDecoration: "none" }}>
                  View on arXiv ↗
                </a>
                <Link href="/research" style={{ color: "var(--muted)", fontSize: "0.8rem", fontWeight: 500, textDecoration: "none", padding: "9px 0" }}>
                  Full details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "60px", alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 10px" }}>Career</p>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.03em", margin: 0 }}>Experience</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              {experience.map((exp) => (
                <div key={exp.company} style={{ borderLeft: "2px solid var(--border)", paddingLeft: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4, marginBottom: 8 }}>
                    <div>
                      <h3 style={{ fontWeight: 700, fontSize: "1rem", margin: 0 }}>{exp.role}</h3>
                      <p style={{ fontSize: "0.875rem", color: "var(--muted)", margin: "2px 0 0" }}>{exp.company}</p>
                    </div>
                    <span style={{ fontSize: "0.8rem", color: "var(--muted)", fontWeight: 500 }}>{exp.period}</span>
                  </div>
                  <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
                    {exp.highlights.map((h, i) => (
                      <li key={i} style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: 4 }}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" style={{ padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "60px", alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 10px" }}>Academic</p>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.03em", margin: 0 }}>Education</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {education.map((edu) => (
                <div key={edu.institution} style={{ borderLeft: "2px solid var(--border)", paddingLeft: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4 }}>
                    <div>
                      <h3 style={{ fontWeight: 700, fontSize: "1rem", margin: "0 0 4px" }}>{edu.degree}</h3>
                      <p style={{ fontSize: "0.875rem", color: "var(--muted)", margin: 0 }}>{edu.institution}</p>
                      <p style={{ fontSize: "0.8rem", color: "var(--accent)", margin: "4px 0 0", fontWeight: 600 }}>{edu.grade}</p>
                    </div>
                    <span style={{ fontSize: "0.8rem", color: "var(--muted)", fontWeight: 500 }}>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "60px", alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 10px" }}>Technical</p>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.03em", margin: 0 }}>Skills</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 28 }}>
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 12px" }}>
                    {category}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {items.map((skill) => <Tag key={skill} label={skill} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 0" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "60px", alignItems: "start" }}>
            <div>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", margin: "0 0 10px" }}>Get in touch</p>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.03em", margin: 0 }}>Contact</h2>
            </div>
            <div>
              <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.7, margin: "0 0 28px" }}>
                I am currently seeking graduate software engineering, junior developer, full-stack, and AI/GenAI developer opportunities in Australia. Feel free to reach out.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "Email", value: personal.email, href: `mailto:${personal.email}` },
                  { label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
                  { label: "LinkedIn", value: "linkedin.com/in/chunwai-chiu-318746292", href: personal.linkedin },
                  { label: "GitHub", value: "github.com/AllenChiu0314", href: personal.github },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: 20, alignItems: "baseline" }}>
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted)", minWidth: 64 }}>
                      {item.label}
                    </span>
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} style={{ fontSize: "0.9rem", color: "var(--foreground)", textDecoration: "none", fontWeight: 500 }}>
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
