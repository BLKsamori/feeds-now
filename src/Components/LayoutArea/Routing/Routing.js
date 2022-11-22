import { Route, Routes } from "react-router-dom";
import About from "../../Pages/About/About";
import Feeds from "../../Pages/Feeds/Feeds";
import Home from "../../Pages/Home/Home";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";

function Routing() {
  return (
    <div className="Routing">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/feeds" element={<Feeds />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Routing;
