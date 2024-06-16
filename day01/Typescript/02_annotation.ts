const coffee: string = "아메리카노";
const isIcecream: boolean = false;
const cars: string[] = ["제네시스", "테슬라", "모닝"];
const lotto: number[] = [9, 7, 5, 2, 3];
const cake: { name: string; price: number } = {
  name: "치즈케이크",
  price: 3000,
};
const test: null = null;
const test1: undefined = undefined;
const test2: any = "이것은 최후의 보루~ 안쓰는게좋음~";

// Quiz !
const student: {
  name: string;
  age: number;
  programingClasses: string[];
  isAttending: boolean;
} = {
  name: "임수경",
  age: 28,
  programingClasses: ["react", "typescript", "javascript"],
  isAttending: true,
};

//
const add = (a: number, b: number): number => a + b;
const add1 = (a: number, b: string): string => a + b;
add(1, 2);
