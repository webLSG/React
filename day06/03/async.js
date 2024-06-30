// async: 무조건 return을 프로미스로 돌려줌
const hamburger = async () => {
  return "치즈버거";
};
hamburger().then((v) => console.log(v));

// await: Promise가 처리될 때까지 함수의 실행을 정지시킴
// 처리: Fulfilled, Rejected
const fetchData = async () => {
  const response = await fetch("www");
  const data = await response.json();
  return data;
};
