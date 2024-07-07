import MenuBar from "../atom/MenuBar";
import Title from "../atom/Title";

// Head로 이름변경
const Header = () => {
  return (
    <div className="p-5 my-5 flex items-center justify-center relative shadow-md bg-violet-500 text-xl text-white font-black">
      <div className="absolute left-5 text-3xl cursor-pointer">
        <MenuBar />
      </div>
      <Title contents="Website todo" />
    </div>
  );
};

export default Header;
