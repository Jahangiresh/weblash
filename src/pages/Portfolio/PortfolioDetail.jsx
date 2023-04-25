import React from "react";
import TitleSection from "../../components/TitleSection";
import portfolioSteps from "../../assets/images/portfolioSteps.svg";
import checkSvg from "../../assets/images/check.svg";
import alishanDesktop from "../../assets/images/alishanDesktop.svg";

const PortfolioDetail = () => {
  return (
    <>
      <TitleSection title={"Portfolio"} />
      <div className="flex flex-col gap-2 items-center ">
        <p className="text-[#121212] ">www.alishancompany.az</p>
        <h1 className="font-bold text-[28px] capitalize text-center">
          Alishan Company Webləşdi
        </h1>
        <h3 className="font-semibold text-xl mb-11">Görülən işlər:</h3>
      </div>
      <div className="container relative grid sm:grid-cols-2 ">
        <div className="absolute left-1/2 -translate-x-1/2 -z-10 max-md:top-44">
          <img src={portfolioSteps} alt="" />
          <div className="absolute bottom-0 left-[44%] flex justify-center">
            <img src={checkSvg} alt="" />
          </div>
        </div>
        <div></div>

        <div className="box__beige basis-1/2 mb-[202px] max-md:mb-[150px] max-sm:ml-14 flex ">
          <span className="text-lg font-medium bg__red rounded-full !w-10 shrink-0 !h-10 flex justify-center items-center">
            {"</"}
          </span>
          <div className="ml-3 content">
            <p className=" text-xl font-bold">UX/UI Dizayn</p>
            <p>
              İstifadəyə yararlı və istifadəçi dostu interfacelərin yaradılması
              və müasir metodlarla test edilməsi.
            </p>
          </div>
        </div>
        <div className="box__red basis-1/2 flex mb-[202px] max-md:mb-[150px] max-sm:mr-14 ">
          {" "}
          <span className="text-xl font-medium bg__beige rounded-full !w-10 shrink-0 !h-10  flex justify-center items-center">
            {"</"}
          </span>
          <div className="ml-3 content">
            <p className=" text-xl font-bold">UX/UI Dizayn</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Adipiscing tempus morbi
              rhoncus urna blandit in sed pulvinar. Amet elit blandit nulla quis
              tempor in amet.
            </p>
          </div>
        </div>
        <div></div>

        <div></div>

        <div className="box__beige basis-1/2  flex  mb-[202px] max-md:mb-[150px] max-sm:ml-14">
          <span className="text-lg font-medium bg__red rounded-full !w-10 shrink-0 !h-10 flex justify-center items-center">
            {"<s/"}
          </span>
          <div className="ml-3 content">
            <p className=" text-xl font-bold">UX/UI Dizayn</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Adipiscing tempus morbi
              rhoncus urna blandit in sed pulvinar. Amet elit blandit nulla quis
              tempor in amet.
            </p>
          </div>
        </div>
        <div className="box__red basis-1/2 flex max-sm:mr-14 ">
          {" "}
          <span className="text-xl font-medium bg__beige rounded-full !w-10 shrink-0 !h-10  flex justify-center items-center">
            {"</"}
          </span>
          <div className="ml-3 content">
            <p className=" text-xl font-bold">UX/UI Dizayn</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Adipiscing tempus morbi
              rhoncus urna blandit in sed pulvinar. Amet elit blandit nulla quis
              tempor in amet.
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div className=" portfolioContainer container pt-[260px] ">
        <p className="text-center mt-10 font-bold text-xl ">
          Proyektin təhvil verilməsi
        </p>
        <h1 className="text-[28px] font-bold text-center my-10">
          Alishan Company
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur. Adipiscing tempus morbi
          rhoncus urna blandit in sed pulvinar. Amet elit blandit nulla quis
          tempor in amet. Lorem ipsum dolor sit amet consectetur. Adipiscing
          tempus morbi rhoncus urna blandit in sed pulvinar.
        </p>
        <div className="box__beige my-10 flex justify-center sm:!px-16  sm:!py-10">
          <img className="w-full" src={alishanDesktop} alt="" />
        </div>
      </div>
    </>
  );
};

export default PortfolioDetail;
