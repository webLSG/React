import { ChangeEvent, useState } from "react";

type JoinProps = {
  guide?: string;
  placeholder?: string;
  onChange?: ChangeEvent<HTMLInputElement>;
};

const Join = ({ guide = "None", placeholder = "", onChange }: JoinProps) => {
  const [value, setValue] = useState("");
  const handle = (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="mb-5">
      <h4 className="mb-1">{guide}</h4>
      <input
        className="border w-96 h-12"
        type="text"
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Join;
