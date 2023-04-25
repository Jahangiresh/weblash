import React from "react";
import TitleSection from "../components/TitleSection";

const Contact = () => {
  return (
    <>
      <TitleSection title="Əlaqə" />
      <div className="container  text-center ">
        <h2 className="font-bold text-xl ">
          Xoş gəldiniz, sizə necə kömək edə bilərik?
        </h2>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur. Adipiscing tempus morbi
          rhoncus urna blandit in sed pulvinar.
        </p>
        <div className="sm:grid  grid-cols-2 gap-x-7">
          <div className="div flex flex-col items-start mb-6">
            <label htmlFor="fullname " className="font-medium mb-[14px]">
              Ad və soyad
            </label>
            <input className="my__input w-full" type="text" name="" id="" />
          </div>{" "}
          <div className="div flex flex-col items-start mb-6">
            <label htmlFor="email" className="font-medium mb-[14px]">
              Email
            </label>
            <input className="my__input w-full" type="text" name="" id="" />
          </div>
          <div className="div flex flex-col items-start mb-6">
            <label htmlFor="email" className="font-medium mb-[14px]">
              Email
            </label>
            <input className="my__input w-full" type="text" name="" id="" />
          </div>
          <div className="div flex flex-col items-start mb-6">
            <label htmlFor="email" className="font-medium mb-[14px]">
              Email
            </label>
            <input className="my__input w-full" type="text" name="" id="" />
          </div>
          <div className="div flex flex-col items-start mb-6 col-span-2">
            <label htmlFor="email" className="font-medium mb-[14px]">
              Email
            </label>
            <textarea
              className="my__input w-full"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="div flex flex-col items-start mb-6 col-span-2">
            <button className="btn__success">Göndər</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
