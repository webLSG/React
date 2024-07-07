import { alarm } from "../../utils/util";

type AddButtonProps = { handleClick?: () => void };

const AddButton = ({ handleClick = alarm }: AddButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="w-fit h-fit px-8 py-5 rounded-full bg-violet-600 text-white"
    >
      + New task
    </button>
  );
};

export default AddButton;
