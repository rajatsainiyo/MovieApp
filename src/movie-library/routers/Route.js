import React from "react";
import Home from "../Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorite from "../Favorite/Favorite";
import Details from "../movie-details/Details";
import Navbarcom from "../navbar/Navbarcom";

const RouteComponent = () => {
  return (
    <div>
      <Router>
        <Navbarcom />
        <Routes>
          <Route path="/home" element={<Home Component={Home} />} />
          <Route path="/favorite" element={<Favorite Component={Favorite} />} />
          <Route path="/details" element={<Details Component={Details} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouteComponent;
