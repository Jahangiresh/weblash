import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "../components/Header/Header";
import HeaderUpper from "../components/Header/HeaderUpper";
import Home from "../pages/Home";
import Footer from "../components/Footer/Footer";
const Layout = () => {
  return (
    <div className="layout__app">
      <BrowserRouter>
        <HeaderUpper />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
