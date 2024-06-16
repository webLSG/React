// Literal Type
type Direction = "north" | "south" | "west" | "east";
const destination: Direction = "west";

type PrimaryColor = "#05141F" | "#FFFFFF";
type SecondaryColor = "#5D7D2B" | "#4C5B35" | "#589000";
type FontSize = 11 | 12 | 13 | 14 | 16 | 20 | 24;

const sectionBg: SecondaryColor = "#4C5B35";
const component: {
  color: PrimaryColor | SecondaryColor;
  fontsize: FontSize;
}[] = [
  { color: "#05141F", fontsize: 16 },
  { color: "#589000", fontsize: 14 },
  { color: "#4C5B35", fontsize: 20 },
];

component.forEach(({ color, fontsize }) => {
  const btn = document.createElement("button");
  btn.style.color = color;
  btn.style.fontSize = fontsize + "px";
});
