import { CSSProperties } from "react";
import { FaFacebook } from "react-icons/fa6"; // <FaFacebook />
import { FcGoogle } from "react-icons/fc"; // <FcGoogle />
import { FaApple } from "react-icons/fa"; // <FaApple />

type bgColors = {
  facebook: "#0866ff";
  google: "white";
  apple: "black";
};
type propsType = {
  fontColor: "white" | "black";
  bgColor: keyof bgColors;
  socials: "facebook" | "google" | "apple";
};

const SocialLogin = ({ fontColor, bgColor, socials }: propsType) => {
  const bgColorObj = {
    facebook: "#0866ff",
    google: "white",
    apple: "black",
  };

  const style: CSSProperties = {
    fontWeight: "bold",
    width: "fit-content",
    color: fontColor,
    backgroundColor: bgColorObj[bgColor],
    borderRadius: "10px",
    padding: "10px 20px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  };

  return (
    <div style={style}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaFacebook />
      </div>
      <div>Continue with {socials}</div>
    </div>
  );
};
export default SocialLogin;
