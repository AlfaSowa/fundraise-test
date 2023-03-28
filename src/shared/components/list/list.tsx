import { ReactNode } from "react";

interface IList {
  children: ReactNode;
}

export const List = ({ children }: IList) => {
  return <ul className="rounded-lg overflow-hidden">{children}</ul>;
};
