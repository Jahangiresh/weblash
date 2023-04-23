import React from "react";
import AboutComponent from "../components/About/AboutComponent";
import AboutUs from "../components/About/AboutUs";
import Services from "../components/Services/Services";
import TeamComponent from "../components/Team/TeamComponent";
// import "../assets/css/app.scss";
const Home = () => {
  return (
    <div className="home ">
      <div className="home__container  md:h-[740px]  items-center container flex max-md:flex-col ">
        <div className="titles__left md:w-1/2 max-md:text-center max-md:mt-8">
          <h1 className="max-md:text-3xl text-5xl font-bold  leading-normal mb-4">
            Profesional veb və dizayn xidmətləri üçün doğru ünvandasınız.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            debitis quis, eaque nulla fuga id optio corporis eligendi odio
            aspernatur?
          </p>
          <button className="btn__light mt-8">Bizimlə əlaqə</button>
        </div>
        <div className="titles__right md:w-1/2 relative md:h-3/4 h-[510px] max-sm:h-[520px] max-md:mt-16 max-md:w-[460px] max-sm:w-[320px] ">
          <div className="box__red absolute bottom-0 md:bottom-10 left-44 max-lg:left-0   w-60  z-10 py-6">
            <span className="text-2xl font-medium bg__beige rounded-full w-14 h-14 flex justify-center items-center">
              {"</"}
            </span>
            <h2 className="font-bold leading-9 text-xl mt-2">
              Web sayta ehtiyacın var?
            </h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur. Adipiscing tempus.
            </p>
          </div>
          <div className="box__beige absolute top-0 py-6   right-0 w-60 ">
            <span className="text-2xl font-medium bg__red rounded-full w-14 h-14 flex justify-center items-center">
              {"</"}
            </span>
            <h2 className="font-bold leading-9 text-xl mt-2">
              Web sayta ehtiyacın var?
            </h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur. Adipiscing tempus.
            </p>
          </div>
        </div>
      </div>
      <div className="about__section container">
        <AboutUs />
      </div>
      <AboutComponent />
      <Services />
      <TeamComponent />
    </div>
  );
};

export default Home;
