interface TagProps {
  label: string;
  small?: boolean;
}

export default function Tag({ label, small }: TagProps) {
  return (
    <span
      style={{
        display: "inline-block",
        background: "var(--tag-bg)",
        color: "var(--tag-text)",
        border: "1px solid var(--border)",
        borderRadius: 4,
        padding: small ? "2px 8px" : "4px 10px",
        fontSize: small ? "0.7rem" : "0.78rem",
        fontWeight: 500,
        letterSpacing: "0.01em",
        lineHeight: 1.4,
      }}
    >
      {label}
    </span>
  );
}
