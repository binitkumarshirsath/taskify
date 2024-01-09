import { OrganizationControlComponent } from "../../_components/organization-control";

export default function OrganizationIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <OrganizationControlComponent />
      {children}
    </div>
  );
}
