import React from "react";
import blog1 from "../../assets/images/blog1.png";

const BlogCard = ({ title, body }) => {
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
          {title && title}
        </h3>
        <p className="mt-4 text-[#121212] ">{body && body}</p>
        <p className="mt-4 pb-4 font-medium">Ətraflı oxu</p>
      </div>
    </div>
  );
};

export default BlogCard;
