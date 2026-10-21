import { ImageResponse } from "next/og";

export const alt = "ARXUM — Software para gestão, eventos, cultura e educação";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COLORS = ["#d4af37", "#E8A020", "#8b5cf6", "#22d3ee", "#0d9488", "#10B981", "#ef4444"];

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: "radial-gradient(circle at 15% 0%, rgba(13,148,136,.45), transparent 50%), radial-gradient(circle at 90% 10%, rgba(124,58,237,.45), transparent 50%), #05070a", color: "#fff", fontFamily: "sans-serif" }}>
        <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -2 }}>ARXUM</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -3, lineHeight: 1.05 }}>Software para quem faz acontecer.</div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,.6)", marginTop: 24 }}>Gestão, eventos, cultura e educação.</div>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {COLORS.map((c) => <div key={c} style={{ width: 56, height: 8, borderRadius: 8, background: c }} />)}
        </div>
      </div>
    ),
    size
  );
}
