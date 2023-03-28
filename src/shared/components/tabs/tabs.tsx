import { ReactElement } from "react";

interface ITabs {
  children: ReactElement[];
  onChange?: (event: React.SyntheticEvent, newValue: number) => void;
  value: number;
}

export const Tabs = ({ children, onChange, value }: ITabs) => {
  return (
    <div className="flex overflow-x-auto cursor-pointer text-xs font-semibold uppercase pt-8 px-6">
      {children.map((i) => ({
        ...i,
        props: {
          ...i.props,
          onChange,
          valueFocused: value,
        },
      }))}
    </div>
  );
};
