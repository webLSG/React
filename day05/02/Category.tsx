import { useState } from "react";

const Category = () => {
  const tabData = [
    { id: 1, btn: "TAB1" },
    { id: 2, btn: "TAB2" },
    { id: 3, btn: "TAB3" },
    { id: 4, btn: "TAB4" },
  ];

  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const selectedCSS =
    "w-52 p-3 cursor-pointer text-center border-black border-b-4";
  const notSelectedCSS = "w-52 p-3 cursor-pointer text-center text-gray-400";

  return (
    <div className="flex">
      {tabData.map(({ id, btn }) => (
        <div
          onClick={() => setActiveTab(id)}
          className={activeTab === id ? selectedCSS : notSelectedCSS}
        >
          {btn}
        </div>
      ))}
    </div>
  );
};

export default Category;
