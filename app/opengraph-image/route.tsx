import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";

/**
 * Imagen de Open Graph.
 * Se dibuja con formas y peso tipográfico en vez de con la tipografía de
 * marca: incrustar Sora/Anta aquí obligaría a una descarga externa en cada
 * render. La marca se sostiene con la firma BRAN., el aro y el naranja.
 */
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0A0A0A",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* El aro: el punto de BRAN. crecido, saliendo del borde */}
        <div
          style={{
            position: "absolute",
            top: -190,
            right: -190,
            width: 560,
            height: 560,
            borderRadius: 999,
            border: "70px solid #FF5F1A",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
          <div
            style={{
              fontSize: 58,
              fontWeight: 700,
              letterSpacing: 4,
              color: "#F4F5F5",
              lineHeight: 1,
              display: "flex",
            }}
          >
            BRAN
          </div>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#FF5F1A",
              marginBottom: 4,
              display: "flex",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: -3,
              color: "#F4F5F5",
              maxWidth: 940,
              display: "flex",
            }}
          >
            Tecnología a la medida, sin peros.
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.45,
              color: "#B9BBBF",
              maxWidth: 820,
              display: "flex",
            }}
          >
            Convierto los procesos manuales de tu negocio en una herramienta
            digital clara, segura y fácil de usar.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            paddingTop: 28,
            borderTop: "1px solid #2A2D31",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#FF5F1A",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 24,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#8C9096",
              display: "flex",
            }}
          >
            {site.descriptor}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
