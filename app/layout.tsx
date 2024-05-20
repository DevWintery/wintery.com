import React from "react";

/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
import { Metadata, Viewport } from "next";
import { Providers } from "./Providers";
import ClientLayout from "./ClientLayout";

const APP_TITLE = "wintery";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="//cloud.typography.com/6794156/6837792/css/fonts.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
        />
      </head>
      <body>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  metadataBase: new URL("https://devwintery.github.io/wintery.com/"),
  title: {
    template: `%s | ${APP_TITLE}`,
    default: APP_TITLE,
  },
  description: "Kyeongmin Kim - Game Developer",
  keywords: [
    "Kyeongmin Kim",
    "wintery",
    "Game Devloper",
  ],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: "website",
    title: "wintery - Kyeongmin Kim",
    siteName: "wintery",
    description: "Kyeongmin Kim - Game Developer",
    url: "https://devwintery.github.io/wintery.com/",
    images: "https://img.freepik.com/premium-vector/snow-flower-logo_7267-11.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "white",
  width: "device-width",
  initialScale: 1,
};

export default RootLayout;
