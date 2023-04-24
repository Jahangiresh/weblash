import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import { Navs } from "../../Configs";
import MenuDrawer from "./MenuDrawer";
const Header = () => {
  return (
    <div className="header border-b ">
      <div className="header__container h-[70px] container flex items-center justify-between">
        <div className="logo h-12 w-20 shrink-0">
          <img src={Logo} alt="logo.png  w-full " />
        </div>
        <menu className="md:hidden">
          <MenuDrawer />
        </menu>
        <nav className="nav max-lg:text-sm max-md:hidden">
          <ul className="flex items-center">
            {Navs &&
              Navs.map((nav) => (
                <Link
                  to={nav.hrefLink}
                  className="max-lg:mr-4 max-lg:text-sm mr-10 font-medium  capitalize cursor-pointer"
                >
                  {nav.name}
                </Link>
              ))}
            <li className="box__contact capitalize font-medium cursor-pointer max-lg:px-2">
              bizimlə əlaqə
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
