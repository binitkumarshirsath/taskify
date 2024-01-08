import { ClerkProvider } from "@clerk/nextjs";
const rootLayout = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default rootLayout;
