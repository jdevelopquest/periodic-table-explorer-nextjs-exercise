import type { Metadata } from "next";
import "./globals.css";
import Body from "@/lib/ui/body";
import { ThemeProvider } from "@/lib/ui/theme-provider";

export const metadata: Metadata = {
  title: "Periodic Table Explorer",
  description: "Explore the periodic table of elements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <Body>{children}</Body>
      </html>
    </ThemeProvider>
  );
}
