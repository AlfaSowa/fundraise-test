import { ReactNode } from "react";

interface IListItem {
  children: ReactNode;
  icon?: any;
}

export const ListItem = ({ children, icon }: IListItem) => {
  return (
    <li className="p-2 hover:bg-[#F3F3F3] cursor-pointer flex items-center border-b border-[var(--color-border)] last:border-b-0">
      {icon && <div className="mr-2">{icon}</div>}
      {children}
    </li>
  );
};
