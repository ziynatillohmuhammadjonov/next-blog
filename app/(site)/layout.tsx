import Navbar from "@/components/navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanity Next.js Portfolio Site",
  icons:'blog.svg',
  description: "Shaxsiy porfolio websayt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}