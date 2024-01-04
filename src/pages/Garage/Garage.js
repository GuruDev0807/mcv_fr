import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import { Listbox, Transition } from "@headlessui/react";

import CarInfo from "../../components/Garage/CarInfo";
import {
  GarageIcon,
  ArrowDownIcon,
  GridViewIcon,
  ListViewIcon,
} from "../../components/Icons";
import { setLoading } from "../../reducers/globalInfoSlice";

import {
  carAddress,
  superCarAddress,
  superCarEarnAddress,
  earnAddress,
  multiCallAddress,
  mcvAddress,
} from "../../contracts/address";
import tokenABI from "../../contracts/abis/MCVToken.json";
import carABI from "../../contracts/abis/Nfv.json";
import lamboABI from "../../contracts/abis/Wenlambo/Wenlambo.json";
import earnABI from "../../contracts/abis/Earn.json";
import multiCallABI from "../../contracts/abis/MultiCall.json";

import { earnSpeedByStage } from "../../components/Garage/constants";
import GarageListView from "../../components/Garage/GarageListView";
import GarageGridView from "../../components/Garage/GarageGridView";
import { useWeb3 } from "../../Hooks";

const modifyCarInfo = (info, type) => {
  return info.map(({ id, data }) => {
    let earnSpeed = 1;
    let stage = 0;
    const stageLevel = +data.location.stage.toString();
    const substage = +data.location.substage.toString();
    if (type === "super") {
      if (data.onStages) {
        earnSpeed = 2;
        if (stageLevel === 1) {
          earnSpeed = earnSpeed + substage + 1;
          stage = 1 + substage;
        } else if (stageLevel === 2) {
          earnSpeed = earnSpeed + 4 + 2 * (substage + 1);
          stage = 5 + substage;
        } else if (stageLevel === 3) {
          earnSpeed = earnSpeed + 12 + 4 * (substage + 1);
          stage = 9 + substage;
        }
      }
    }
    if (type === "muscle") {
      if (data.onStages) {
        earnSpeed = 2;
        if (stageLevel === 1) {
          earnSpeed = earnSpeed + 2 * (substage + 1);
          stage = 1 + substage;
        } else if (stageLevel === 2) {
          earnSpeed = earnSpeed + 8 + 2 * (substage + 1);
          stage = 5 + substage;
        } else if (stageLevel === 3) {
          earnSpeed = earnSpeed + 16 + 4 * (substage + 1);
          stage = 9 + substage;
        }
      }
    }
    return {
      id,
      lockedTotal: +ethers.utils.formatEther(data.locked),
      isHired: data.onStages,
      stage,
      stageLevel,
      totalClaimed: +ethers.utils.formatEther(data.nfv.totalClaimed),
      totalInterestClaimed: +ethers.utils.formatEther(
        data.nfv.totalInterestClaimed
      ),
      earnSpeed,
      interestable: +ethers.utils.formatEther(data.interestable),
      claimable:
        +ethers.utils.formatEther(data.claimable) +
        +ethers.utils.formatEther(data.unlockedClaimable) +
        +ethers.utils.formatEther(data.lockedClaimable),
      unlockable: +ethers.utils.formatEther(data.unlockable),
      unlockedClaimable: +ethers.utils.formatEther(data.unlockedClaimable),
      type,
    };
  });
};

const getTextColor = (isActive) => {
  return isActive ? "text-white" : "text-[#33D4FF]";
};

const earnAddresses = {
  muscle: earnAddress,
  super: superCarEarnAddress,
};

const sortBy = [
  { name: "MINT #", value: "tokenId" },
  { name: "DAILY EARN", value: "earn" },
  { name: "LOCKED", value: "locked" },
  { name: "UNLOCKED", value: "unlocked" },
  { name: "CLAIM", value: "claim" },
];

const Garage = () => {
  const navigate = useNavigate();
  const params = useLocation();
  const { address } = useWeb3()

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.globalInfo.isLoading);

  const [multiCallContract, setMultiCallContract] = useState(null);
  const [muscleCarContract, setMuscleCarContract] = useState(null);
  const [superCarContract, setSuperCarContract] = useState(null);
  const [mcEarnContract, setMcEarnContract] = useState(null);
  const [scEarnContract, setScEarnContract] = useState(null);
  const [mcvContract, setMcvContract] = useState(null);

  const [muscleCarIDs, setMuscleCarIDs] = useState([]);
  const [superCarIDs, setSuperCarIDs] = useState([]);
  const [muscleCarInfo, setMuscleCarInfo] = useState([]);
  const [superCarInfo, setSuperCarInfo] = useState([]);
  const [selectedCarInfo, setSelectedCarInfo] = useState(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isUpgrading, setIsUpgrading] = useState(false);
  const [collection, setCollection] = useState("all");
  const [selectedSort, setSelectedSort] = useState(sortBy[0]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [nfv, setNfv] = useState([]);
  const [viewMode, setViewMode] = useState("list");

  const earnContracts = useMemo(
    () => ({
      muscle: mcEarnContract,
      super: scEarnContract,
    }),
    [mcEarnContract, scEarnContract]
  );

  const handleToggleViewMode = useCallback(() => {
    const newViewMode = viewMode === "list" ? "grid" : "list";
    setViewMode(newViewMode);
  }, [viewMode]);

  const handleSelectCar = useCallback(
    (tokenId, type) => {
      let earnInfo = null;
      if (type === "muscle") {
        earnInfo = muscleCarInfo.find(({ id }) => +id === +tokenId);
      }
      if (type === "super") {
        earnInfo = superCarInfo.find(({ id }) => +id === +tokenId);
      }

      setSelectedCarInfo({
        id: tokenId,
        earnInfo,
        type,
      });
    },
    [muscleCarInfo, superCarInfo]
  );

  const handleSort = useCallback(
    (data, sortKey, isFirstLoad = false) => {
      let sorted = [];
      let newOrder = sortOrder === "asc" ? "desc" : "asc";
      const keys = {
        tokenId: "id",
        earn: "earnSpeed",
        locked: "lockedTotal",
        unlocked: "unlockableClaimable",
        claim: "claimable",
      };
      if (newOrder === "asc") {
        sorted = data.sort((a, b) => a[keys[sortKey]] - b[keys[sortKey]]);
      } else {
        sorted = data.sort((a, b) => b[keys[sortKey]] - a[keys[sortKey]]);
      }

      setSortOrder(newOrder);
      setNfv(sorted);

      if (isFirstLoad) {
        if (sorted.length) {
          setSelectedCarInfo({
            id: sorted[0].id,
            earnInfo: sorted[0],
            type: sorted[0].type,
          });
        } else {
          setSelectedCarInfo(null);
        }
      }
    },
    [sortOrder]
  );

  const handleClickSort = useCallback(
    (sortKey) => {
      if (sortKey === "tokenId") setSelectedSort(sortBy[0]);
      if (sortKey === "earn") setSelectedSort(sortBy[1]);
      if (sortKey === "locked") setSelectedSort(sortBy[2]);
      if (sortKey === "unlocked") setSelectedSort(sortBy[3]);
      if (sortKey === "claim") setSelectedCarInfo(sortBy[4]);

      handleSort(nfv, sortKey);
    },
    [handleSort, nfv]
  );

  const handleSelectCollection = useCallback(
    (type) => {
      setCollection(type);

      let data = [];
      if (type === "all") data = [...muscleCarInfo, ...superCarInfo];
      if (type === "muscle") data = [...muscleCarInfo];
      if (type === "super") data = [...superCarInfo];
      handleSort(data, selectedSort.value, true);
    },
    [handleSort, muscleCarInfo, selectedSort, superCarInfo]
  );

  const getAllInfo = useCallback(
    async (
      muscleCarContract,
      mcEarnContract,
      multiCallContract,
      superCarContract,
      scEarnContract
    ) => {
      try {
        dispatch(setLoading(true));

        let mcInfo = [];
        let scInfo = [];
        const muscleCarIDs = await muscleCarContract.tokensOfOwner(address);
        if (muscleCarIDs.length) {
          const myCarIDs = muscleCarIDs.map((each) => each.toString());
          // console.log("ids\n", myCarIDs);
          setMuscleCarIDs(myCarIDs);
          const inputGetCar = myCarIDs.map((id) => ({
            target: mcEarnContract.address,
            callData: mcEarnContract.interface.encodeFunctionData(
              "getInformation",
              [id]
            ),
          }));
          const txGetCar = await multiCallContract.aggregate(inputGetCar);
          const dataGetCar = txGetCar.returnData.map((returnData, index) => ({
            id: myCarIDs[index],
            data: mcEarnContract.interface.decodeFunctionResult(
              "getInformation",
              returnData
            )[0],
          }));
          mcInfo = modifyCarInfo(dataGetCar, "muscle");
          setMuscleCarInfo(mcInfo);
        }

        const superCarIDs = await superCarContract.tokensOfOwner(address);
        if (superCarIDs.length) {
          const mySuperCarIds = superCarIDs
            .map((id) => id.toString())
            .sort((a, b) => a - b);
          setSuperCarIDs(mySuperCarIds);
          // console.log("lamboIDs: ", mySuperCarIds);
          const inputGetCar = mySuperCarIds.map((id) => ({
            target: scEarnContract.address,
            callData: scEarnContract.interface.encodeFunctionData(
              "getInformation",
              [id]
            ),
          }));
          const txGetCar = await multiCallContract.aggregate(inputGetCar);
          const dataGetCar = txGetCar.returnData.map((returnData, index) => ({
            id: mySuperCarIds[index],
            data: scEarnContract.interface.decodeFunctionResult(
              "getInformation",
              returnData
            )[0],
          }));
          scInfo = modifyCarInfo(dataGetCar, "super");
          setSuperCarInfo(scInfo);
        }

        handleSort([...mcInfo, ...scInfo], selectedSort.value, true);

        dispatch(setLoading(false));
        setIsLoaded(true);
      } catch (error) {
        toast.error("Something went wrong, please refresh your browser");
        dispatch(setLoading(false));
      }
    },
    [address, dispatch, handleSort, selectedSort.value]
  );

  const getEarnInfo = useCallback(
    async (type, num) => {
      try {
        let data = [];
        if (type === "super") {
          const inputGetCar = superCarIDs.map((id) => ({
            target: scEarnContract.address,
            callData: scEarnContract.interface.encodeFunctionData(
              "getInformation",
              [id]
            ),
          }));
          const txGetCar = await multiCallContract.aggregate(inputGetCar);
          data = txGetCar.returnData.map((returnData, index) => ({
            id: superCarIDs[index],
            data: scEarnContract.interface.decodeFunctionResult(
              "getInformation",
              returnData
            )[0],
          }));
        }
        if (type === "muscle") {
          const inputGetCar = muscleCarIDs.map((id) => ({
            target: mcEarnContract.address,
            callData: mcEarnContract.interface.encodeFunctionData(
              "getInformation",
              [id]
            ),
          }));
          const txGetCar = await multiCallContract.aggregate(inputGetCar);
          data = txGetCar.returnData.map((returnData, index) => ({
            id: muscleCarIDs[index],
            data: mcEarnContract.interface.decodeFunctionResult(
              "getInformation",
              returnData
            )[0],
          }));
        }
        const earnInfo = modifyCarInfo(data, type);
        const foundEarnInfo = earnInfo.find(
          ({ id }) => +id === +selectedCarInfo.id
        );

        if (+selectedCarInfo.earnInfo.earnSpeed === +foundEarnInfo.earnSpeed) {
          let updatedSelectedCarInfo = {};
          if (!selectedCarInfo.earnInfo.isHired) {
            console.log("not hired");
            updatedSelectedCarInfo = {
              ...selectedCarInfo.earnInfo,
              isHired: true,
              earnSpeed: 2,
            };
          } else {
            const { stage, stageLevel, earnSpeed } =
              earnSpeedByStage[selectedCarInfo.earnInfo.stage + num];
            updatedSelectedCarInfo = {
              ...selectedCarInfo.earnInfo,
              stage,
              stageLevel,
              earnSpeed,
            };
          }
          if (type === "muscle") {
            const updatedInfo = muscleCarInfo.map((item) =>
              +item.id === +selectedCarInfo.id ? updatedSelectedCarInfo : item
            );
            setMuscleCarInfo(updatedInfo);
          }
          if (type === "super") {
            const updatedInfo = superCarInfo.map((item) =>
              +item.id === +selectedCarInfo.id ? updatedSelectedCarInfo : item
            );
            setSuperCarInfo(updatedInfo);
          }
          const updatedNfvInfo = [...nfv].map((item) =>
            +item.id === +selectedCarInfo.id ? updatedSelectedCarInfo : item
          );
          setNfv(updatedNfvInfo);
          handleSort(updatedNfvInfo, selectedSort.value);
          setSelectedCarInfo({
            ...selectedCarInfo,
            earnInfo: updatedSelectedCarInfo,
          });
        } else {
          if (type === "muscle") {
            const updatedInfo = muscleCarInfo.map((item) =>
              +item.id === +selectedCarInfo.id ? foundEarnInfo : item
            );
            setMuscleCarInfo(updatedInfo);
          }
          if (type === "super") {
            const updatedInfo = superCarInfo.map((item) =>
              +item.id === +selectedCarInfo.id ? foundEarnInfo : item
            );
            setSuperCarInfo(updatedInfo);
          }
          const updatedNfvInfo = nfv.map((item) =>
            +item.id === +selectedCarInfo.id ? foundEarnInfo : item
          );
          setNfv(updatedNfvInfo);
          handleSort(updatedNfvInfo, selectedSort.value);
          setSelectedCarInfo({
            ...selectedCarInfo,
            earnInfo: foundEarnInfo,
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    [
      handleSort,
      mcEarnContract,
      multiCallContract,
      muscleCarIDs,
      muscleCarInfo,
      nfv,
      scEarnContract,
      selectedCarInfo,
      selectedSort.value,
      superCarIDs,
      superCarInfo,
    ]
  );
  const handleSearch = useCallback(
    (searchValue) => {
      let origin = [];
      if (collection === "all") origin = [...muscleCarInfo, ...superCarInfo];
      if (collection === "muscle") origin = [...muscleCarInfo];
      if (collection === "super") origin = [...superCarInfo];

      if (searchValue !== "") {
        let searched = [];

        searched = origin.filter(({ id }) =>
          id.toString().includes(searchValue.toString())
        );
        handleSort(searched, selectedSort.value, false);
      } else {
        handleSort(origin, selectedSort.value, false);
      }
    },
    [collection, handleSort, muscleCarInfo, selectedSort.value, superCarInfo]
  );

  const handleClaim = useCallback(() => {
    navigate("/bank");
  }, [navigate]);

  const handleHireMechanic = useCallback(
    async (tokenId, num, type) => {
      try {
        setIsUpgrading(true);
        const mcvAllowance = await mcvContract.allowance(
          address,
          earnAddresses[type]
        );
        console.log("MCV allowance\n", mcvAllowance.toString());
        if (parseInt(ethers.utils.formatEther(mcvAllowance)) < 2000) {
          const res = await mcvContract.approve(
            earnAddresses[type],
            ethers.utils.parseEther("99999999999999")
          );
          await res.wait();
        }
        console.log(tokenId);
        if (num === 0) {
          const tx = await earnContracts[type].upgrade(tokenId);
          const result = await tx.wait();
          console.log("result ", result);
        }
        if (num > 0) {
          const ids = Array(num).fill(tokenId);
          console.log("MULTI PARTS: ", ids);
          const tx = await earnContracts[type].upgradeMultiple(ids);
          const result = await tx.wait();
          console.log("result ", result);
        }
        setTimeout(() => {
          getEarnInfo(type, num);
          setIsUpgrading(false);
          const msg = {
            muscle: "Successfully upgraded your parts",
            super: "Successfully hired your pit crew",
          };
          toast.success(msg[type]);
        }, 10000);
      } catch (error) {
        console.log(error);
        if (error.toString().includes("transfer amount exceeds balance"))
          toast.error("Not enough funds");
        else toast.error("Something went wrong, please try again");
        setIsUpgrading(false);
      }
    },
    [address, earnContracts, mcvContract, getEarnInfo]
  );

  useEffect(() => {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const mcvContract = new ethers.Contract(mcvAddress, tokenABI, signer);
    setMcvContract(mcvContract);
    const mcEarnContract = new ethers.Contract(earnAddress, earnABI, signer);
    setMcEarnContract(mcEarnContract);
    const muscleCarContract = new ethers.Contract(carAddress, carABI, signer);
    setMuscleCarContract(muscleCarContract);
    const superCarContract = new ethers.Contract(
      superCarAddress,
      lamboABI,
      signer
    );
    setSuperCarContract(superCarContract);
    const scEarnContract = new ethers.Contract(
      superCarEarnAddress,
      earnABI,
      signer
    );
    setScEarnContract(scEarnContract);
    const multiCallContract = new ethers.Contract(
      multiCallAddress,
      multiCallABI,
      signer
    );
    setMultiCallContract(multiCallContract);

    getAllInfo(
      muscleCarContract,
      mcEarnContract,
      multiCallContract,
      superCarContract,
      scEarnContract
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isLoading && isLoaded) {
      const { state } = params;
      if (state) handleSelectCar(state.id, state.type);
    }
  }, [isLoaded, handleSelectCar, isLoading, params]);

  return (
    <div className="mx-4 mt-8 md:ml-[13vw] md:mr-0 2xl:mb-4 text-white">
      <div className="relative pb-4 mb-10 md:pb-20 md:mb-24 2xl:pb-12 2xl:mb-12 callout-bg">
        <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-black border border-[#009EFF] shadow-[0_0_9px_rgba(77,201,255,0.9)] hidden md:flex items-center justify-center">
          <GarageIcon width={32} height={32} />
        </div>
        <div className="hidden ml-1 sm:ml-6 md:ml-24 md:flex md:items-center md:justify-between md:mr-[14vw] h-16">
          <div className="md:flex md:items-center">
            <div
              className="font-bold text-xl text-[#33D4FF] leading-4 tracking-[2.4px] uppercase"
              style={{ textShadow: "0px 0px 5px rgba(50, 171, 252, 0.98)" }}
            >
              my garage
            </div>
            <div className="w-px border border-r border-dashed border-[#FFD900] h-6 rotate-[30deg] mx-1 sm:mx-4"></div>
            <div className="text-white text-[10px] font-medium tracking-[2px] uppercase text-shadow-blue">
              {(muscleCarIDs.length + superCarIDs.length).toLocaleString()}{" "}
              non-fungible vehicles
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:pr-4 2xl:grid-cols-2">
          <div>
            <div className="flex flex-col items-center gap-2 mx-auto mt-2 md:flex-row md:ml-10 sm:gap-3">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => handleSelectCollection("all")}
              >
                <div
                  className={`${getTextColor(
                    collection === "all"
                  )} text-2xl leading-none getTextColorfont-roboto`}
                  style={{ textShadow: "0px 0px 4px #00A8FF" }}
                >
                  {(muscleCarIDs.length + superCarIDs.length).toLocaleString()}
                </div>
                <div className="ml-1 ">
                  <div
                    className={`${getTextColor(
                      collection === "all"
                    )} text-white text-[10px] leading-3 tracking-[1.56px] uppercase text-shadow-blue`}
                  >
                    total
                  </div>
                  <div
                    className={`${getTextColor(
                      collection === "all"
                    )} text-white text-[10px] leading-3 tracking-[1.56px] font-bold text-shadow-blue`}
                  >
                    NFV's
                  </div>
                </div>
              </div>
              <div className="w-px border border-r border-dashed border-[#FFD900] h-6 rotate-[30deg] mx-1 md:block hidden"></div>
              <div
                className="flex items-center cursor-pointer"
                onClick={() => handleSelectCollection("muscle")}
              >
                <div
                  className={`${getTextColor(
                    collection === "muscle"
                  )} text-2xl leading-none font-roboto`}
                  style={{ textShadow: "0px 0px 4px #00A8FF" }}
                >
                  {muscleCarIDs.length}
                </div>
                <div className="ml-1 ">
                  <div
                    className={`${getTextColor(
                      collection === "muscle"
                    )} text-[10px] leading-3 tracking-[1.56px] uppercase text-shadow-blue`}
                  >
                    avalanche hills
                  </div>
                  <div
                    className={`${getTextColor(
                      collection === "muscle"
                    )} text-[10px] leading-3 tracking-[1.56px] font-bold uppercase text-shadow-blue`}
                  >
                    muscle cars
                  </div>
                </div>
              </div>
              <div
                className="flex items-center cursor-pointer"
                onClick={() => handleSelectCollection("super")}
              >
                <div
                  className={`${getTextColor(
                    collection === "super"
                  )} text-2xl leading-none font-roboto`}
                  style={{ textShadow: "0px 0px 4px #00A8FF" }}
                >
                  {superCarIDs.length}
                </div>
                <div className="ml-1 ">
                  <div
                    className={`${getTextColor(
                      collection === "super"
                    )} text-[10px] leading-3 tracking-[1.56px] uppercase text-shadow-blue`}
                  >
                    grantsville
                  </div>
                  <div
                    className={`${getTextColor(
                      collection === "super"
                    )} text-[10px] leading-3 tracking-[1.56px] font-bold uppercase text-shadow-blue`}
                  >
                    super cars
                  </div>
                </div>
              </div>
              {/* <div className="flex items-center">
                <div
                  className="text-[#20CFFF] text-2xl leading-none font-roboto"
                  style={{ textShadow: "0px 0px 4px #00A8FF" }}
                >
                  22
                </div>
                <div className="ml-1 ">
                  <div
                    className="text-[#33D4FF] text-[10px] leading-3 tracking-[1.56px] uppercase"
                    style={{ textShadow: "0px 0px 3px #0080FF" }}
                  >
                    ethereal
                  </div>
                  <div
                    className="text-[#33D4FF] text-[10px] leading-3 tracking-[1.56px] font-bold uppercase"
                    style={{ textShadow: "0px 0px 3px #0080FF" }}
                  >
                    hyper bikes
                  </div>
                </div>
              </div> */}
            </div>
            <div className="border-b-[0.5px] mx-auto my-3 border-opacity-60 border-[#80C9FF]"></div>
            <div className="flex flex-col items-center justify-between gap-1 sm:flex-row md:ml-10">
              <input
                type="number"
                className="block w-full py-1 px-2 xl:py-1.5 xl:px-3 min-w-[40px] max-w-[200px] text-[10px] text-white text-shadow-blue bg-[#00A3FF] bg-opacity-10 border border-solid border-[#BDF1FF] rounded-2xl placeholder-[#B3DAE0] tracking-[2px] focus:border-cyan-800 focus:outline-none"
                min={0}
                max={9999}
                placeholder="SEARCH MINT #"
                onChange={(e) => handleSearch(e.target.value)}
              />
              <div className="flex items-center gap-2">
                <div className="uppercase text-xs tracking-[2px] text-shadow-blue">
                  sort:
                </div>
                <div className="w-32 sm:w-36">
                  <Listbox value={selectedSort} onChange={setSelectedSort}>
                    <div className="relative">
                      <Listbox.Button className="relative w-full py-1.5 pl-3 pr-6 text-xs text-left font-bold bg-[#00CAFF] hover:bg-cyan-700 rounded-2xl cursor-pointer tracking-[2px] focus:outline-none ">
                        <span className="block truncate">
                          {selectedSort.name}
                        </span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <ArrowDownIcon width={12} height={8} color="white" />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-xs rounded-md shadow-lg bg-cyan-200 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {sortBy.map((sort, sortIdx) => (
                            <Listbox.Option
                              key={sortIdx}
                              className={({ active }) =>
                                `cursor-default select-none relative py-2 pl-2 pr-4 ${
                                  active
                                    ? "text-cyan-900 bg-cyan-300"
                                    : "text-gray-900"
                                }`
                              }
                              value={sort}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate tracking-[1.6px] ${
                                      selected ? "font-bold" : "font-normal"
                                    }`}
                                  >
                                    {sort.name}
                                  </span>
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <button onClick={() => handleToggleViewMode()}>
                  <GridViewIcon
                    color={viewMode === "grid" ? "#FFAE00" : "white"}
                  />
                </button>
                <button onClick={() => handleToggleViewMode()}>
                  <ListViewIcon
                    color={viewMode === "list" ? "#FFAE00" : "white"}
                  />
                </button>
              </div>
            </div>
            <div className="pl-2 md:pl-8 pr-2 md:ml-4 mt-2 2xl:ml-0 min-h-[20vh]">
              {viewMode === "list" ? (
                <GarageListView
                  nfv={nfv}
                  selectedSort={selectedSort}
                  sortOrder={sortOrder}
                  selectedCarInfo={selectedCarInfo}
                  handleClaim={handleClaim}
                  handleClickSort={handleClickSort}
                  handleSelectCar={handleSelectCar}
                />
              ) : (
                <GarageGridView
                  nfv={nfv}
                  selectedCarInfo={selectedCarInfo}
                  handleClaim={handleClaim}
                  handleSelectCar={handleSelectCar}
                />
              )}
            </div>
          </div>
          <CarInfo
            info={selectedCarInfo}
            isUpgrading={isUpgrading}
            handleHireMechanic={handleHireMechanic}
          />
        </div>
      </div>
    </div>
  );
};

export default Garage;
