import React from "react";
import alishanPng from "../../assets/images/alishan.png";

const PortfolioCard = () => {
  return (
    <div className="flex-col mt-5 basis-1/2  max-md:basis-3/4   flex  shrink-0">
      <div className="box__milky  w-full max-sm:!py-5 max-sm:!px-9 !py-10 !px-14 max-lg:!px-10  max-md:!py-10 max-md:!px-14 flex justify-center items-center shrink-0">
        <div className="border-2 rounded-lg overflow-hidden  border-black">
          <img className="w-full h-full" src={alishanPng} alt="jpg" />
        </div>
      </div>{" "}
      <div className="pl-3">
        {" "}
        <h3 className="mt-6 font-bold text-xl text-[#121212]">
          “AlishanCompany” üçün hazırladığımız “Vizit Kart” veb sayt
        </h3>
        <p className="mt-4 text-[#121212] ">
          Lorem ipsum dolor sit amet consectetur. Adipiscing tempus morbi
          rhoncus urna blandit in sed pulvinar. Amet elit blandit nulla quis
          tempor in amet. Lorem ipsum dolor sit amet consectetur. Adipiscing
          tempus morbi rhoncus urna blandit in sed pulvinar. Amet elit blandit
          nulla quis tempor in amet.
        </p>
        <p className="mt-4 pb-4 font-medium">www.alishancompany.az</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
