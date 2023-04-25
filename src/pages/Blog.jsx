import React from "react";
import BlogCard from "../components/Blog/BlogCard";
import TitleSection from "../components/TitleSection";
import { BlogConfigs } from "../Configs/BlogConfigs";

const Blog = () => {
  return (
    <>
      <TitleSection title={"Blog"} />
      <div className="container">
        <div className=" grid md:grid-cols-2 gap-6 ">
          {BlogConfigs &&
            BlogConfigs.map((BlogConfig) => (
              <BlogCard title={BlogConfig.title} body={BlogConfig.body} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
