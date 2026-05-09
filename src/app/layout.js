import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// OPTIMASI: Hanya load weight yang dipakai, tambahkan display: swap
const spaceGrotesk = localFont({
  src: [
    // HANYA LOAD WEIGHT YANG DIGUNAKAN!
    { path: "./fonts/SpaceGrotesk-Regular.ttf", weight: "400" },
    { path: "./fonts/SpaceGrotesk-Medium.ttf", weight: "500" },
    { path: "./fonts/SpaceGrotesk-SemiBold.ttf", weight: "600" },
    { path: "./fonts/SpaceGrotesk-Bold.ttf", weight: "700" },
  ],
  variable: "--font-space-grotesk",
  display: "swap", // PENTING: Menampilkan fallback font dulu
  preload: true,
  fallback: ["system-ui", "Arial"],
  adjustFontFallback: true,
});

const spaceMono = localFont({
  src: [
    { path: "./fonts/SpaceMono-Regular.ttf", weight: "400" },
    { path: "./fonts/SpaceMono-Bold.ttf", weight: "700" },
  ],
  variable: "--font-space-mono",
  display: "swap",
  preload: true,
  fallback: ["Courier New", "monospace"],
  adjustFontFallback: true,
});

export const metadata = {
  metadataBase: new URL("https://portfolio.muhfi.my.id"),
  title: {
    default: "Muhammad Noviyanto — Frontend Developer",
    template: "%s | Muhammad Noviyanto",
  },
  description:
    "Portfolio resmi Muhammad Noviyanto (Muhnov / MuhFi), Frontend Developer spesialis Next.js, Tailwind CSS, dan React.",
  keywords: [
    "Muhammad Noviyanto",
    "Muhnov",
    "MuhFi",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Noviyanto", url: "https://portfolio.muhfi.my.id" }],
  creator: "Muhammad Noviyanto",
  alternates: {
    canonical: "https://portfolio.muhfi.my.id",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://portfolio.muhfi.my.id",
    siteName: "Muhammad Noviyanto Portfolio",
    title: "Muhammad Noviyanto — Frontend Developer",
    description:
      "Portfolio resmi Muhammad Noviyanto (Muhnov / MuhFi), Frontend Developer spesialis Next.js, Tailwind CSS, dan React.",
    images: [
      {
        url: "/images/img.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Noviyanto - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Noviyanto — Frontend Developer",
    description:
      "Portfolio resmi Muhammad Noviyanto (Muhnov / MuhFi), Frontend Developer spesialis Next.js, Tailwind CSS, dan React.",
    creator: "@MuhammadNoviya6",
    images: ["/images/img.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* DNS Prefetch & Preconnect untuk resource kritis */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        
        {/* Favicon - ukuran kecil */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Noviyanto",
              alternateName: ["Muhnov", "MuhFi"],
              url: "https://portfolio.muhfi.my.id",
              jobTitle: "Frontend Developer",
              sameAs: [
                "https://github.com/muhnov",
                "https://x.com/MuhammadNoviya6",
                "https://www.instagram.com/muh.noviyanto/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Google Analytics - Load paling akhir */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NRW7S7P0BG"
          strategy="lazyOnload"
          defer
        />
        <Script id="google-analytics" strategy="lazyOnload" defer>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NRW7S7P0BG', {
              send_page_view: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>
      </body>
    </html>
  );
}