import { alarm } from "../../utils/util";

export type RoundCheckBoxProps = {
  isChecked?: boolean;
  handleChecked?: () => void;
};

const RoundCheckBox = ({
  isChecked = false,
  handleChecked = alarm,
}: RoundCheckBoxProps) => {
  return (
    <input
      className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 rounded-full"
      type="checkbox"
      checked={isChecked}
      onChange={handleChecked}
    />
  );
};

export default RoundCheckBox;
