import { CSSProperties } from "react";

const SnackBar = () => {
  const barStyle: CSSProperties = {
    width: "300px",
    padding: "10px 20px",
    color: "white",
    backgroundColor: "black",
    borderRadius: "10px",

    margin: "10px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const iconStyle: CSSProperties = {
    width: "25px",
    height: "25px",
    textAlign: "center",
    backgroundColor: "blue",
    borderRadius: "50%",
  };

  return (
    <div style={barStyle}>
      <div style={iconStyle}></div>
      <div>Message</div>
      <div>Action</div>
    </div>
  );
};
export default SnackBar;
