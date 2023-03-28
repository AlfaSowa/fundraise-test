import { ReactNode } from "react";

interface ITabsPanel {
  value: number;
  children: ReactNode;
  index: any;
}

export const TabsPanel = ({ children, index, value }: ITabsPanel) => {
  return value === index ? (
    <div className="border-t mt-[-1px] py-10 px-[60px]">{children}</div>
  ) : null;
};
