import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { Navs } from "../../Configs";
export default function MenuDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const { t, i18n } = useTranslation();

  function clickLang(lang) {
    i18n.changeLanguage(lang);
  }
  const list = (anchor) => (
    <Box
      className="menudrawer"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="menu__header   flex justify-end p-4">
        <RxCross2 className="menu__header__x text-xl" />
      </div>
      <ul className="menu__ul flex flex-col items-center ">
        {Navs && Navs.map((nav) => <li className="mb-5">{nav.name}</li>)}
        <li className="box__contact capitalize font-medium cursor-pointer max-lg:px-2 mb-5">
          bizimlə əlaqə
        </li>
      </ul>
      <hr />
      <ul className="menu__ul flex justify-center gap-5 py-8">
        <li onClick={() => clickLang("az")} className="menu__ul__li">
          Azərbaycan
        </li>
        <li onClick={() => clickLang("en")} className="menu__ul__li">
          English
        </li>
      </ul>
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <FiMenu className="text-3xl" onClick={toggleDrawer(anchor, true)} />

          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
