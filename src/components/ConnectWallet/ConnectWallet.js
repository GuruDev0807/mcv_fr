import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const ConnectWallet = () => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, mounted, openConnectModal, openChainModal }) => {
        const connected = mounted && account && chain;

        return (
          <>
            {!connected ? (
              <button
                className="font-bold text-[10px] leading-3 text-center tracking-[2px] bg-[#FFCE0D] hover:bg-opacity-80 rounded-2xl py-2 px-3 mx-auto mt-5"
                onClick={openConnectModal}
              >
                CONNECT YOUR WALLET
              </button>
            ) : chain.unsupported ? (
              <div
                className="font-bold text-[10px] leading-3 text-center tracking-[2px] bg-[#D9D9D9] rounded-2xl py-2 px-3 cursor-pointer mx-auto mt-5"
                onClick={openChainModal}
              >
                WRONG NETWORK
              </div>
            ) : (
              <></>
            )}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ConnectWallet;
