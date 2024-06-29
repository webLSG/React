import { useState } from "react";
import CategoryCharacter from "./CategoryCharacter";

const CategoryCopy = () => {
  const [tabList, setTabList] = useState([
    { btn: "TAB1", isSelect: true, categories: [{ title: "", imgSrc: "" }] },
    { btn: "TAB2", isSelect: false, categories: [{ title: "", imgSrc: "" }] },
    { btn: "TAB3", isSelect: false, categories: [{ title: "", imgSrc: "" }] },
    { btn: "TAB4", isSelect: false, categories: [{ title: "", imgSrc: "" }] },
  ]);

  const handleClick = (i: number) => {
    setTabList((prev) =>
      prev.map((v, index) =>
        i === index ? { ...v, isSelect: true } : { ...v, isSelect: false }
      )
    );
  };
  const selectedCSS =
    "w-52 p-3 cursor-pointer text-center border-black border-b-4";
  const notSelectedCSS = "w-52 p-3 cursor-pointer text-center text-gray-400";

  return (
    <div>
      <div className="flex">
        {tabList.map(({ isSelect, btn }, i) => (
          <div>
            <div
              onClick={() => handleClick(i)}
              className={isSelect ? selectedCSS : notSelectedCSS}
            >
              {btn}
            </div>
            <div className="py-20 flex justify-center items-center"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCopy;
