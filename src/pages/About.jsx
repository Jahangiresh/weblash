import React from "react";
import AboutComponent from "../components/About/AboutComponent";
import AboutUs from "../components/About/AboutUs";

const About = () => {
  return (
    <>
      <div className="container">
        <AboutUs />
      </div>
      <AboutComponent />
    </>
  );
};

export default About;
