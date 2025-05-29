import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charlotte Chalder - Luxury Wedding Planner in London | CC Wedding Planning",
  description: "Charlotte Chalder is a luxury wedding planner based in London, specializing in elegant and sophisticated weddings across the UK and Europe. From intimate celebrations to grand destination weddings, we create unforgettable moments.",
  keywords: "wedding planner London, luxury wedding planner, destination wedding planner, UK wedding planner, Charlotte Chalder, CC wedding planning",
  authors: [{ name: "Charlotte Chalder" }],
  creator: "Charlotte Chalder",
  publisher: "CC Wedding Planning",
  openGraph: {
    title: "Charlotte Chalder - Luxury Wedding Planner in London",
    description: "Creating elegant and sophisticated weddings across the UK and Europe. Expert wedding planning services from consultation to coordination.",
    url: "https://charlottechalder.com",
    siteName: "Charlotte Chalder Wedding Planning",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Charlotte Chalder Wedding Planning",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charlotte Chalder - Luxury Wedding Planner in London",
    description: "Creating elegant and sophisticated weddings across the UK and Europe.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
