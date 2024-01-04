import React from "react";
import { NavLink } from "react-router-dom";

import "./HamburgerMenu.css";
import { menus } from "../menus";

const HamburgerMenu = ({ handleClickMenu }) => {
  return (
    <>
      {menus.map((menu) => (
        <NavLink to={menu.name} onClick={() => handleClickMenu()} key={menu.id}>
          {({ isActive }) => (
            <>
              {menu.isSubMenu ? (
                <div className="flex items-center py-4 cursor-pointer pl-14 group">
                  {isActive ? menu.iconActive : menu.icon}
                  <div
                    className={`${
                      isActive
                        ? "text-[#23D0FF]"
                        : "text-white group-hover:animate-bounce"
                    } leading-3 font-bold text-[11px] tracking-[1px] uppercase ml-4`}
                  >
                    {menu.id}
                  </div>
                </div>
              ) : (
                <>
                  <div className="h-px w-full bg-gradient-to-r from-[rgba(85,211,255,0.84)] to-[rgba(120,220,255,0)]"></div>
                  <div className="flex items-center py-4 pl-6 cursor-pointer group">
                    {isActive ? menu.iconActive : menu.icon}
                    <div
                      className={`${
                        isActive
                          ? "text-[#FFAE00]"
                          : "text-white group-hover:animate-bounce"
                      } leading-3 font-bold text-xs tracking-[1px] uppercase ml-4`}
                    >
                      {menu.id}
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </NavLink>
      ))}
    </>
  );
};

export default HamburgerMenu;
