import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "antd/dist/reset.css";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Softwarebois | Rampuram Ganesh Chaturthi",
  description:
    "Softwarebois is a youth group from Rampuram village celebrating Ganesh Chaturthi with idols, immersion, lucky draws, donations, and community memories.",
  openGraph: {
    title: "Softwarebois | Rampuram Ganesh Chaturthi",
    description:
      "A responsive community site for Softwarebois and the Rampuram Ganesh Chaturthi celebrations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <Providers>{children}</Providers>
        </AntdRegistry>
      </body>
    </html>
  );
}
