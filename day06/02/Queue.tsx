import { useState } from "react";

const Queue = () => {
  const [num, setNum] = useState(1);
  const click = () => {
    setNum(num + 1);
    setNum(num + 1);
    setNum(num + 1);

    // 위와같음
    // setNum(1 + 1);
    // setNum(1 + 1);
    // setNum(1 + 1);
    // 결과: 2, 3, 4 ...

    setNum((n) => n + 1);
    setNum((n) => n + 1);
    setNum((n) => n + 1);
    // 결과: 4, 7, 10 ...
  };

  return <div onClick={click}>{num}</div>;
};

export default Queue;
