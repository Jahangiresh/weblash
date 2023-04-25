import React from "react";
import bg from "../assets/images/pointsBg.svg";
import line from "../assets/images/line.svg";
import { Link } from "react-router-dom";
const TitleSection = ({ title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="title__section__cover h-[180px] bg__beige bg-cover bg-center mb-6 "
    >
      <div className="container h-full flex flex-col justify-center gap-4">
        <h1 className="font-bold text-[28px]">{title}</h1>
        <p className="flex items-center gap-2 font-medium">
          <Link className="underline" to="/">
            Ana Səhifə
          </Link>{" "}
          <img src={line} alt="" />
          {title}
        </p>{" "}
      </div>
    </div>
  );
};

export default TitleSection;
