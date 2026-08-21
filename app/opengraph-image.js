import { ImageResponse } from "next/og";

export const alt =
  "MobiCheque — verify every cheque before you clear it";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Required under output: "export" -- generate the card once at build time
// rather than per request.
export const dynamic = "force-static";

/**
 * Generated at build time so shared links preview properly. Kept in plain
 * inline styles because next/og supports only a subset of CSS.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "#00a86b",
            }}
          />
          <span
            style={{
              fontSize: "30px",
              fontWeight: 600,
              color: "#0a1f17",
              letterSpacing: "-0.01em",
            }}
          >
            MobiCheque
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: "68px",
              fontWeight: 600,
              color: "#0a1f17",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Verify every cheque
          </span>
          <span
            style={{
              fontSize: "68px",
              fontWeight: 600,
              color: "#00a86b",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            before you clear it.
          </span>
          <span
            style={{
              marginTop: "28px",
              fontSize: "27px",
              color: "#5b6b66",
              lineHeight: 1.4,
              maxWidth: "860px",
            }}
          >
            Scan, extract, check and track cheques — with a full audit trail
            behind every decision.
          </span>
        </div>

        {/* Footer chips */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["Banks", "SACCOs", "Businesses"].map((label) => (
            <span
              key={label}
              style={{
                fontSize: "21px",
                fontWeight: 600,
                color: "#05543a",
                background: "#e8f7f0",
                padding: "10px 22px",
                borderRadius: "999px",
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    ),
    size
  );
}
