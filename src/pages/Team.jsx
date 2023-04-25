import React from "react";
import TeamComponent from "../components/Team/TeamComponent";
import TitleSection from "../components/TitleSection";
import TeamCard from "../components/Team/TeamCard";

const Team = () => {
  return (
    <>
      <TitleSection title={"Komandamız"} />
      <div className="container">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-8">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </>
  );
};

export default Team;
