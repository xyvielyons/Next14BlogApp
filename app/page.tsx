import type { Metadata } from "next";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"],weight: '500', });
import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  title: "Register",
  description: "Become a blogger today by registering in our blogging app",
};
export default function Home() {
  return (
    <main className="">
      
    </main>
  );
}
