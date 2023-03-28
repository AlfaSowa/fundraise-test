import { ReactElement, useState } from "react";
import { ChevronIcon } from "../../../assets/chevronIcon";

export interface ISelect {
  children: ReactElement[];
  defaultValue?: string;
}

export const Select = ({ children, defaultValue }: ISelect) => {
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);

  const onClick = (elem: any) => {
    setValue(elem.props.children);
    setOpen((prev) => !prev);
  };

  const handleClickOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative rounded-lg border border-[var(--color-border)] h-10 w-full">
      <div
        className="flex items-center w-full h-full cursor-pointe pl-3 pr-5"
        onClick={handleClickOpen}
      >
        {value}
      </div>

      <div
        onClick={handleClickOpen}
        className="absolute -translate-y-1/2 top-1/2 right-1"
      >
        <ChevronIcon />
      </div>

      <input
        tabIndex={-1}
        className="opacity-0 absolute t-0 left-0 pointer-events-none"
        type="text"
      />

      {open && (
        <div className="z-50 absolute top-full bg-white">
          {children.map((i) => ({
            ...i,
            props: {
              ...i.props,
              onClick: () => onClick(i),
            },
          }))}
        </div>
      )}
    </div>
  );
};
