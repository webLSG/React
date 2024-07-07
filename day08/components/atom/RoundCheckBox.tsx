import { alarm } from "../../utils/util";

type RoundCheckBoxProps = {
  isChecked?: boolean;
  handleClick?: () => void;
};

const RoundCheckBox = ({
  isChecked = true,
  handleClick = alarm,
}: RoundCheckBoxProps) => {
  return (
    <input
      type="checkbox"
      checked={isChecked}
      onClick={handleClick}
      className="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 rounded-full"
    />
  );
};

export default RoundCheckBox;
