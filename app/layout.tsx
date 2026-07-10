import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinicius Silveira — Blockchain Developer",
  description:
    "Portfólio de Vinicius Silveira, desenvolvedor Blockchain e Web3. Smart contracts, DeFi e dApps.",
  openGraph: {
    title: "Vinicius Silveira — Blockchain Developer",
    description:
      "Portfólio de Vinicius Silveira, desenvolvedor Blockchain e Web3.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
