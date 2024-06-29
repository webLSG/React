import { useState } from "react";
type SelectedOptionProps = { price: number };

const SelectedOption = ({ price }: SelectedOptionProps) => {
  const [itemCnt, setItemCnt] = useState(1);

  const handleMinusClick = () => setItemCnt((v) => (v === 1 ? 1 : v - 1));
  const handlePlusClick = () => setItemCnt((v) => v + 1);

  return (
    <div className="flex items-center">
      <div className="flex mx-4">
        <div
          className="w-8 h-8 bg-slate-500 text-white cursor-pointer flex justify-center items-center"
          onClick={handleMinusClick}
        >
          -
        </div>

        <div className="w-8 h-8 border border-slate-500 flex justify-center items-center">
          {itemCnt}
        </div>

        <div
          className="w-8 h-8 bg-slate-500 text-white cursor-pointer flex justify-center items-center"
          onClick={handlePlusClick}
        >
          +
        </div>
      </div>

      <div>{(price * itemCnt).toLocaleString()}원</div>
    </div>
  );
};

export default SelectedOption;
