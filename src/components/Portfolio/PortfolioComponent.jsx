import React from "react";
import { Link } from "react-router-dom";

const PortfolioComponent = () => {
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
        <div className="flex">
          <div className="box__milky mt-5 ">salam</div>
    
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
