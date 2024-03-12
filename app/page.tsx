import type { Metadata } from "next";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"],weight: '500', });
import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  title: "Home",
  description: "see all our latest blogs from our professional writers",
};
export default function Home() {
  return (
    <main className="">
      <div className="">Home</div>
      
    </main>
  );
}
