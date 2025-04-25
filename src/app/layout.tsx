import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { PageTransition } from "@/components/ui/PageTransition";
import { StarryBackground } from "@/components/ui/StarryBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Your Name - Developer Portfolio",
  description: "Full-stack developer portfolio showcasing projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark bg-background antialiased",
        inter.variable
      )}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "min-h-screen bg-background font-sans relative overflow-x-hidden",
          "selection:bg-primary/20 selection:text-foreground",
          "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-muted hover:scrollbar-thumb-muted/80"
        )}
      >
        <StarryBackground />
        <main className="relative isolate">
          <div className="relative z-10">
            <PageTransition>
              {children}
            </PageTransition>
          </div>
        </main>
      </body>
    </html>
  );
}
