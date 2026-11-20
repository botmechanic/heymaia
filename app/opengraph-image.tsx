import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { hero, metadataCopy } from "@/content/site";

export const alt = metadataCopy.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default async function Image() {
  const fontData = await readFile(
    join(process.cwd(), "fonts/Newsreader-Light.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#171310",
          color: "#F1EAE1",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 999,
              background:
                "radial-gradient(circle at 32% 28%, #E8B36A 0%, #B5582F 58%, #B5582F 100%)",
            }}
          />
          <div
            style={{
              fontSize: 36,
              fontFamily: "Newsreader",
              fontWeight: 300,
              letterSpacing: "-0.02em",
            }}
          >
            Maia
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: 920,
          }}
        >
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.08,
              fontFamily: "Newsreader",
              letterSpacing: "-0.025em",
              fontWeight: 300,
            }}
          >
            {hero.headline}
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.35,
              color: "#A69A8C",
              maxWidth: 780,
            }}
          >
            A private AI companion that lives on your phone.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Newsreader",
          data: fontData,
          style: "normal",
          weight: 300,
        },
      ],
    },
  );
}
