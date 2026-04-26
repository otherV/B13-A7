import { Geist } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen Keeper",
  description: "a very simple next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="bg-[#F8FAFC] min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 container mx-auto max-w-7/10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
