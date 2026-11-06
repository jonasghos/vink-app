import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vink — Tu marketing, con un plan",
  description: "Vink conoce tu negocio, te ayuda a definir qué comunicar y transforma esas ideas en contenido para tus redes. Vos revisás, ajustás y aprobás.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth antialiased h-full`}
    >
      <body className="min-h-full flex flex-col font-inter bg-vink-fondo text-vink-noche">
        {children}
      </body>
    </html>
  );
}