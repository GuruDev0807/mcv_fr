import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Spinner from "../../components/Spinner";
import ConnectWallet from "../../components/ConnectWallet";
import { useWeb3 } from "../../Hooks";

const Layout = () => {
  const { isConnected } = useWeb3();
  return (
    <div className="flex flex-col main">
      <Header />
      {isConnected ? <Outlet /> : <ConnectWallet />}
      <Sidebar />
      <Footer />
      <Spinner />
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Layout;
