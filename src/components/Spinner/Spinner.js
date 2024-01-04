import React from "react";
import { useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";

const Spinner = () => {
  const isLoading = useSelector((state) => state.globalInfo.isLoading);

  return (
    <>
      {isLoading ? (
        <div
          className="fixed inset-0 z-[101]"
          style={{ background: "rgba(0,0,0,0.9)" }}
        >
          <div className="flex items-center justify-center min-h-screen">
            <div>
              <PulseLoader color="#00E0FF" size={20} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Spinner;
