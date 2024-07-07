import { IoTrashOutline } from "react-icons/io5";
import { alarm } from "../../utils/util";

type TrashIconProps = { onDelete?: () => void };

const TrashIcon = ({ onDelete = alarm }: TrashIconProps) => (
  <IoTrashOutline className="cursor-pointer" onClick={onDelete} />
);

export default TrashIcon;
