type G<T> = {
  //   T, K 두개 넣어도 됨
  first: T;
  second: number;
};

// ↑ generic
type A = {
  first: string;
  second: number;
};
type B = {
  first: boolean;
  second: number;
};
type C = {
  first: number;
  second: number;
};

//
const test1: G<string> = {
  first: "abc",
  second: 12,
};

// Q
type HamburgerSet<T, K, C> = {
  main: T;
  side: K;
  drink: C;
};

type Hamburger = {
  bread: "참깨빵" | "머핀";
  content: "불고기" | "쉬림프" | "치킨" | "토마토에그";
};
type Side = "감자튀김" | "코우슬로" | "맥너겟" | "소프트아이스크림";
type Coffee1 = "드립커피" | "아메리카노" | "디카페인" | "라떼";
type Beverage1 = "콜라" | "스프라이트" | "제로콜라" | "환타";

const MacMorning: HamburgerSet<Hamburger, Side, Coffee1 | Beverage1> = {
  main: {
    bread: "머핀",
    content: "토마토에그",
  },
  side: "감자튀김",
  drink: "드립커피",
};

type Success<T> = {
  result: "success";
  value: T;
};
type Fail = {
  result: "fail";
  value: "error";
};

type getResonse<T> = Success<T> | Fail;
const test2 = (b: getResonse<number>) => {
  if (b.result === "success") {
    return b.value + 100;
  } else {
    console.log(b.value);
  }
};
