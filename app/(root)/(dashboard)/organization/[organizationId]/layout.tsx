import { OrganizationControlComponent } from "../../_components/organization-control";

export default function OrganizationIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      <OrganizationControlComponent />
      {children}
    </div>
  );
}
