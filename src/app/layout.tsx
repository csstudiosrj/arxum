import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({ variable: "--font-syne", subsets: ["latin"], weight: ["600", "700", "800"] });
const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });

const title = "ARXUM — Software para gestão, eventos, cultura e educação";
const description =
  "Ecossistema de produtos ARXUM: Fest, Crew, Normato, Poseidon, Edu, Descomplicaí, Studio, Zelo e Suite. Ferramentas especialistas, feitas para a realidade brasileira.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arxum.com.br"),
  title: { default: title, template: "%s | ARXUM" },
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_BR", siteName: "ARXUM", url: "/", title, description },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#05070a" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
