// Alias: 별칭, 별명
type TTest = string | string[];
const test: TTest = "디카페인 아아";

//
type Beans = { shot: number; hasDecaffein: boolean };
type Liquid = { name: string; kcal: number; ingredients: string[] };
type Carbonated = { isZero: boolean };
type Milk = { isLowFat: boolean; isSoy: boolean };

// Hybrid Type
type Coffee = Beans & Liquid;
type Beverage = Carbonated & Liquid;
type LatteCoffee = Beans & Liquid & Milk;

// const americano: Coffee = {};
// const Coke: Beverage = {};
// const densedLatte: LatteCoffee = {};

//
type MyTypograph = {
  font: string;
  fontWeight: number;
  color: string;
};
type MyButton = {
  border: string;
  borderRadius: number;
  backgroundColor: string;
  click: () => void;
};

// const newButton: MyTypograph & MyButton = {};
