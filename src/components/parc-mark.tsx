type Props = {
  className?: string;
  tone?: "dark" | "light";
};

/**
 * Placeholder monogram for the PARC logo.
 * Swap for the official mark when supplied.
 */
export function ParcMark({ className, tone = "dark" }: Props) {
  const bg = tone === "dark" ? "var(--primary)" : "#ffffff";
  const fg = tone === "dark" ? "#ffffff" : "var(--primary)";
  const ring = tone === "dark" ? "var(--gold)" : "var(--gold)";
  return (
    <span
      className={className}
      aria-hidden="true"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        background: bg,
        color: fg,
        boxShadow: `inset 0 0 0 1px ${ring}`,
        fontFamily: "var(--font-serif)",
        fontWeight: 700,
        fontSize: "0.95em",
        letterSpacing: "-0.04em",
      }}
    >
      P
    </span>
  );
}