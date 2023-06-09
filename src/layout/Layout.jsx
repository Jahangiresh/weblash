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
import Footer from "../components/Footer/Footer";
import Services from "../pages/Services";
import Team from "../pages/Team";
import Portfolio from "../pages/Portfolio/Portfolio";
import PortfolioDetail from "../pages/Portfolio/PortfolioDetail";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact";
import BlogDetail from "../pages/Blog/BlogDetail";
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

          {/* portfolio  */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          {/* portfolio  */}

          {/* blog   */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          {/* blog   */}

          <Route path="/team" element={<Team />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
