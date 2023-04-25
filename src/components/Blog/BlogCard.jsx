import React from "react";
import blog1 from "../../assets/images/blog1.png";

const BlogCard = () => {
  return (
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
          standartlarına uyğun unikal sayt yığmağı təklif ediblərsə, deməli Sizi
          də mütləq aldadıblar. Bu bloq yazısını yazmaqda məqsədimiz işini
          internet üzərindən qurmağı planlaşdıran sahibkarları marketinqin bu
          istiqaməti üzrə doğru məlumatlandırmaqdır.
        </p>
        <p className="mt-4 pb-4 font-medium">Ətraflı oxu</p>
      </div>
    </div>
  );
};

export default BlogCard;
