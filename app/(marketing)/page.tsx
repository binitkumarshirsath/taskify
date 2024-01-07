import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingText = localFont({
  src: "../../public/fonts/font.woff2",
});

// body text
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function MarketingPage() {
  return (
    <div className="flex h-full justify-center items-center flex-col">
      <div
        className={cn(
          "w-full flex flex-col justify-center items-center",
          headingText.className
        )}
      >
        <div className="flex uppercase mb-4 border-amber-100 font-bold shadow-sm border px-4 py-4 rounded-full bg-amber-100 text-amber-700">
          <Medal className="h-6 w-6 mr-3" />
          No 1 Task management
        </div>
        <div className="text-5xl font-extrabold mb-5">
          Taskify helps teams move
        </div>
        <div className="rounded-sm px-3 py-2 text-4xl font-bold text-slate-100 mb-4 pb-4 bg-gradient-to-tr from-fuchsia-600 to-pink-600">
          work forward.
        </div>
      </div>
      <div
        className={cn(
          "text-center text-slate-400 max-w-xl text-xl",
          poppins.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with Taskify.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get Taskify for free</Link>
      </Button>
    </div>
  );
}
