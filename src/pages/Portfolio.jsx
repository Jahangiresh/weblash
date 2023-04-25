import React from "react";
import TitleSection from "../components/TitleSection";
import PortfolioCard from "../components/Portfolio/PortfolioCard";

const Portfolio = () => {
  return (
    <>
      <TitleSection title={"Portfolio"} />
      <div className="container">
        <div className=" grid md:grid-cols-2 gap-6 ">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
