import { CSSProperties } from "react";
import StatusIcon from "./StatusIcon";
import MessageText, { MessageTextProps } from "./MessageText";
import ActionButton from "./ActionButton";
import { StatusIconProps } from "./style_status";

type SnackbarProps = {
  statusIcon: StatusIconProps;
  messageText: MessageTextProps;
};

const Snackbar = ({ statusIcon, messageText }: SnackbarProps) => {
  const style: CSSProperties = {
    width: "240px",
    backgroundColor: "black",
    padding: "12px",
    borderRadius: "16px",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0",
  };

  return (
    <div style={style}>
      <div style={{ display: "flex", gap: "10px" }}>
        <StatusIcon {...statusIcon} />
        <MessageText {...messageText} />
      </div>
      <ActionButton />
    </div>
  );
};
export default Snackbar;
