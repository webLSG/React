import { useState } from "react";

const Snapshot = () => {
  const [num, setNum] = useState(0);
  const click = () => {
    setNum((v) => v + 1);
    console.log(num); // 처음에 0 나옴
  };

  return <button onClick={click}>{num}</button>;
};

export default Snapshot;
