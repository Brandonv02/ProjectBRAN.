import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Monograma "B." de BRAN. sobre negro profundo (manual pág. 07). */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 32 32" fill="none">
          <path
            d="M9 5h8a5.5 5.5 0 0 1 0 11H9m0 0h9.5a5.5 5.5 0 0 1 0 11H9M9 5v22"
            stroke="#F4F5F5"
            strokeWidth="3.6"
            strokeLinejoin="round"
          />
          <circle cx="26.4" cy="25.4" r="2.6" fill="#FF5F1A" />
        </svg>
      </div>
    ),
    size,
  );
}
