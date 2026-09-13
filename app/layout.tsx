import type { Metadata } from "next";
import { Quicksand, Caveat, Gaegu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Petals from "@/components/Petals";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
});

const gaegu = Gaegu({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-gaegu",
});

export const metadata: Metadata = {
  title: "Shreya Soni ♡ | Portfolio & Creative Corner",
  description:
    "Shreya Soni — B.Tech Computer Science student and AI & Data Science enthusiast. Portfolio featuring projects, experience, skills and certifications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${quicksand.variable} ${caveat.variable} ${gaegu.variable}`}>
      <body
        className="font-quicksand text-charcoalPlum bg-cozy-pattern antialiased selection:bg-softPink selection:text-deepRose min-h-screen relative overflow-x-hidden"
        data-theme="sakura"
        suppressHydrationWarning
      >
        <script
          // Avoids a flash of the wrong theme for a returning Shadow Realm visitor.
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('portfolioTheme');if(t==='shadow'){document.body.setAttribute('data-theme','shadow');}}catch(e){}",
          }}
        />
        <Petals />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
