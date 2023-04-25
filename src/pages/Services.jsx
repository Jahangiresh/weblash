import React from "react";
import ServicesComponenst from "../components/Services/Services";
import TitleSection from "../components/TitleSection";
import ServiceCard from "../components/Services/ServiceCard";
import { ServicesConfigs } from "../Configs/ServicesConfigs";

const Services = () => {
  return (
    <>
      <TitleSection title={"Xidmətlər"} />
      <div className="container">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-8">
          {ServicesConfigs &&
            ServicesConfigs.map((ServicesConfig) => (
              <ServiceCard
                title={ServicesConfig.title}
                body={ServicesConfig.body}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Services;
