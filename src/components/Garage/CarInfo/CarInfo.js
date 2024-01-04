import React from "react";

import CarDetail from "./CarDetail";
import CarParts from "./CarParts";

const CarInfo = ({ info, isUpgrading, handleHireMechanic }) => {
  return (
    <>
      {info ? (
        <div className="2xl:pr-[6vw]">
          <CarDetail info={info} />
          <div className="p-3 mt-2 bg-gradient-blue border-[#80C9FF] border rounded-[10px]">
            <div className="flex items-center uppercase gap-9">
              <div className="text-[#23D0FF] font-bold text-sm leading-3 tracking-[2px] text-shadow-blue">
                {info.type === "muscle" ? "parts" : "pit crew"}
              </div>
              {/* <div className="text-white font-medium text-xs leading-3 tracking-[2px] text-shadow-blue">
                performance
              </div>
              <div className="text-white font-medium text-xs leading-3 tracking-[2px] text-shadow-blue">
                inventory
              </div> */}
            </div>
            <div className="my-3 border-b border-white border-dashed"></div>
            <CarParts
              info={info}
              isUpgrading={isUpgrading}
              handleHireMechanic={handleHireMechanic}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CarInfo;
