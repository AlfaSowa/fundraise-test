import { RadioUnchecked } from "../../../assets/radioUnchecked";
import { RadioChecked } from "../../../assets/radioChecked";

interface IRadio {
  name: string;
  title: string;
  defaultChecked?: boolean;
}

export const Radio = ({ name, title, defaultChecked = false }: IRadio) => {
  return (
    <label className="flex items-center gap-3 relative">
      <input
        className="peer/published opacity-0 absolute t-0 left-0"
        name={name}
        type="radio"
        defaultChecked={defaultChecked}
      />
      <span className="pl-9">{title}</span>

      <div className="absolute left-0 w-6 h-6 hidden peer-checked/published:block">
        <RadioChecked />
      </div>
      <div className="absolute left-0 w-6 h-6 block peer-checked/published:hidden">
        <RadioUnchecked />
      </div>
    </label>
  );
};
