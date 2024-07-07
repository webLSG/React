import { IoIosMenu } from "react-icons/io";
import { alarm } from "../../utils/util";

type MenuBarProps = {
  onClick?: () => void;
};

const MenuBar = ({ onClick = alarm }: MenuBarProps) => {
  return <IoIosMenu onClick={onClick} />;
};

export default MenuBar;
