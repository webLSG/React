import { CSSProperties } from "react";

const LargeButton = () => {
  const btnStyle: CSSProperties = {
    backgroundColor: "yellowgreen",
    padding: "10px 20px",
    borderRadius: "8px",
  };

  return <button style={btnStyle}>버튼</button>;
};
export default LargeButton;
