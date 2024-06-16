import { IconType } from "react-icons";
import { FaFacebook } from "react-icons/fa6"; // <FaFacebook />
import { FcGoogle } from "react-icons/fc"; // <FcGoogle />
import { FaApple } from "react-icons/fa"; // <FaApple />

type IconTypeLimited = typeof FaFacebook | typeof FcGoogle | typeof FaApple;

export type SNSIconProps = {
  Icon: IconTypeLimited;
};

const SnsIcon = ({ Icon }: SNSIconProps) => {
  return (
    <span>
      <Icon />
    </span>
  );
};

export default SnsIcon;
