import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const poppins = Poppins({ subsets: ["latin"],weight: '500', });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primarycolor max-w-screen-xl transition-all mx-auto">
        <Navbar></Navbar>
        {children}</body>
    </html>
  );
}
