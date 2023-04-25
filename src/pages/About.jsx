import React from "react";
import AboutComponent from "../components/About/AboutComponent";
import AboutUs from "../components/About/AboutUs";
import TitleSection from "../components/TitleSection";
import { Accordion } from "flowbite-react";

const About = () => {
  return (
    <>
      <TitleSection title={"Haqqımızda"} />
      <div className="container  ">
        <AboutUs />
      </div>
      <AboutComponent />\
      <div className="container  pb-20">
        <h1 className="font-bold text-[28px] text-center my-6">
          Bizə tez-tez verilən suallar
        </h1>
        <Accordion className="!border-b-black !rounded-none" flush={true}>
          <Accordion.Panel className="text-center">
            <Accordion.Title className="!text-[20px] !font-semibold !text-black  !border-t border-black !rounded-none">
              Veb saytının qiyməti necə hesablanır?
            </Accordion.Title>
            <Accordion.Content className="!border-none  !rounded-none">
              <p className="mb-2 text-[#121212] pl-5">
                Veb saytının hazırlanması üçün biz müştərilərimizin istəklərinə
                uyğun olaraq, yaradılacaq saytın məqsəd və hədəflərinə əsasən,
                dizayn və funksionallığını təyin edirik. Həmçinin, mobil uyğun
                və təhlükəsiz olması üçün də diqqət edirik.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <Accordion className="!border-b-black !rounded-none" flush={true}>
          <Accordion.Panel className="text-center">
            <Accordion.Title className="!text-[20px] !font-semibold !text-black  !border-t border-black !rounded-none">
              Veb saytının qiyməti necə hesablanır?
            </Accordion.Title>
            <Accordion.Content className="!border-none  !rounded-none">
              <p className="mb-2 text-[#121212] pl-5">
                Veb saytının hazırlanması üçün biz müştərilərimizin istəklərinə
                uyğun olaraq, yaradılacaq saytın məqsəd və hədəflərinə əsasən,
                dizayn və funksionallığını təyin edirik. Həmçinin, mobil uyğun
                və təhlükəsiz olması üçün də diqqət edirik.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <Accordion className="!border-b-black !rounded-none" flush={true}>
          <Accordion.Panel className="text-center">
            <Accordion.Title className="!text-[20px] !font-semibold !text-black  !border-t border-black !rounded-none">
              Veb saytının qiyməti necə hesablanır?
            </Accordion.Title>
            <Accordion.Content className="!border-none  !rounded-none">
              <p className="mb-2 text-[#121212] pl-5">
                Veb saytının hazırlanması üçün biz müştərilərimizin istəklərinə
                uyğun olaraq, yaradılacaq saytın məqsəd və hədəflərinə əsasən,
                dizayn və funksionallığını təyin edirik. Həmçinin, mobil uyğun
                və təhlükəsiz olması üçün də diqqət edirik.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  );
};

export default About;
