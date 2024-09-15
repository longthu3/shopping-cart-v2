import { ReactNode } from "react";
import { Header } from "../Header";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="w-10/12 m-auto mb-10">{children}</div>
    </div>
  );
};
