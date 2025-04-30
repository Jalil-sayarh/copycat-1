import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Luca – Portfolio Template",
  description:
    "Luca provides the perfect canvas to display your portfolio in a timeless manner. With its clean and modern aesthetic, Luca is a versatile choice that can adapt to your individual use case and preferences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
