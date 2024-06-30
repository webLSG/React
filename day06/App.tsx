import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Category from "./0630/thingo/Category";
import Musinsa from "./0630/Musinsa/Musinsa";
import Product from "./Product";
import Yeoshin from "./0630/04/Yeoshin";

function App() {
  return (
    
    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" Component={Home} />

    //       {/* 정적라우팅 */}
    //       <Route path="/thingo" Component={Category} />
    //       <Route path="/musinsa" Component={Musinsa} />

    //       {/* 동적라우팅 */}
    //       <Route path="/product/:id" Component={Product} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>

    <div className="p-3">
      <Yeoshin />
    </div>
  );
}

export default App;
