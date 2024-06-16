import { FaFacebook } from "react-icons/fa";
import SnsIcon, { SNSIconProps } from "./SnsIcon";
import SNSText, { SNSTextProps } from "./SNSText";
import { CSSProperties } from "react";

type SNSLoginProps = {
  backgroundColor: "#1877f2" | "white" | "black";
  snsIcon: SNSIconProps;
  snsText: SNSTextProps;
};

const SNSLogin = ({ backgroundColor, snsIcon, snsText }: SNSLoginProps) => {
  const style: CSSProperties = {
    padding: "15px",
    display: "flex",
    gap: "15px",
    backgroundColor,
  };

  return (
    <div style={style}>
      <SnsIcon {...snsIcon} />
      <SNSText {...snsText} />
    </div>
  );
};
export default SNSLogin;
