import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderUpper from "../components/Header/HeaderUpper";
import About from "../pages/About";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Team from "../pages/Team";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
const Layout = () => {
  return (
    <div className="layout__app">
      <BrowserRouter>
        <HeaderUpper />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
