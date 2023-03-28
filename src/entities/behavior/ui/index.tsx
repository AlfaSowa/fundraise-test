import {
  Checkbox,
  Input,
  Radio,
  Range,
  Select,
} from "../../../shared/components/form";
import { List, ListItem } from "../../../shared/components/list";

export const Behavior = () => {
  return (
    <form>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-[140px] text-right">Designation</div>
        <div className="w-full max-w-[296px]">
          <Select defaultValue="Match Checkout Setting">
            <div>Match Checkout Setting 1</div>
            <div>Match Checkout Setting 2</div>
            <div>Match Checkout Setting 3</div>
          </Select>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="w-[140px] text-right">Goal</div>

        <div className="flex-[0_1_296px] flex gap-6">
          <div className="flex-[0_1_192px]">
            <Input />
          </div>
          <div className="flex-[0_1_80px]">
            <Select defaultValue="USD">
              <div>USD</div>
              <div>RUB</div>
              <div>TNG</div>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex items-baseline gap-4 mb-4">
        <div className="w-[140px] text-right">Default Amount</div>

        <div className="flex-col gap-6">
          <div className="grid gap-4 mb-6">
            <Radio
              name="amount"
              title="Match Checkout Setting"
              defaultChecked
            />
            <Radio name="amount" title="Customize" />
          </div>

          <Checkbox
            name="donor"
            title="Allow donor to change default currency"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="w-[140px] text-right">Border size</div>
        <div className="w-[218px]">
          <Range />
        </div>
        <div>2px</div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="w-[140px] text-right">Border radius</div>
        <div className="w-[218px]">
          <Range />
        </div>
        <div>15px</div>
      </div>
    </form>
  );
};
