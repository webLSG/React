export type CategoryCharacterProps = {
  imgSrc?: string;
  categoryTitle?: string;
};

const CategoryCharacter = ({
  imgSrc = "normal.jpg",
  categoryTitle = "None",
}: CategoryCharacterProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <div className="w-20 h-20">
        <img className="w-full h-full rounded-full" src={imgSrc} />
      </div>
      <div>{categoryTitle}</div>
    </div>
  );
};

export default CategoryCharacter;
