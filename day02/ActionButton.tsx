import { CSSProperties } from "react";

const ActionButton = () => {
  const style: CSSProperties = {
    fontSize: "20px",
    color: "white",
    backgroundColor: "black",
    border: "none",
  };

  return <button style={style}>Action</button>;
};
export default ActionButton;
