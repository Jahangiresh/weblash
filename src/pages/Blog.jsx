import React from "react";
import BlogCard from "../components/Blog/BlogCard";
import TitleSection from "../components/TitleSection";

const Blog = () => {
  return (
    <>
      <TitleSection title={"Blog"} />
      <div className="container">
        <div className=" grid md:grid-cols-2 gap-6 ">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </>
  );
};

export default Blog;
