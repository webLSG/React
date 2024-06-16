import Snackbar from "./Snackbar";
import { FaApple, FaCheckCircle, FaFacebook } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { RiErrorWarningFill } from "react-icons/ri";
import MessageText from "./MessageText";
import SocialLogin from "./SocialLogin/SocialLogin";
import SnsIcon from "./SocialLogin/SnsIcon";
import SNSText from "./SocialLogin/SNSText";
import SNSLogin from "./SocialLogin/SNSLogin";
import { FcGoogle } from "react-icons/fc";

function App() {
  return (
    <div className="App">
      {/* <Snackbar statusIcon={{ color: "info", Icon: FaCircleInfo }} messageText={{ message: "Message" }} /> */}

      <SNSLogin
        backgroundColor="#1877f2"
        snsText={{ sns: "Facebook" }}
        snsIcon={{ Icon: FaFacebook }}
      />
      <SNSLogin
        backgroundColor="white"
        snsText={{ sns: "Google" }}
        snsIcon={{ Icon: FcGoogle }}
      />
      <SNSLogin
        backgroundColor="black"
        snsText={{ sns: "Apple" }}
        snsIcon={{ Icon: FaApple }}
      />

      <SocialLogin bgColor="facebook" fontColor="white" socials="facebook" />
      <SocialLogin bgColor="google" fontColor="black" socials="google" />
      <SocialLogin bgColor="apple" fontColor="white" socials="apple" />
    </div>
  );
}
export default App;
