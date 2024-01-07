import { NavbarComponent } from "./_components/Navbar";
import { FooterComponent } from "./_components/footer";

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full bg-slate-100">
      {/* Navbar */}
      <NavbarComponent />
      <main className="md:pt-40 pt-32 pb-20 bg-slate-100">
        {children}
        {/* Footer */}
      </main>
      <FooterComponent />
    </div>
  );
}
