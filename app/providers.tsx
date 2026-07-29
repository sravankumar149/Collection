"use client";

import type { ReactNode } from "react";
import { App as AntdApp, ConfigProvider } from "antd";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#be5b2e",
          colorInfo: "#0f766e",
          colorSuccess: "#15803d",
          colorWarning: "#d97706",
          colorError: "#b91c1c",
          borderRadius: 8,
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        },
        components: {
          Button: {
            borderRadius: 8,
            controlHeight: 42,
            fontWeight: 700,
          },
          Card: {
            borderRadiusLG: 8,
          },
          Table: {
            headerBg: "#fff3df",
            headerColor: "#241a16",
            rowHoverBg: "#fff7ec",
          },
        },
      }}
    >
      <AntdApp>{children}</AntdApp>
    </ConfigProvider>
  );
}
