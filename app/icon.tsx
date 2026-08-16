import { ImageResponse } from "next/og";

const ASSET_BASE =
  "https://qctxfsjabmqnnkzsfcrx.supabase.co/storage/v1/object/public/Ganesh%20Images";
const logoUrl = `${ASSET_BASE}/QRCode/Logo.png`;

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "transparent",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <img
          alt=""
          src={logoUrl}
          style={{
            height: 78,
            objectFit: "contain",
            width: 78,
          }}
        />
      </div>
    ),
    size,
  );
}
