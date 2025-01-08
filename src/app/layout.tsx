import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Cairo } from "next/font/google";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Airbnb Clone by Mostafa",
};
const font = Cairo({ subsets: ["latin"], weight: ["400", "700"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${font.className} overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <NextTopLoader color="#e11d48" />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
