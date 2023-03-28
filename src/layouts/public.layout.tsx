import { ReactNode } from "react";

interface IPublicLayout {
  children: ReactNode;
}

const PublicLayout = ({ children }: IPublicLayout) => {
  return <div className="mx-auto max-w-7xl px-7 mt-[53px]">{children}</div>;
};

export default PublicLayout;
