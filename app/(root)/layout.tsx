import { ClerkProvider } from "@clerk/nextjs";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default RootLayout;
