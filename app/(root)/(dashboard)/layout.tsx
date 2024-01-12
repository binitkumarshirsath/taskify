import { DashBoardNavbarComponent } from "./_components/dashboard-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full w-full">
      <DashBoardNavbarComponent />
      {children}
    </div>
  );
}
