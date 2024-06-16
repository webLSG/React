// Union 연산자
const a1: string | number = "문자 or 숫자 가능";
const a2: Element | null = document.querySelector(".box");
const a3: () => number = () => 1;

const malatang: { ingredients: string[]; price: string | number } = {
  ingredients: ["청경채", "숙주"],
  price: 20000,
};

// Intersection 연산자
const pizza: { size: string } & { toppings: string[] } & { eat: () => void } = {
  size: "L",
  toppings: ["치즈", "페퍼로니"],
  eat: () => {
    console.log("맛있다");
  },
};
