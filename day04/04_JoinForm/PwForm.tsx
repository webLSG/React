import { ChangeEvent, useState } from "react";
import { joinValid } from "./JoinForm";

const PwForm = () => {
  const [isValid, setIsValid] = useState(false);

  const handle = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIsValid((v) => {
      const lengthValid = value.length >= 8 && value.length <= 15;
      const specialCharValid = value.split("").some((v) => v === "*");
      return lengthValid && specialCharValid;
    });
    joinValid.pw = isValid;
  };

  return (
    <div className="pb-3">
      <div className="mb-1">비밀번호</div>
      <input className="border" onChange={handle} type="password" />
      <span className="pl-3">{isValid ? "가능" : "불가능"}</span>
    </div>
  );
};

export default PwForm;
