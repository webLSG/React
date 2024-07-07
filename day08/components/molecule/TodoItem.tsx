import { useState } from "react";
import { alarm } from "../../utils/util";
import RoundCheckBox from "../atom/RoundCheckBox";
import TrashIcon from "../atom/TrashIcon";
import Label from "../atom/Label";

export type TodoItemProps = {
  id: number;
  contents?: string;
  onDelete?: () => void;
};

const TodoItem = ({ id, contents, onDelete = alarm }: TodoItemProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleClick = () => setIsChecked((prev) => !prev);
  const obj = {
    RoundCheckBox: {
      isChecked,
      handleClick,
    },
    Label: {
      isChecked,
      contents,
    },
    TrashIcon: {
      onDelete,
    },
  };

  return (
    <div className="w-full flex gap-3 justify-between items-center text-2xl">
      <div className="flex gap-3 justify-center items-center">
        <RoundCheckBox {...obj.RoundCheckBox} />
        <Label {...obj.Label} />
      </div>
      {isChecked && <TrashIcon {...obj.TrashIcon} />}
    </div>
  );
};

export default TodoItem;
