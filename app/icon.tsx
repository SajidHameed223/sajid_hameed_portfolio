import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ea580c", // orange-600
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          color: "white",
          fontSize: 18,
          fontWeight: 700,
          fontFamily: "monospace",
        }}
      >
        {"</>"}
      </div>
    ),
    {
      ...size,
    }
  );
}