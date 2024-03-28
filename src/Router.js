
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import LearnPage from "./LearnPage";

const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/learn" element={<LearnPage />} />
          </Routes>
      </BrowserRouter>
    );
  };

export default Router;