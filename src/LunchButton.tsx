import { CSSProperties } from "react";

const LunchButton = () => {
  const buttonStyle: CSSProperties = {
    backgroundColor: "pink",
    padding: "10px",
  };
  const h1Style: CSSProperties = {
    color: "skyblue",
    fontSize: "20px",
  };

  return (
    <>
      <button style={buttonStyle}>버튼</button>
      <h1 style={h1Style}>오늘 점심 냉면</h1>
    </>
  );
};
export default LunchButton;
