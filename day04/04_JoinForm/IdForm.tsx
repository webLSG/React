import { ChangeEvent, useState } from "react";
import { joinValid } from "./JoinForm";

const IdForm = () => {
  const [isValid, setIsValid] = useState(false);

  const handle = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIsValid((v) => value.split("").some((v) => v === "@"));
    joinValid.id = isValid;
  };
        
  return (
    <div className="pb-3">
      <div className="mb-1">아이디</div>
      <input className="border" onChange={handle} type="text" />
      <span className="pl-3">{isValid ? "가능" : "불가능"}</span>
    </div>
  );
};

export default IdForm;
