"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SideBarComponent } from "./sidebar";
import { useMobileSidebarStore } from "@/hooks/use-mobile-sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogoComponent } from "@/components/logo";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const MobileSideBarComponent = () => {
  const { isOpen, onClose, onOpen } = useMobileSidebarStore();
  const [isMounted, setIsMounted] = useState(false);
  const pathName = usePathname();
  // read perils of hydration
  //https://www.joshwcomeau.com/react/the-perils-of-rehydration/#server-side-rendering-onezeroone-2
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathName, onClose]);

  // TLDR : making sure component is rendered at server side

  if (!isMounted) {
    return null;
  }

  return (
    <div className="md:hidden z-[999] bg-white">
      <Button
        onClick={onOpen}
        className={cn("block md:hidden mr-2", isOpen && "hidden")}
        variant="ghost"
        size="sm"
      >
        <Menu className="h-4 w-4" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        {isOpen && (
          <SheetHeader>
            <SheetTitle className="flex mt-4 items-center justify-center">
              <LogoComponent hidden={false} />
            </SheetTitle>
          </SheetHeader>
        )}
        <SheetContent side={"left"} className=" p-2 pt-20">
          <SideBarComponent storageKey="t-mobsidebar" />
        </SheetContent>
      </Sheet>
    </div>
  );
};
