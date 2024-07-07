import Body from "./components/organism/Body";
import Header from "./components/organism/Header";

function App() {
  return (
    <div className="w-screen h-screen font-Pretendard bg-slate-200">
      <div className="w-full h-full max-w-lg mx-auto flex flex-col">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
