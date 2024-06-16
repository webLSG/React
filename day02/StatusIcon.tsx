import { CSSProperties } from "react";
import { Status, StatusIconProps, statusObj } from "./style_status";

const StatusIcon = ({ color, Icon }: StatusIconProps) => {
  const style: CSSProperties = {
    fontSize: "20px",
    color: statusObj[color],

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <span style={style}>
      <Icon />
    </span>
  );
};
export default StatusIcon;
