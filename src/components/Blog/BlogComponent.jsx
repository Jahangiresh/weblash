import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../assets/images/blog1.png";

const BlogComponent = () => {
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
          <div className="flex-col mt-5 basis-1/2  max-md:basis-3/4   flex  shrink-0">
            <div className="w-full  flex justify-center items-center shrink-0">
              <div className="w-full">
                <img className="w-full h-full" src={blog1} alt="jpg" />
              </div>
            </div>{" "}
            <div className="pl-3">
              {" "}
              <h3 className="mt-6 font-bold text-xl text-[#121212]">
                Veb saytların hazırlanmasının mərhələləri
              </h3>
              <p className="mt-4 text-[#121212] ">
                Əgər Sizə 300 - 500 - 800 AZN məbləğ qarşılığında google
                standartlarına uyğun unikal sayt yığmağı təklif ediblərsə,
                deməli Sizi də mütləq aldadıblar. Bu bloq yazısını yazmaqda
                məqsədimiz işini internet üzərindən qurmağı planlaşdıran
                sahibkarları marketinqin bu istiqaməti üzrə doğru
                məlumatlandırmaqdır.
              </p>
              <p className="mt-4 pb-4 font-medium">Ətraflı oxu</p>
            </div>
          </div>{" "}
          <div className="flex-col mt-5 basis-1/2  max-md:basis-3/4   flex  shrink-0">
            <div className="w-full  flex justify-center items-center shrink-0">
              <div className="w-full">
                <img className="w-full h-full" src={blog1} alt="jpg" />
              </div>
            </div>{" "}
            <div className="pl-3">
              {" "}
              <h3 className="mt-6 font-bold text-xl text-[#121212]">
                Veb saytların hazırlanmasının mərhələləri
              </h3>
              <p className="mt-4 text-[#121212] ">
                Əgər Sizə 300 - 500 - 800 AZN məbləğ qarşılığında google
                standartlarına uyğun unikal sayt yığmağı təklif ediblərsə,
                deməli Sizi də mütləq aldadıblar. Bu bloq yazısını yazmaqda
                məqsədimiz işini internet üzərindən qurmağı planlaşdıran
                sahibkarları marketinqin bu istiqaməti üzrə doğru
                məlumatlandırmaqdır.
              </p>
              <p className="mt-4 pb-4 font-medium">Ətraflı oxu</p>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
