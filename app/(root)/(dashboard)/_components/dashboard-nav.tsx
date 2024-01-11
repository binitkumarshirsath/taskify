import { LogoComponent } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { MobileSideBarComponent } from "./mobile-sidebar";

export const DashBoardNavbarComponent = () => {
  return (
    <nav className=" w-full px-4 z-[100] items-center flex top-0 h-14 border-b  shadow-md">
      <MobileSideBarComponent />
      <div className="flex items-center gap-x-4">
        <div className="hidden md:block">
          <LogoComponent />
        </div>
        <Button
          variant={"primary"}
          size={"sm"}
          className="rounded-sm px-2 py-1.5 h-auto "
        >
          <span className="hidden md:block">Create</span>
          <span className="md:hidden max-md:block">
            <Plus className="h-4 w-4" />
          </span>
        </Button>
      </div>
      <div className="ml-auto flex items-center gap-x-2 h-auto">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={"/organization/:id"}
          afterSelectOrganizationUrl={"/organization/:id"}
          afterLeaveOrganizationUrl="/select-org"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            },
          }}
        />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};
