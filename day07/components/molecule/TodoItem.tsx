import { useState } from "react";
import Label from "../atom/Label";
import RoundCheckBox from "../atom/RoundCheckBox";
import TrashIcon from "../atom/TrashIcon";

export type TodoItemProps = {
  contents: string;
  onDelete?: () => void;
};

const TodoItem = ({ contents, onDelete }: TodoItemProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleChecked = () => setIsChecked((prev) => !prev);
  const obj = {
    roundCheckBox: {
      isChecked,
      handleChecked,
    },
    label: {
      isChecked,
      contents,
    },
    trashIcon: {
      onDelete,
    },
  };

  return (
    <div className="flex items-center gap-2">
      <RoundCheckBox {...obj.roundCheckBox} />
      <Label {...obj.label} />
      {isChecked && <TrashIcon {...obj.trashIcon} />}
    </div>
  );
};

export default TodoItem;
