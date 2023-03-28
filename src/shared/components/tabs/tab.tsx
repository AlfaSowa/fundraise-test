import { ReactNode } from "react";

interface ITab {
  value: number;
  children: ReactNode;
  onChange?: (event: React.SyntheticEvent, newValue: number) => void;
  valueFocused?: any;
}

export const Tab = ({ value, children, onChange, valueFocused }: ITab) => {
  return (
    <div
      className={`py-3.5 px-4 bg-white border rounded-t-md border-white whitespace-nowrap  ${
        valueFocused === value
          ? "border-x-[var(--color-border)] border-t-[var(--color-border)] text-[var(--color-green)]"
          : "border-b-[var(--color-border)]"
      }`}
      onClick={(e) => {
        if (onChange) {
          onChange(e, value);
        }
      }}
    >
      {children}
    </div>
  );
};
