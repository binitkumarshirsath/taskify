import { LogoComponent } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function NavbarComponent() {
  return (
    <nav className="h-14 px-4 border-b  shadow-md fixed top-0 bg-white w-full">
      <div className="flex justify-between md:max-w-screen-2xl mx-auto items-center h-full">
        <LogoComponent />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
