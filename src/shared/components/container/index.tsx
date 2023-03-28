import { ReactNode } from "react";

interface IContainer {
  children: ReactNode;
}
export const Container = ({ children }: IContainer) => {
  return <div className="flex flex-col gap-6 xl:flex-row">{children}</div>;
};
