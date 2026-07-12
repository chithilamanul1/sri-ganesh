import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter } from "../src/components/SiteChrome";

export const metadata: Metadata = {
  title: "Sri Ganesh Exports",
  description: "Premium Sri Lankan marine products for international wholesale markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
