import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="pt-14 container">
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
      <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-8">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
