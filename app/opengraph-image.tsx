import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { metadataCopy } from "@/content/site";

export const alt = metadataCopy.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

const headlineLines = [
  "She remembers.",
  "She protects.",
  "She's yours.",
] as const;

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
          background: "#171310",
          color: "#F1EAE1",
          paddingTop: 64,
          paddingRight: 72,
          paddingBottom: 96,
          paddingLeft: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -80,
              top: 40,
              width: 440,
              height: 440,
              borderRadius: 999,
              background:
                "radial-gradient(circle at 32% 28%, #E8B36A 0%, #B5582F 55%, #B5582F 100%)",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: 700,
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 999,
                  marginRight: 16,
                  background:
                    "radial-gradient(circle at 32% 28%, #E8B36A 0%, #B5582F 58%, #B5582F 100%)",
                }}
              />
              <div
                style={{
                  fontSize: 34,
                  fontFamily: "Newsreader",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                Maia
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 40,
              }}
            >
              {headlineLines.map((line) => (
                <div
                  key={line}
                  style={{
                    fontSize: 58,
                    lineHeight: 1.18,
                    fontFamily: "Newsreader",
                    fontWeight: 300,
                    letterSpacing: "-0.025em",
                    marginBottom: 4,
                  }}
                >
                  {line}
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 28,
                fontSize: 26,
                lineHeight: 1.35,
                color: "#A69A8C",
              }}
            >
              A private AI companion that lives on your phone.
            </div>
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
