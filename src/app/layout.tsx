import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { Header, Footer } from "@/components/navigation";
import "@copilotkit/react-ui/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mortgage Calculator Quest",
  description: "AI-powered mortgage calculator for UK homebuyers",
  keywords: "mortgage calculator, UK mortgage, stamp duty calculator, mortgage rates, first time buyer",
  openGraph: {
    title: "Mortgage Calculator Quest",
    description: "AI-powered mortgage calculator for UK homebuyers. Calculate payments, stamp duty, affordability and more.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        {/* Favicon - Q for Quest branding */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Mortgage Calculator Quest" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Providers>
          <Header />
          <main className="pt-16 flex-grow">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
