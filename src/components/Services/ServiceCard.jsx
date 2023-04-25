import React from "react";

const ServiceCard = ({ title, body }) => {
  return (
    <div className="box__milky pt-6 mt-6  cursor-cell">
      <span className="text-2xl font-medium bg__red rounded-full w-14 h-14 flex justify-center items-center">
        {"</"}
      </span>
      <h2 className="font-bold leading-9 text-xl mt-6">{title && title}</h2>
      <p className="mt-2 mb-8">{body && body}</p>
    </div>
  );
};

export default ServiceCard;
