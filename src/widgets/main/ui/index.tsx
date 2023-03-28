import { ReactNode } from "react";

interface IMainBlock {
  children: ReactNode;
}
export const MainBlock = ({ children }: IMainBlock) => {
  return (
    <main className="flex-1 flex flex-col gap-6 overflow-hidden xl:order-first">
      {children}
    </main>
  );
};
