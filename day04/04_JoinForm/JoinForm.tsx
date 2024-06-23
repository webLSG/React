import { useState } from "react";
import IdForm from "./IdForm";
import PwForm from "./PwForm";

export const [joinValid, setJoinValid] = useState({
  id: false,
  pw: false,
  pwch: false,
});

const JoinForm = () => {
  return (
    <div>
      <IdForm />
      <PwForm />
    </div>
  );
};

export default JoinForm;
