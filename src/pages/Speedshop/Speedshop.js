import { ethers } from "ethers";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import {
  BoostIcon,
  HandlingIcon,
  PowerIcon,
  SpeedshopIcon,
  TiresIcon,
  ToolboxIcon,
} from "../../components/Icons";
import * as Images from "../../utils/helper/image.helper";

import tokenABI from "../../contracts/abis/MCVToken.json";
import { mcvAddress } from "../../contracts/address";

const Speedshop = () => {
  const { mcvBalance } = useSelector((state) => state.globalInfo.walletBalance)

  const [minting, setMinting] = useState(false);
  const [hover, setHover] = useState(0);
  const [numBoxToBuy, setNumBoxToBuy] = useState(0);

  const [priceSc, setPriceSc] = useState(150);
  const [priceMc, setPriceMc] = useState(70);
  const [toolboxMode, setToolboxMode] = useState("super");

  const [mcvContract, setMcvContract] = useState(null);
  const [scToolboxContract, setScToolboxContract] = useState(null);
  const [mcToolboxContract, setMcToolboxContract] = useState(null);

  const handleClickTicket = useCallback(
    (index) => {
      if (minting) return;
      setNumBoxToBuy(index);
      // setIsMinted(false);
      // setMintedTokenIds([]);
    },
    [minting]
  );

  const handleSelectMode = useCallback((mode) => {
    setToolboxMode(mode);
  }, []);

  const handleMint = useCallback(async () => {
    try {
    } catch (error) {}
  }, []);

  const price = useMemo(() => {
    return {
      super: priceSc,
      muscle: priceMc,
    };
  }, [priceMc, priceSc]);

  useEffect(() => {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    // const scToolboxContract = new ethers.Contract(
    //   superCarToolboxAddress,
    //   toolboxABI,
    //   signer
    // );
    // setScToolboxContract(scToolboxContract);
    // const mcToolboxContract = new ethers.Contract(
    //   muscleCarToolboxAddress,
    //   toolboxABI,
    //   signer
    // );
    // setMcToolboxContract(mcToolboxContract);
    const mcvContract = new ethers.Contract(mcvAddress, tokenABI, signer);
    setMcvContract(mcvContract);
  }, []);
  return (
    <div className="mx-4 md:ml-[13vw] md:mr-0 mt-8 2xl:mb-4 text-white">
      <div className="relative pb-4 mb-10 md:pb-40 md:mb-24 2xl:pb-32 2xl:mb-12 callout-bg">
        <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-black border border-[#009EFF] shadow-[0_0_9px_rgba(77,201,255,0.9)] hidden md:flex items-center justify-center">
          <SpeedshopIcon width={32} height={32} />
        </div>
        <div className="hidden ml-1 sm:ml-6 md:ml-20 md:flex md:items-center md:justify-between md:mr-[14vw] h-16">
          <div className="md:flex md:items-center">
            <div
              className="font-bold text-xl text-[#33D4FF] leading-4 tracking-[2.4px] uppercase"
              style={{ textShadow: "0px 0px 5px rgba(50, 171, 252, 0.98)" }}
            >
              WELCOME TO THE MCVERSE SPEEDSHOP!
            </div>
            <div className="w-px border border-r border-dashed border-[#FFD900] h-6 rotate-[30deg] mx-1 sm:mx-4"></div>
            <div className="text-white text-[10px] font-medium tracking-[2px] text-shadow-blue">
              Mint Toolboxes to boost your NFV's in races!
            </div>
          </div>
        </div>
        <div className="grid gap-2 mt-2 xl:pr-4 xl:grid-cols-2 2xl:grid-cols-7 3xl:grid-cols-3">
          <div className="2xl:col-span-3 3xl:col-span-1 bg-black bg-opacity-50 border-[0.5px] border-[#80C9FF] pl-6 pr-4 py-6 md:ml-4 2xl:ml-0 rounded-t-2xl 2xl:rounded-tr-md rounded-b-2xl">
            <div className="flex items-center gap-3 mx-auto md:mx-0">
              <ToolboxIcon width={44} height={44} color={`#FFD900`} />
              <img src={Images.logoToolbox} alt="logo" />
            </div>
            <div className="py-5 text-sm leading-5 ">
              Toolboxes are unrevealed NFTs and are opened in the garage to
              reveal the power-up. There are 3 colors of toolboxes: Bronze,
              Silver, and Gold. Power-ups available are Power, Handling, Boost,
              and Tires. Opened toolboxes can be applied to a NFV in the garage.
            </div>
            <div className="border-b border-dashed border-[#2EA0DC] my-2"></div>
            <div className="grid grid-cols-none gap-1 py-2 sm:grid-cols-12">
              <div className="col-span-5">
                <div className=" text-lg leading-5 text-[#21D0FF]">
                  Market Place:
                </div>
                <div className="flex items-center gap-1 py-1">
                  <img src={Images.iconAhill} alt="" className="w-7 h-7" />
                  <div className="border-r border-[#5B7D82] w-px h-5 mx-1"></div>
                  <div className="bg-black w-7 h-7 flex items-center justify-center rounded-full shadow-[0_0_7px_rgba(0,163,255,0.8)]">
                    <img
                      src={Images.logoMCV}
                      alt="icon_mcv"
                      className="w-5 h-5"
                    />
                  </div>
                  <div className=" text-xl leading-3 tracking-[0.8px] text-white text-shadow-blue mt-2 uppercase whitespace-nowrap">
                    {priceMc} <span className="text-xs">mcv</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 py-1">
                  <img src={Images.iconGville} alt="" className="w-7 h-7" />
                  <div className="border-r border-[#5B7D82] w-px h-5 mx-1"></div>
                  <div className="bg-black w-7 h-7 flex items-center justify-center rounded-full shadow-[0_0_7px_rgba(0,163,255,0.8)]">
                    <img
                      src={Images.logoMCV}
                      alt="icon_mcv"
                      className="w-5 h-5"
                    />
                  </div>
                  <div className=" text-xl leading-3 tracking-[0.8px] text-white text-shadow-blue mt-2 uppercase whitespace-nowrap">
                    {priceSc} <span className="text-xs">mcv</span>
                  </div>
                </div>
              </div>
              <div className="grid col-span-7 gap-2 sm:gap-1 sm:grid-cols-2">
                <div>
                  <div className=" text-[10px] leading-3 text-[#00CAFF] tracking-[1px] text-shadow-blue uppercase">
                    toolboxes minted
                  </div>
                  <div className=" text-2xl leading-3 text-whtie tracking-[1px] text-shadow-blue mt-2">
                    {(2234).toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className=" text-[10px] leading-3 text-[#00CAFF] tracking-[1px] text-shadow-blue uppercase">
                    gold toolboxes minted
                  </div>
                  <div className=" text-2xl leading-3 text-whtie tracking-[1px] text-shadow-blue mt-2">
                    {(234).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-dashed border-[#2EA0DC] my-2"></div>
            <div className="grid gap-2 py-2 sm:grid-cols-3">
              <div>
                <div className=" font-medium text-lg leading-5 text-[#FFD900] pb-2">
                  Levels
                </div>
                <div className="py-2">
                  <div className=" font-medium text-[10px] leading-3 tracking-[1px] text-[#F3B14D] text-shadow-blue">
                    BRONZE
                  </div>
                  <div className=" font-medium text-2xl leading-3 tracking-[1px] text-white text-shadow-blue mt-2">
                    + 1
                  </div>
                </div>
                <div className="py-2">
                  <div className=" font-medium text-[10px] leading-3 tracking-[1px] text-[#E0E0E0] text-shadow-blue">
                    SILVER
                  </div>
                  <div className=" font-medium text-2xl leading-3 tracking-[1px] text-white text-shadow-blue mt-2">
                    + 2
                  </div>
                </div>
                <div className="py-2">
                  <div className=" font-medium text-[10px] leading-3 tracking-[1px] text-[#FFD900] text-shadow-blue">
                    GOLD
                  </div>
                  <div className=" font-medium text-2xl leading-3 tracking-[1px] text-white text-shadow-blue mt-2">
                    + 3
                  </div>
                </div>
              </div>
              <div className="border-y border-x-0 sm:border-x sm:border-y-0 border-dashed border-[#FFD900] sm:px-2">
                <div className=" font-medium text-lg leading-5 text-[#FFD900] pb-2">
                  Power-ups
                </div>
                <div className="flex items-center gap-3 py-1.5">
                  <div className="w-10 h-10 bg-[#8F00FF] rounded-full flex items-center justify-center">
                    <PowerIcon width={28} height={28} />
                  </div>
                  <div className="text-xs font-medium leading-3 text-white ">
                    Power
                  </div>
                </div>
                <div className="flex items-center gap-3 py-1.5">
                  <div className="w-10 h-10 bg-[#0075FF] rounded-full flex items-center justify-center">
                    <HandlingIcon width={28} height={28} />
                  </div>
                  <div className="text-xs font-medium leading-3 text-white ">
                    Handling
                  </div>
                </div>
                <div className="flex items-center gap-3 py-1.5">
                  <div className="w-10 h-10 bg-[#F8511D] rounded-full flex items-center justify-center">
                    <BoostIcon width={20} height={28} />
                  </div>
                  <div className="text-xs font-medium leading-3 text-white ">
                    Boost
                  </div>
                </div>
                <div className="flex items-center gap-3 py-1.5">
                  <div className="w-10 h-10 bg-[#2FCDA7] rounded-full flex items-center justify-center">
                    <TiresIcon width={28} height={28} />
                  </div>
                  <div className="text-xs font-medium leading-3 text-white ">
                    Tires
                  </div>
                </div>
              </div>
              <div>
                <div className=" font-medium text-lg leading-5 text-[#FFD900] pb-2">
                  100% Burn
                </div>
                <div className="text-xs font-medium leading-3 tracking-wider text-white ">
                  All funds generated from toolbox minting are burned to a dead
                  wallet.
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:col-span-4 3xl:col-span-2 bg-black bg-opacity-50 border-[0.5px] border-[#80C9FF] rounded-xl md:ml-4 3xl:ml-0 p-6">
            <div className=" text-lg leading-5 text-[#21D0FF]">
              What type of Toolbox would you like to mint?
            </div>
            <div className="flex flex-wrap items-center gap-4 py-2">
              <div
                className={`${
                  toolboxMode === "super"
                    ? "border-[#FFCE0D]"
                    : "border-[#547076] hover:border-[#FFCE0D] opacity-40 cursor-pointer"
                } border bg-black bg-opacity-10 rounded-md flex flex-col sm:flex-row items-center gap-2 py-2 px-4`}
                onClick={() => handleSelectMode("super")}
              >
                <img src={Images.iconGville} alt="" className="w-5" />
                <img src={Images.logoSuperCar} alt="" className="w-40" />
                <div className="border-b w-full sm:border-r sm:border-b-0 sm:h-11 sm:w-px border-[#5B7D82] mx-1"></div>
                <div>
                  <div className="text-xs leading-5 text-white uppercase ">
                    cost:
                  </div>
                  <div className="text-lg leading-5 text-white uppercase ">
                    <span className="font-bold">{priceSc}</span> mcv
                  </div>
                </div>
              </div>
              <div
                className={`${
                  toolboxMode === "muscle"
                    ? "border-[#FFCE0D]"
                    : "border-[#547076] hover:border-[#FFCE0D] opacity-40 cursor-pointer"
                } border bg-black bg-opacity-10 rounded-md flex flex-col sm:flex-row items-center gap-2 py-2 px-4`}
                onClick={() => handleSelectMode("muscle")}
              >
                <img src={Images.iconAhill} alt="" className="w-6" />
                <img src={Images.logoMuscleCar} alt="" className="w-40" />
                <div className="border-b w-full sm:border-r sm:border-b-0 sm:h-11 sm:w-px border-[#5B7D82] mx-1"></div>
                <div>
                  <div className="text-xs leading-5 text-white uppercase ">
                    cost:
                  </div>
                  <div className="text-lg leading-5 text-white uppercase ">
                    <span className="font-bold">{priceMc}</span> mcv
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-dashed border-[#2EA0DC] my-4"></div>

            <div className=" text-lg leading-5 text-[#21D0FF]">
              How many Toolboxes would you like to mint?
            </div>
            <div className="py-1 text-sm leading-5 text-white ">
              You may mint a max of 10 per transaction.
            </div>
            <div className="border-b border-dashed border-[#2EA0DC] my-4"></div>
            <div className="grid grid-cols-5 gap-2 py-2 sm:grid-cols-10 md:grid-cols-10 xl:grid-cols-5 2xl:grid-cols-10">
              {[...Array(10)].map((_, index) => {
                index += 1;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center w-full"
                  >
                    <button
                      type="button"
                      onClick={() => handleClickTicket(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(numBoxToBuy)}
                      className="w-full h-full bg-transparent border-none outline-none cursor-pointer"
                    >
                      {index <= numBoxToBuy ? (
                        <img
                          src={Images.toolboxActive}
                          alt="car"
                          loading="lazy"
                          className="w-full border border-[#FFD900] rounded-md"
                        />
                      ) : (
                        <div
                          className={`bg-black border border-white rounded-md flex items-center justify-center w-full p-2 xl:p-4 aspect-square`}
                        >
                          <img
                            src={Images.iconToolbox}
                            alt="icon_toolbox"
                            className={`w-full ${
                              index <= hover ? "opacity-100" : "opacity-30"
                            }`}
                            loading="lazy"
                          />
                        </div>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
            <div className=" text-sm leading-5 text-[#FFCE0D] py-0.5">
              {numBoxToBuy}{" "}
              {toolboxMode === "muscle" ? "MuscleCar" : "SuperCar"} Toolboxes
              Selected
            </div>
            <div className="border-b border-dashed border-[#2EA0DC] my-4"></div>
            <div className="items-center gap-4 sm:flex">
              <div className=" text-lg leading-5 text-[#21D0FF]">Pay With:</div>
              <div
                className={`bg-[black] bg-opacity-10 border border-[#FFCE0D] rounded-md p-3 my-2 w-fit flex items-center flex-col sm:flex-row`}
              >
                <div>
                  <div className="flex items-center gap-2 py-1">
                    <div className="bg-black w-7 h-7 flex items-center justify-center rounded-full shadow-[0_0_7px_rgba(0,163,255,0.8)]">
                      <img
                        src={Images.logoMCV}
                        alt="icon_mcv"
                        className="w-5 h-5"
                      />
                    </div>
                    <div className="text-2xl leading-5 text-white uppercase ">
                      mcv
                    </div>
                  </div>
                  <div className="text-sm leading-5 text-white ">
                    Bal:{" "}
                    {mcvBalance && (+mcvBalance).toLocaleString()}
                  </div>
                </div>
                <div className="border-b w-full sm:border-r sm:border-b-0 sm:h-11 sm:w-px border-[#5B7D82] mx-2"></div>
                <div className={` leading-5 text-white`}>
                  <div className="text-lg">
                    <span className="font-bold">{numBoxToBuy} Toolboxes</span> x
                    {price[toolboxMode]} MCV
                  </div>
                  <div className="text-sm">
                    You will pay:{" "}
                    {(numBoxToBuy * price[toolboxMode]).toLocaleString()} MCV
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-dashed border-[#2EA0DC] my-4"></div>
            <div className="items-center gap-4 sm:flex">
              <div className=" text-lg leading-5 text-[#21D0FF]">Checkout:</div>
              <div className="flex flex-col justify-between gap-10 py-3 sm:flex-row grow">
                <div className="flex flex-col gap-8 sm:flex-row">
                  <div>
                    <div className=" text-[10px] leading-3 tracking-[1px] text-[#00CAFF] text-shadow-blue">
                      PAYING WITH
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="bg-black w-7 h-7 flex items-center justify-center rounded-full shadow-[0_0_7px_rgba(0,163,255,0.8)]">
                        <img
                          src={Images.logoMCV}
                          alt="icon_mcv"
                          className="w-5 h-5"
                        />
                      </div>
                      <div className="text-lg font-bold leading-5 text-white uppercase ">
                        mcv
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className=" text-[10px] leading-3 tracking-[1px] text-[#00CAFF] text-shadow-blue">
                      TOOLBOXES SELECTED
                    </div>
                    <div className="mt-2 text-3xl leading-4 tracking-[1px] text-white text-shadow-blue uppercase ">
                      {numBoxToBuy}
                    </div>
                  </div>
                  <div>
                    <div className=" text-[10px] leading-3 tracking-[1px] text-[#00CAFF] text-shadow-blue">
                      TOTAL
                    </div>
                    <div className="mt-2 text-3xl leading-4 tracking-[1px] text-white uppercase ">
                      <span className="text-shadow-blue">
                        {(numBoxToBuy * price[toolboxMode]).toLocaleString()}
                      </span>{" "}
                      <span className="text-lg leading-5 ">mcv</span>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    className="border-2 border-[#00C6FB] rounded-tr-lg rounded-bl-lg hover:bg-cyan-700 hover:bg-opacity-30 text-center  font-bold text-lg leading-3 tracking-[1px] text-[#21D0FF] uppercase px-4 3xl:px-6 py-2.5"
                    onClick={() => handleMint()}
                  >
                    {minting ? (
                      <PulseLoader
                        color="#21D0FF"
                        size={10}
                        className="px-6 mx-auto"
                      />
                    ) : (
                      <div className="items-center gap-3 sm:flex">
                        <img
                          src={Images.iconMint}
                          alt=""
                          className="w-8 h-8 mx-auto"
                        />
                        <div className="mt-2 text-center sm:mt-0">
                          mint my toolboxes
                        </div>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speedshop;
