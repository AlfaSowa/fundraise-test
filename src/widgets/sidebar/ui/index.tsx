import { ReactNode } from "react";

interface ISidebar {
  children: ReactNode;
}
export const Sidebar = ({ children }: ISidebar) => {
  return (
    <div className="xl:flex-[0_0_264px] ">
      <div className="sticky top-0">{children}</div>
    </div>
  );
};
