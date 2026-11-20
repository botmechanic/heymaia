import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const dynamic = "force-static";

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
          background: "#171310",
        }}
      >
        <div
          style={{
            width: 118,
            height: 118,
            borderRadius: 999,
            background:
              "radial-gradient(circle at 32% 28%, #E8B36A 0%, #B5582F 58%, #B5582F 100%)",
            boxShadow: "0 0 40px rgba(232, 179, 106, 0.4)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
