import { useState } from "react";
import { CheckboxCheckedIcon } from "../../../assets/checkboxCheckedIcon";
import { CheckboxUncheckedIcon } from "../../../assets/checkboxUncheckedIcon";

interface ICheckbox {
  onChange?: (e: React.SyntheticEvent) => void;
  checked?: boolean;
  name: string;
  title: string;
}

export const Checkbox = ({
  onChange,
  checked = false,
  name,
  title,
}: ICheckbox) => {
  const [isChecked, setChecked] = useState(checked);

  return (
    <label className="flex items-center gap-3">
      {isChecked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}

      <input
        className="opacity-0 absolute t-0 left-0"
        data-name={name}
        type="checkbox"
        onChange={() => setChecked((prev) => !prev)}
        checked={isChecked}
      />
      <span>{title}</span>
    </label>
  );
};

Checkbox.defaultProps = {
  onChange: null,
};
