import React from "react";
import { FaBehance, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const TeamCard = ({ name, surname, role, about, image, socials }) => {
  return (
    <div className="box__light pt-6 mt-6 flex-col items-center text-center  text-black  cursor-cell">
      <div className="avatar w-[70px] h-[70px] rounded-full overflow-hidden">
        <img src={image} alt="" />
      </div>
      <h2 className="font-bold leading-9 text-xl mt-6">
        {name} {surname}
      </h2>
      <p className="font-medium text-base">{role}</p>

      <p className=" mb-2 leading-7 mt-4 text-[#121212]">{about && about}</p>
      <div className="flex gap-2">
        <div className="icons w-9 h-9 rounded-full bg__red flex justify-center items-center ">
          <FaBehance className="text-lg" />
        </div>
        <div className="icons w-9 h-9 rounded-full bg__red flex justify-center items-center ">
          <FaLinkedin className="text-lg" />
        </div>
        <div className="icons w-9 h-9 rounded-full bg__red flex justify-center items-center ">
          <FaWhatsapp className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
