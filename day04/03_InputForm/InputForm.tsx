import { ChangeEvent, useState } from "react";

const InputForm = () => {
  const [inputLength, setInputLength] = useState(0);
  const [value, setValue] = useState("");
  const [maxLength, setMaxLength] = useState(15);

  const handle = (e: ChangeEvent<HTMLInputElement>) => {
    // setInputLength((v) => (inputLength < 15 ? e.target.value.length : 15));
    if (e.target.value.length <= maxLength) {
      setInputLength(() => e.target.value.length);
      setValue(() => e.target.value);
    }
  };
  const plusButton = () => {
    setMaxLength((v) => v + 1);
  };

  return (
    <div>
      <input
        className="border"
        onChange={handle}
        type="text"
        
        value={value}
      ></input>
      <span className="pl-3">{inputLength}</span>
      <span className="pr-3">/{maxLength}</span>
      <button onClick={plusButton} className="border w-5">
        +
      </button>
    </div>
  );
};

export default InputForm;
