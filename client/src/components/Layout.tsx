import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-8 container mx-auto">{children}</main>
    </div>
  );
}

export default Layout;
