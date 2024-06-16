// optional: ? → undefined일수도 있음
// substract
const substract = (a: number, b?: number) => {
  if (b === undefined) {
    return 0;
  } else {
    return a - b;
  }
};

//
type Food = {
  name: string;
  price: number;
  kcal?: number;
};
const lunch: Food = {
  name: "냉면",
  price: 9000,
  // kcal 안써도 오류 안남
};

// keyof
// obj {k: v}
type Course = {
  name: string;
  classroom: "A" | "B" | "C";
};

type Aa = keyof Course;
const test2: Aa = "classroom";
