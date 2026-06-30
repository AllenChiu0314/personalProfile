import { research, personal } from "@/lib/data";
import Link from "next/link";
import Tag from "@/components/Tag";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research — Chun Wai Chiu",
  description:
    "AI safety research publication on jailbreak prompt attacks against multimodal large language models.",
};

export default function ResearchPage() {
  return (
    <div style={{ padding: "64px 0" }}>
      <div className="container-main">
        <div style={{ marginBottom: 56, maxWidth: 680 }}>
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
            Publication
          </p>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              margin: "0 0 16px",
            }}
          >
            Research
          </h1>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            As part of my broader interest in AI applications and safety, I
            contributed to research examining adversarial robustness in
            multimodal large language models.
          </p>
        </div>

        {/* Publication card */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: 40,
            maxWidth: 800,
          }}
        >
          {/* Topics */}
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}
          >
            {research.topics.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>

          {/* Title */}
          <h2
            style={{
              fontSize: "1.3rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.35,
              margin: "0 0 16px",
            }}
          >
            {research.title}
          </h2>

          {/* Meta */}
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--muted)",
              margin: "0 0 20px",
              fontWeight: 500,
            }}
          >
            {research.authors} · {research.year} · arXiv
          </p>

          {/* Summary */}
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--muted)",
              lineHeight: 1.75,
              margin: "0 0 20px",
            }}
          >
            {research.summary}
          </p>

          {/* Contribution note */}
          <div
            style={{
              background: "var(--surface-alt)",
              border: "1px solid var(--border)",
              borderRadius: 6,
              padding: "14px 18px",
              marginBottom: 28,
            }}
          >
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--muted)",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: "var(--foreground)" }}>
                My contribution:
              </strong>{" "}
              {research.contribution}
            </p>
          </div>

          {/* CTA */}
          <a
            href={research.arxivUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "var(--foreground)",
              color: "#fff",
              padding: "11px 22px",
              borderRadius: 5,
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Read on arXiv ↗
          </a>
        </div>

        {/* Why it matters */}
        <div style={{ maxWidth: 680, marginTop: 64 }}>
          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              margin: "0 0 16px",
              paddingBottom: 12,
              borderBottom: "1px solid var(--border)",
            }}
          >
            Relevance to AI/GenAI roles
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--muted)",
              lineHeight: 1.75,
              margin: "0 0 16px",
            }}
          >
            AI safety is a growing priority for organisations building and
            deploying large language model applications. Understanding how models
            can be attacked through adversarial prompts — and how to evaluate
            their robustness — is directly relevant to building reliable,
            responsible AI systems.
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--muted)",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            This research complements my practical GenAI application experience
            and demonstrates an awareness of the broader safety and evaluation
            considerations involved in deploying AI in production contexts.
          </p>
        </div>

        {/* Back home */}
        <div style={{ marginTop: 64 }}>
          <Link
            href="/"
            style={{
              fontSize: "0.85rem",
              color: "var(--muted)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
