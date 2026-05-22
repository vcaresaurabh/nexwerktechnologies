import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a56db",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nexwerktechnologies.com"),
  title: "NexWerk Technologies — IT Services, CRM & Business Automation",
  description:
    "NexWerk Technologies delivers enterprise-grade web development, CRM systems, business automation, managed IT services, app development, and cloud security for growing businesses.",
  keywords: [
    "IT services India",
    "web development company",
    "CRM development",
    "business automation",
    "managed IT services",
    "app development",
    "cloud security",
    "NexWerk Technologies",
  ],
  authors: [{ name: "NexWerk Technologies" }],
  creator: "NexWerk Technologies",
  publisher: "NexWerk Technologies",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nexwerktechnologies.com",
    siteName: "NexWerk Technologies",
    title: "NexWerk Technologies — IT Services, CRM & Business Automation",
    description:
      "Empowering businesses with world-class IT solutions — web, CRM, automation, and managed IT. Built for long-term reliability.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexWerk Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexWerk Technologies — IT Services & Business Automation",
    description: "Scalable web, CRM, automation & managed IT for growing businesses.",
    creator: "@nexwerktech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
