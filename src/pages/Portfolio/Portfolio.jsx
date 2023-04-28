import React from "react";
import TitleSection from "../../components/TitleSection";
import PortfolioCard from "../../components/Portfolio/PortfolioCard";
import { PortfolioConfigs } from "../../Configs/PortfolioConfigs";
const Portfolio = () => {
  return (
    <>
      <TitleSection title={"Portfolio"} />
      <div className="container pt-3 pb-[60px]">
        <div className=" grid md:grid-cols-2 gap-6 ">
          {PortfolioConfigs &&
            PortfolioConfigs.map((PortfolioConfig, index) => (
              <PortfolioCard
                key={index}
                id={PortfolioConfig.id}
                image={PortfolioConfig.image}
                title={PortfolioConfig.title}
                body={PortfolioConfig.body}
                href={PortfolioConfig.href}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
