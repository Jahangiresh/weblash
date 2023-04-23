import React from "react";

const AboutUs = () => {
  return (
    <div className="about__us flex   items-center  mt-20 max-md:flex-col ">
      <div className="left basis-1/2 max-md:w-full ">
        <h2 className="font-bold text-xl capitalize mb-3">haqqımızda</h2>
        <p className="md:pr-20">
          Lorem ipsum dolor sit amet consectetur. Adipiscing tempus morbi
          rhoncus urna blandit in sed pulvinar. Amet elit blandit nulla quis
          tempor in amet. Lorem ipsum dolor sit amet consectetur. Adipiscing
          tempus morbi rhoncus urna blandit in sed pulvinar. Amet elit blandit
          nulla quis tempor in amet. Lorem ipsum dolor sit amet consectetur.
          Adipiscing tempus morbi rhoncus urna blandit in sed pulvinar. Amet
          elit blandit nulla quis tempor in amet. Lorem ipsum dolor sit amet
          consectetur. Adipiscing tempus morbi rhoncus urna blandit in sed
          pulvinar. Amet elit blandit nulla quis tempor in amet.
        </p>
      </div>
      <div className="right basis-1/2 relative  h-[380px]   max-md:w-full  max-md:my-72">
        <div className="box__red absolute bottom-0 left-0 z-10 py-5 max-w-[428px]">
          <h2 className="font-bold leading-9 text-xl mt-2">
            Web sayta ehtiyacın var?
          </h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur. Adipiscing tempus morbi
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="box__beige absolute top-0  right-0 py-5  max-w-[428px] max-md:mt-9">
          <h2 className="font-bold leading-9 text-xl mt-2">
            Web sayta ehtiyacın var?
          </h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur. Adipiscing tempus morbi
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
