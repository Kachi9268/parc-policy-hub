type Props = {
  className?: string;
  tone?: "dark" | "light";
  alt?: string;
};

/**
 * Official PARC logo mark. Rendered on a white chip so the logo's
 * colours stay accurate on both light and dark backgrounds.
 */
export function ParcMark({ className, tone = "dark", alt = "PARC — Policy Analysis and Research Congress" }: Props) {
  const ringColor = tone === "light" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.06)";
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 9999,
        background: "#ffffff",
        boxShadow: `inset 0 0 0 1px ${ringColor}`,
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <img
        src="/images/parc-logo.jpg"
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "contain", padding: "6%" }}
        loading="eager"
        decoding="async"
      />
    </span>
  );
}