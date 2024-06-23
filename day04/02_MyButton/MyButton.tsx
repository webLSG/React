import { useState } from "react";

const MyButton = () => {
  const [num, setNum] = useState(0);
  const plus = () => setNum((v) => (v === 10 ? 10 : v + 1));
  const minus = () => setNum((v) => (v === 0 ? 0 : v - 1));

  return (
    <div>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <div className={num === 10 ? "text-red-600" : "text-sky-600"}>{num}</div>
    </div>
  );
};

export default MyButton;
