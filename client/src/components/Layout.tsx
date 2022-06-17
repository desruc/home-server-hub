import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <div className="px-4 pt-6">
        <main className="container mx-auto">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
