import { SideBarComponent } from "../_components/sidebar";

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" pt-10 max-w-screen-2xl px-4 mx-auto">
      <div className="flex gap-x-7 ">
        <div className="w-64 shrink-0 hidden md:block">
          <SideBarComponent />
        </div>
        {children}
      </div>
    </div>
  );
};

export default OrganizationLayout;
