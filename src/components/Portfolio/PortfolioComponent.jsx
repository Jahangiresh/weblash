import React from "react";
import alishanPng from "../../assets/images/alishan.png";
import { Link } from "react-router-dom";
import PortfolioCard from "./PortfolioCard";
import { PortfolioConfigs } from "../../Configs/PortfolioConfigs";

const PortfolioComponent = () => {
  // const [portfolios, setPortfolios] = useState(PortfolioConfigs);
  return (
    <div className="mt-16 pb-16">
      <div className="container">
        <div className="grid max-sm:grid-cols-3 max-lg:grid-cols-2 grid-cols-3">
          <h1 className="capitalize text-xl font-bold mb-2 sm:col-span-3">
            xidmətlərimiz
          </h1>

          <span className="max-sm:hidden">
            Lorem ipsum dolor sit amet consectetur. Adipiscing tempus morbi
            rhoncus
          </span>
          <Link className="col-span-2 flex justify-end">Hamısını gör</Link>
        </div>
        <div className="portfolio__rail flex max-md:overflow-auto gap-6 !box-border">
          {PortfolioConfigs &&
            PortfolioConfigs.slice(0, 2).map((PortfolioConfig) => (
              <PortfolioCard
                image={PortfolioConfig.image}
                title={PortfolioConfig.title}
                body={PortfolioConfig.body}
                href={PortfolioConfig.href}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
