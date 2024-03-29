
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import LearnPage from "./view/LearnPage"
import MainPage from "./view/MainPage";
import App from "./App";

const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="*" element={<App />}></Route>
          </Routes>
      </BrowserRouter>
    );
  };

export default Router;