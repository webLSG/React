import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Find from "./Find";
import Review from "./Review";
import Ticket from "./Ticket";
import MyPage from "./MyPage";
import Layout from "./Layout";

const Yeoshin = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto flex flex-col">
        <Header />

        <div className="py-96 text-center">
          <BrowserRouter>
            <Route element={<Layout />}>
              <Routes>
                <Route path="/" Component={Home} />
                <Route path="/find" Component={Find} />
                <Route path="/review" Component={Review} />
                <Route path="/ticket" Component={Ticket} />
                <Route path="/mypage" Component={MyPage} />
              </Routes>
            </Route>
          </BrowserRouter>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Yeoshin;
