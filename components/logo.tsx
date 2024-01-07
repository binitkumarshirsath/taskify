import Image from "next/image";
import Link from "next/link";
import localfont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont = localfont({
  src: "../public/fonts/font.woff2",
});

export function LogoComponent() {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden h-full md:flex">
        <Image src="/logo.svg" alt="Logo" height={30} width={30} />
        <p
          className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}
        >
          Taskify
        </p>
      </div>
    </Link>
  );
}
