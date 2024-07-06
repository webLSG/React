import { alarm } from "../../utils/util";

type AddButtonProps = {
  handleClick?: () => void;
};

const AddButton = ({ handleClick = alarm }: AddButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="py-3 px-8 text-white font-bold text-lg bg-purple-500 rounded-full"
    >
      + New Task
    </button>
  );
};

export default AddButton;
