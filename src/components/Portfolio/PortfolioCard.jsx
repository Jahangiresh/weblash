import React from "react";
import { useNavigate } from "react-router-dom";

const PortfolioCard = ({ id, image, title, body, href }) => {
  const navigate = useNavigate();
  return (
    <div className="flex-col mt-5 basis-1/2  max-md:basis-3/4   flex  shrink-0">
      <div
        onClick={() => {
          navigate(`/portfolio/${id}`);
        }}
        className="box__milky  w-full max-sm:!py-5 max-sm:!px-9 !py-10 !px-14 max-lg:!px-10  max-md:!py-10 max-md:!px-14 flex justify-center items-center shrink-0 cursor-pointer"
      >
        <div className="border-2 rounded-lg overflow-hidden  border-black">
          <img className="w-full h-full" src={image} alt="jpg" />
        </div>
      </div>{" "}
      <div className="pl-3">
        {" "}
        <h3
          onClick={() => {
            navigate(`/portfolio/${id}`);
          }}
          className="mt-6 font-bold text-xl text-[#121212] cursor-pointer"
        >
          {title && title}
        </h3>
        <p className="mt-4 text-[#121212] ">{body && body}</p>
        <a className="mt-4 pb-4 font-medium" href={href}>
          {href && href}
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
