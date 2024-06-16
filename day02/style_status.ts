import { IconType } from "react-icons";

export type Status = {
  info: "#27437c";
  check: "#284d30";
  warning: "#7a2a32";
};
export type StatusIconProps = {
  color: keyof Status;
  Icon: IconType;
};
export const statusObj: Status = {
  info: "#27437c",
  check: "#284d30",
  warning: "#7a2a32",
};
