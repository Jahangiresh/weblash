import React from "react";
import TeamComponent from "../components/Team/TeamComponent";
import TitleSection from "../components/TitleSection";
import TeamCard from "../components/Team/TeamCard";
import { TeamMembers } from "../Configs/TeamMembers";
const Team = () => {
  // console.log(TeamMembers);

  return (
    <>
      <TitleSection title={"Komandamız"} />
      <div className="container pt-3 pb-[60px]">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-8">
          {TeamMembers &&
            TeamMembers.map((teamMember) => (
              <TeamCard
                name={teamMember.name}
                surname={teamMember.surname}
                role={teamMember.role}
                about={teamMember.about}
                socials={teamMember.socials}
                image={teamMember.image}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Team;
