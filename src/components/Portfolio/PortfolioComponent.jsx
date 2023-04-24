import React from "react";
import alishanPng from "../../assets/images/alishan.png";
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
<<<<<<< HEAD
        <div className="portfolio__rail flex max-md:overflow-auto gap-6 !box-border">
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
                rhoncus urna blandit in sed pulvinar. Amet elit blandit nulla
                quis tempor in amet. Lorem ipsum dolor sit amet consectetur.
                Adipiscing tempus morbi rhoncus urna blandit in sed pulvinar.
                Amet elit blandit nulla quis tempor in amet.
              </p>
              <p className="mt-4 pb-4 font-medium">www.alishancompany.az</p>
            </div>
          </div>{" "}
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
                rhoncus urna blandit in sed pulvinar. Amet elit blandit nulla
                quis tempor in amet. Lorem ipsum dolor sit amet consectetur.
                Adipiscing tempus morbi rhoncus urna blandit in sed pulvinar.
                Amet elit blandit nulla quis tempor in amet.
              </p>
              <p className="mt-4 pb-4 font-medium">www.alishancompany.az</p>
            </div>
          </div>{" "}
=======
        <div className="flex">
          <div className="box__milky mt-5 ">salam</div>
    
>>>>>>> a50d46f88eb6da1fb4cc96fbee18b8d7c31f2455
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
