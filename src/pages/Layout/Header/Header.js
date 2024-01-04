import { Transition } from "@headlessui/react";
import React, { useCallback, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { bubble as Menu } from "react-burger-menu";
import Marquee from "react-fast-marquee";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { MenuIcon } from "../../../components/Icons";
import { useBreakpoints } from "../../../Hooks";
import * as Images from "../../../utils/helper/image.helper";
import HamburgerMenu from "../HamburgerMenu";
import { ConnectedStatus } from "../../../components/Header";

const Header = () => {
  const { avaxBalance, mcvBalance } = useSelector(
    (state) => state.globalInfo.walletBalance
  );
  const location = useLocation();
  const { pathname } = location;

  const { active } = useBreakpoints();

  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const handleOnOpen = useCallback(() => {
    setIsOpen(true);
  }, []);
  const handleOnClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  const handleClickMenu = useCallback(() => {
    setIsOpen(false);
  }, []);
  const toggleOpenMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <header className="z-1000">
      <Menu isOpen={isOpen} onClose={handleOnClose} onOpen={handleOnOpen}>
        <HamburgerMenu handleClickMenu={handleClickMenu} />
      </Menu>
      {/* Desktop View */}
      {active === "lg" && (
        <div className="justify-between hidden w-full lg:flex">
          <div className="py-4 pl-2 pr-4 xl:py-6 xl:pl-4 xl:pr-8 bg-header-left w-72 xl:w-80 2xl:w-96 h-fit">
            <div className="flex items-center gap-2 xl:gap-4">
              <img src={Images.logoMCV} alt="logo" className="w-10 xl:w-auto" />
              <img
                src={Images.logoTitle}
                alt="logo"
                className="w-32 xl:w-auto"
              />
            </div>
          </div>
          <div className="flex-grow mx-1 xl:mx-6 2xl:mx-10 3xl:mx-12">
            <div className="flex items-center justify-between px-6 py-1 mx-auto 2xl:px-8 3xl:px-12 bg-header-center">
              <div className="text-xs text-white">
                Volume 24h: <span className="text-[#00A3FF]">12,409 MCV</span>
              </div>
              <div className="text-xs text-white">
                Volume Total:{" "}
                <span className="text-[#00A3FF]">123,409,642 MCV</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <div className="text-white">MCV / AVAX: </div>
                <img
                  src={Images.logoAvaxWhite}
                  alt="logo"
                  className="w-3"
                />{" "}
                <span className="text-[#00A3FF] flex items-center">0.23</span>
              </div>
              <div className="text-xs text-white">
                MCV / USD: <span className="text-[#00A3FF]">$3.11</span>
              </div>
            </div>
            <img
              src={Images.headerBorder}
              alt="border-tm"
              className="w-1/2 mx-auto"
            />
            <div className="flex items-center justify-center gap-4 mt-8">
              <img src={Images.headerTitleLeft} alt="" />
              <div
                className="text-base md:text-xl lg:text-2xl leading-3 font-semibold text-[#FFAE00] text-center uppercase tracking-widest"
                style={{
                  textShadow: "0px 0px 5px rgba(0, 163, 255, 0.98)",
                }}
              >
                {pathname.split("/").reverse()[0]}
              </div>
              <img src={Images.headerTitleRight} alt="" />
            </div>
          </div>
          <div className="py-4 pl-4 pr-2 xl:py-6 xl:pl-8 xl:pr-4 w-72 xl:w-80 2xl:w-96 bg-header-right h-fit">
            <div className="flex items-center justify-end gap-2 xl:gap-4">
              <Fade cascade direction="left">
                <div className="flex items-center gap-1 xl:gap-2">
                  <img
                    src={Images.logoMCV}
                    alt="mcv_token"
                    className="w-6 xl:w-7"
                  />
                  <div className="text-base xl:text-lg text-[#00A3FF] tracking-[2px] font-bold leading-5">
                    {mcvBalance && Math.round(+mcvBalance).toLocaleString()}
                  </div>
                </div>
                <div className="w-px h-10 border-r border-gray-600 border-dashed xl:h-12"></div>
                <div className="flex items-center gap-1 xl:gap-2">
                  <img
                    src={Images.logoAvaxWhite}
                    alt="avax"
                    className="w-5 xl:w-6"
                  />
                  <div className="text-base font-bold tracking-[2px] text-[#FF4141] xl:text-lg leading-5">
                    {avaxBalance && (+avaxBalance).toLocaleString()}
                  </div>
                </div>
                <div className="w-px h-10 border-r border-gray-600 border-dashed xl:h-12"></div>
                <div className="relative">
                  <img
                    src={Images.iconConnectRound}
                    alt="icon"
                    className="w-10 cursor-pointer xl:w-auto"
                    onClick={() => setIsShow((isShow) => !isShow)}
                  />
                  <Transition
                    show={isShow}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <ConnectedStatus />
                  </Transition>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      )}
      {/* Tablet View */}
      {(active === "md" || active === "sm") && (
        <>
          <div className="flex items-center md:px-6 py-1 md:mx-auto lg:hidden xl:px-12 justify-evenly border-b border-[#FFAE00] md:border-0 bg-header-center">
            <div className="text-xs text-white">
              Volume 24h: <span className="text-[#00A3FF]">12,409 MCV</span>
            </div>
            <div className="text-xs text-white">
              Volume Total:{" "}
              <span className="text-[#00A3FF]">123,409,642 MCV</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <div className="text-white">MCV / AVAX: </div>
              <img src={Images.logoAvaxWhite} alt="logo" className="w-3" />{" "}
              <span className="text-[#00A3FF] flex items-center">0.23</span>
            </div>
            <div className="text-xs text-white">
              MCV / USD: <span className="text-[#00A3FF]">$3.11</span>
            </div>
          </div>
          <div className="flex justify-between gap-4 mb-4 lg:hidden">
            <div className="w-32 p-2 pr-6 sm:p-4 bg-header-left h-fit">
              <div className="flex items-center gap-2">
                <div
                  className="relative cursor-pointer"
                  onClick={() => toggleOpenMenu()}
                >
                  <MenuIcon color={`#FFAE00`} />
                </div>
                <img src={Images.logoMCV} alt="logo" className="w-7 sm:w-8" />
              </div>
            </div>
            <div>
              <img
                src={Images.headerBorder}
                alt="border-tm"
                className="mx-auto w-44 sm:w-80"
              />
              <div className="grid w-32 gap-2 p-3 mx-auto mt-2 sm:grid-cols-2 bg-header-center sm:w-80">
                <div className="flex items-center justify-center gap-1">
                  <img src={Images.logoMCV} alt="mcv_token" className="w-6" />
                  <div className="text-base text-[#00A3FF] tracking-[2px] font-bold leading-5">
                    {mcvBalance && Math.round(+mcvBalance).toLocaleString()}
                  </div>
                </div>
                {/* <div className="w-px h-10 border-r border-gray-600 border-dashed"></div> */}
                <div className="flex items-center justify-center gap-1">
                  <img src={Images.logoAvaxWhite} alt="avax" className="w-5" />
                  <div className="text-base font-bold tracking-[2px] text-[#FF4141] leading-5">
                    {avaxBalance && (+avaxBalance).toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-full gap-4 px-10 mt-4 sm:mx-0">
                <img
                  src={Images.headerTitleLeft}
                  alt=""
                  className="hidden sm:block"
                />
                <div
                  className="text-2xl leading-3 font-semibold text-[#FFAE00] text-center uppercase tracking-widest"
                  style={{
                    textShadow: "0px 0px 5px rgba(0, 163, 255, 0.98)",
                  }}
                >
                  {pathname.split("/").reverse()[0]}
                </div>
                <img
                  src={Images.headerTitleRight}
                  alt=""
                  className="hidden sm:block"
                />
              </div>
            </div>
            <div className="w-32 p-2 pl-6 sm:p-4 bg-header-right h-fit">
              <div className="flex justify-end gap-2">
                <img src={Images.iconBell} alt="logo" className="opacity-20" />
                <div className="relative">
                  <img
                    src={Images.iconConnect}
                    alt="logo"
                    className="cursor-pointer"
                    onClick={() => setIsShow((isShow) => !isShow)}
                  />
                  <Transition
                    show={isShow}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <ConnectedStatus />
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Mobile View */}
      {active === "xs" && (
        <>
          <div className="border-b border-[#FFAE00] py-1">
            <Marquee gradientColor={[1, 10, 24]}>
              <div className="mx-2 text-xs text-white">
                Volume 24h: <span className="text-[#00A3FF]">12,409 MCV</span>
              </div>
              <div className="mx-2 text-xs text-white">
                Volume Total:{" "}
                <span className="text-[#00A3FF]">123,409,642 MCV</span>
              </div>
              <div className="flex items-center gap-1 mx-2 text-xs">
                <div className="text-white">MCV / AVAX: </div>
                <img
                  src={Images.logoAvaxWhite}
                  alt="logo"
                  className="w-3"
                />{" "}
                <span className="text-[#00A3FF] flex items-center">0.23</span>
              </div>
              <div className="mx-2 text-xs text-white">
                MCV / USD: <span className="text-[#00A3FF]">$3.11</span>
              </div>
            </Marquee>
          </div>
          <div className="flex justify-between mb-4">
            <div className="w-32 p-2 pr-6 bg-header-left h-fit">
              <div className="flex items-center gap-2">
                <div
                  className="relative cursor-pointer"
                  onClick={() => toggleOpenMenu()}
                >
                  <MenuIcon color={`#FFAE00`} />
                </div>
                <img src={Images.logoMCV} alt="logo" className="w-7 " />
              </div>
            </div>
            <div>
              <img src={Images.headerBorder} alt="border-tm" className="px-6" />
              <div className="grid gap-2 p-3 mx-auto mt-2 bg-header-center">
                <div className="flex items-center justify-center gap-1">
                  <img src={Images.logoMCV} alt="mcv_token" className="w-6" />
                  <div className="text-base text-[#00A3FF] tracking-[2px] font-bold leading-5">
                    {mcvBalance && Math.round(+mcvBalance).toLocaleString()}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <img src={Images.logoAvaxWhite} alt="avax" className="w-5" />
                  <div className="text-base font-bold tracking-[2px] text-[#FF4141] leading-5">
                    {avaxBalance && (+avaxBalance).toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-4 ">
                <div
                  className="text-xl leading-3 font-semibold text-[#FFAE00] text-center uppercase tracking-widest"
                  style={{
                    textShadow: "0px 0px 5px rgba(0, 163, 255, 0.98)",
                  }}
                >
                  {pathname.split("/").reverse()[0]}
                </div>
              </div>
            </div>
            <div className="w-32 p-2 pl-6 bg-header-right h-fit">
              <div className="flex justify-end gap-2">
                <img src={Images.iconBell} alt="logo" className="opacity-20" />
                <div className="relative">
                  <img
                    src={Images.iconConnect}
                    alt="logo"
                    className="cursor-pointer"
                    onClick={() => setIsShow((isShow) => !isShow)}
                  />
                  <Transition
                    show={isShow}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <ConnectedStatus />
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
