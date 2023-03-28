import { ReactNode } from "react";

enum VARIANT {
  PRIMAL = "primal",
  SECONDARY = "secondary",
}

export interface IButton {
  onClick: () => void;
  size?: "small" | "normal" | "big";
  children: ReactNode;
  variant?: "primal" | "secondary";
}

export const Button = ({
  children,
  onClick,
  size,
  variant = VARIANT.PRIMAL,
}: IButton) => {
  return (
    <button
      className={`${
        variant === VARIANT.PRIMAL
          ? "bg-[var(--color-green-second)] text-[#ffffff]"
          : "bg-[#FFFFFF]"
      } ${
        variant === VARIANT.SECONDARY && "border border-[#A9ABAE]"
      } h-12 px-6 rounded-md`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "normal",
};
