import React from "react";

const AboutComponent = () => {
  return (
    <div className="bg__black__primary pt-24 text-4xl font-bold mt-10 pb-[90px]">
      <h1 className="text-center text-white ">Niyə Weblash?</h1>
      <div className="grid grid-cols-3 px-[70px] max-md:px-7 mt-12 gap-6  max-md:grid-cols-2 max-sm:grid-cols-1 ">
        <div className="bg__black__secondary rounded-md text-center px-11 py-8 font-bold text-6xl text-white">
          50+
          <p className="font-medium text-xl	mt-6"> Tamamlanmış proyekt</p>
        </div>
        <div className="bg__black__secondary rounded-md text-center px-11 py-8 font-bold text-6xl text-white">
          120+
          <p className="font-medium text-xl	mt-6"> Tamamlanmış proyekt</p>
        </div>
        <div className="bg__black__secondary rounded-md text-center px-11 py-8 font-bold text-6xl text-white max-md:sm:col-span-2">
          120+
          <p className="font-medium text-xl	mt-6"> Tamamlanmış proyekt</p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
