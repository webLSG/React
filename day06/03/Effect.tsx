import { useEffect, useState } from "react";
// side effect
// 함수, 배열[의존성 배열]: 앞의 함수가 재실행 하도록 하는 요소들

const Effect = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [city, setCity] = useState<string>("");
  const add = "https://fakerapi.it/api/v1/addresses?_quantity=1";

  const fetchData = async () => {
    setLoading(() => true);
    const response = await fetch(add);
    const result = await response.json();
    setCity((v) => result.data[0].city);
    setLoading(() => false);
  };
  const reload = () => fetchData();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div onClick={reload}>Effect {loading ? "로딩중" : city}</div>
    </>
  );
};

export default Effect;
