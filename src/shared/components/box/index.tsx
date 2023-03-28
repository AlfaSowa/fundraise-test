import { ReactNode } from "react";

interface IBox {
  children: ReactNode;
}
//box-shadow: 1px 3px 3px rgba(62, 63, 64, 0.1);
export const Box = ({ children }: IBox) => {
  return (
    <div className="shadow-[1px_3px_3px_rgba(62,63,64,0.1)] bg-white border border-[var(--color-border)] rounded-lg overflow-hidden">
      {children}
    </div>
  );
};
