import React from "react";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import { menus } from "../menus";

const Sidebar = () => {
  return (
    <div className="fixed z-index:1000">
      <div className="hidden lg:block absolute top-[11vh] left-0  z-10 group">
        <Fade cascade direction="up">
          {menus.map((menu, index) => (
            <NavLink to={menu.name} key={menu.id}>
              {({ isActive }) => (
                <>
                  {menu.isSubMenu ? (
                    <div className="items-center hidden py-4 cursor-pointer pl-14 group-hover:flex animate-menu-show">
                      {isActive ? menu.iconActive : menu.icon}
                      <div
                        className={`${
                          isActive ? "text-[#23D0FF]" : "text-white"
                        } leading-3 font-bold text-[11px] tracking-[1px] uppercase ml-4`}
                      >
                        {menu.id}
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* {menu.hasSubMenu ? (
                      <div className="h-px w-full bg-gradient-to-r from-[rgba(85,211,255,0.84)] to-[rgba(120,220,255,0)] group-hover:hidden"></div>
                    ) : (
                      <div className="h-px w-full bg-gradient-to-r from-[rgba(85,211,255,0.84)] to-[rgba(120,220,255,0)]"></div>
                    )} */}
                      {index > 0 && (
                        <div className="h-px w-full bg-gradient-to-r from-[rgba(85,211,255,0.84)] to-[rgba(120,220,255,0)]"></div>
                      )}

                      <div className="flex items-center py-4 pl-6 pr-6 cursor-pointer group-hover:pr-0">
                        {isActive ? menu.iconActive : menu.icon}
                        <div
                          className={`${
                            isActive ? "text-[#FFAE00]" : "text-white"
                          } leading-3 font-bold text-xs tracking-[1px] uppercase ml-4 hidden group-hover:block animate-menu-show`}
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
        </Fade>
      </div>
    </div>
  );
};

export default Sidebar;
