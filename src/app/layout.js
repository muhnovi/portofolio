import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const spaceGrotesk = localFont({
  src: [
    { path: "./fonts/SpaceGrotesk-Light.ttf", weight: "300" },
    { path: "./fonts/SpaceGrotesk-Regular.ttf", weight: "400" },
    { path: "./fonts/SpaceGrotesk-Medium.ttf", weight: "500" },
    { path: "./fonts/SpaceGrotesk-SemiBold.ttf", weight: "600" },
    { path: "./fonts/SpaceGrotesk-Bold.ttf", weight: "700" },
  ],
  variable: "--font-space-grotesk",
});

const spaceMono = localFont({
  src: [
    { path: "./fonts/SpaceMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/SpaceMono-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/SpaceMono-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/SpaceMono-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-space-mono",
});

export const metadata = {
  title: "Muhammad Noviyanto",
  description: "Personal Portofolio",
  keywords: "Muhammad Noviyanto, Noviyanto, Muhnov, MuhFi, Portofolio, Developer, Programmer, Web Developer, Frontend Developer, Backend Developer, Fullstack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NRW7S7P0BG"></script>
      </head>
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
