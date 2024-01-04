import { ethers } from "ethers";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import { toast } from "react-toastify";
import { useWeb3 } from "../../Hooks";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  BankIcon,
  BurnIcon,
  DepositIcon,
  DistributedIcon,
  LockedIcon,
  ProcessIcon,
  SavingInterestIcon,
  VaultIcon,
} from "../../components/Icons";
import * as Images from "../../utils/helper/image.helper";

import {
  badgeAddress,
  carAddress,
  earnAddress,
  lamboReflectionAddress,
  mcvAddress,
  multiCallAddress,
  racerAddress,
  racerReflectionAddress,
  reflectionAddress,
  superCarAddress,
  superCarEarnAddress,
  vaultAddress,
} from "../../contracts/address";

import badgeABI from "../../contracts/abis/Badge.json";
import earnABI from "../../contracts/abis/Earn.json";
import tokenABI from "../../contracts/abis/MCVToken.json";
import multiCallABI from "../../contracts/abis/MultiCall.json";
import carABI from "../../contracts/abis/Nfv.json";
import reflectionABI from "../../contracts/abis/Reflection.json";
import lamboABI from "../../contracts/abis/Wenlambo/Wenlambo.json";

import { setLoading } from "../../reducers/globalInfoSlice";

import { imgMuscleCarUrl, imgSuperCarUrl } from "../../services/api";

const imgUrls = (id, type) => {
  return type === "muscle"
    ? `${imgMuscleCarUrl}${id}`
    : `${imgSuperCarUrl}${id}`;
};

const spliceIntoChunks = (arr, chunkSize) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
};

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
      lockedClaimable: +ethers.utils.formatEther(data.lockedClaimable),
      type,
    };
  });
};

const sortBy = [
  { name: "MINT #", value: "tokenId" },
  { name: "DAILY EARN", value: "earn" },
  { name: "LOCKED", value: "locked" },
  { name: "UNLOCKED", value: "unlocked" },
  { name: "CLAIM", value: "claim" },
];

const arrowIcon = (isSelected, order) =>
  isSelected ? (
    order === "asc" ? (
      <ArrowUpIcon />
    ) : (
      <ArrowDownIcon />
    )
  ) : (
    <ArrowDownIcon color={"#66888E"} />
  );

const Bank = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { address } = useWeb3()

  const isLoading = useSelector((state) => state.globalInfo.isLoading);
  const { mcvBalance } = useSelector((state) => state.globalInfo.walletBalance)

  const [multiCallContract, setMultiCallContract] = useState(null);
  const [muscleCarContract, setMuscleCarContract] = useState(null);
  const [superCarContract, setSuperCarContract] = useState(null);
  const [mcEarnContract, setMcEarnContract] = useState(null);
  const [scEarnContract, setScEarnContract] = useState(null);
  const [mcReflectionContract, setMcReflectionContract] = useState(null);
  const [scReflectionContract, setScReflectionContract] = useState(null);
  // const [mcvContract, setMcvContract] = useState(null);
  const [racerReflectionContract, setRacerReflectionContract] = useState(null);
  const [mcvContract, setMcvContract] = useState(null);
  const [racerContract, setRacerContract] = useState(null);
  const [badgeContract, setBadgeContract] = useState(null);

  const [incomeFromRacer, setIncomeFromRacer] = useState(0);
  const [vaultBalance, setVaultBalance] = useState(0);
  const [bankInfo, setBankInfo] = useState(null);
  const [incomeByMC, setIncomeByMC] = useState(0);
  const [incomeBySC, setIncomeBySC] = useState(0);
  const [totalClaimedReflections, setTotalClaimedReflections] = useState(0);
  // const [totalSpentByMC, setTotalSpentByMC] = useState(0);
  // const [totalSpentBySC, setTotalSpentBySC] = useState(0);
  const [muscleCarIDs, setMuscleCarIDs] = useState([]);
  const [superCarIDs, setSuperCarIDs] = useState([]);
  const [muscleCarInfo, setMuscleCarInfo] = useState([]);
  const [superCarInfo, setSuperCarInfo] = useState([]);
  const [racerIDs, setRacerIDs] = useState([]);
  const [numOfBadges, setNumOfBadges] = useState(0);

  const [selectedSort, setSelectedSort] = useState(sortBy[0]);
  const [sortOrder, setSortOrder] = useState("desc");
  const [nfv, setNfv] = useState([]);

  const earnContracts = useMemo(() => {
    return {
      muscle: mcEarnContract,
      super: scEarnContract,
    };
  }, [mcEarnContract, scEarnContract]);

  const handleSort = useCallback(
    (data, sortKey) => {
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
    },
    [sortOrder]
  );

  const handleClickSort = useCallback(
    (sortKey) => {
      if (sortKey === "tokenId") setSelectedSort(sortBy[0]);
      if (sortKey === "earn") setSelectedSort(sortBy[1]);
      if (sortKey === "locked") setSelectedSort(sortBy[2]);
      if (sortKey === "unlocked") setSelectedSort(sortBy[3]);
      if (sortKey === "claim") setSelectedSort(sortBy[4]);

      handleSort(nfv, sortKey);
    },
    [handleSort, nfv]
  );

  const handleSearch = useCallback(
    (searchValue) => {
      if (searchValue !== "") {
        let searched = [];
        searched = [...muscleCarInfo, ...superCarInfo].filter(({ id }) =>
          id.toString().includes(searchValue.toString())
        );
        handleSort(searched, selectedSort.value);
      } else {
        handleSort([...muscleCarInfo, ...superCarInfo], selectedSort.value);
      }
    },
    [handleSort, muscleCarInfo, selectedSort.value, superCarInfo]
  );

  const getAllInfo = useCallback(
    async (
      muscleCarContract,
      mcEarnContract,
      multiCallContract,
      superCarContract,
      scEarnContract,
      mcReflectionContract,
      scReflectionContract,
      racerReflectionContract,
      racerContract,
      badgeContract,
      mcvContract
    ) => {
      try {
        dispatch(setLoading(true));

        const racerIds = await racerContract.tokensOfOwner(address);
        if (racerIds.length) setRacerIDs(racerIds.map((id) => id.toString()));

        const numOfBadgeIds = await badgeContract.balanceOf(address);
        setNumOfBadges(+numOfBadgeIds);

        const incomeRacerReflection =
          await racerReflectionContract.owedToWallet(address, mcvAddress);

        setIncomeFromRacer(+ethers.utils.formatEther(incomeRacerReflection));
        const distributedRacer =
          await racerReflectionContract.getTotalDistributed(mcvAddress);

        const mcvVault = await mcvContract.balanceOf(vaultAddress);

        setVaultBalance(+ethers.utils.formatEther(mcvVault));
        const depositedByMC = await mcvContract.getVolume(
          earnAddress,
          vaultAddress
        );

        const depositedBySC = await mcvContract.getVolume(
          superCarEarnAddress,
          vaultAddress
        );

        const mcInfo = await mcEarnContract.tokens(mcvAddress);
        const distributedByMC = await mcReflectionContract.getTotalDistributed(
          mcvAddress
        );

        const scInfo = await scEarnContract.tokens(mcvAddress);

        const distributedBySC = await scReflectionContract.getTotalDistributed(
          mcvAddress
        );

        setBankInfo({
          totalProcessed:
            +ethers.utils.formatEther(mcInfo.burned) +
            +ethers.utils.formatEther(mcInfo.reflected) +
            +ethers.utils.formatEther(scInfo.burned) +
            +ethers.utils.formatEther(scInfo.reflected),
          totalBurned:
            +ethers.utils.formatEther(mcInfo.burned) +
            +ethers.utils.formatEther(scInfo.burned),
          totalDistributed:
            +ethers.utils.formatEther(distributedByMC) +
            +ethers.utils.formatEther(distributedBySC) +
            +ethers.utils.formatEther(distributedRacer),
          totalDeposited:
            +ethers.utils.formatEther(depositedByMC) +
            +ethers.utils.formatEther(depositedBySC),
        });

        const mcIncome = await mcReflectionContract.owedToWallet(
          address,
          mcvAddress
        );
        setIncomeByMC(+ethers.utils.formatEther(mcIncome));

        const scIncome = await scReflectionContract.owedToWallet(
          address,
          mcvAddress
        );
        setIncomeBySC(+ethers.utils.formatEther(scIncome));

        const collectedFromMc = await mcReflectionContract.collectedByAddress(
          address
        );
        const collectedFromSc = await scReflectionContract.collectedByAddress(
          address
        );
        const collectedFromRacer =
          await racerReflectionContract.collectedByAddress(address);

        setTotalClaimedReflections(
          +ethers.utils.formatEther(collectedFromMc) +
            +ethers.utils.formatEther(collectedFromSc) +
            +ethers.utils.formatEther(collectedFromRacer)
        );

        let mcInfos = [];
        let scInfos = [];
        const muscleCarIDs = await muscleCarContract.tokensOfOwner(address);
        if (muscleCarIDs.length) {
          const myCarIDs = muscleCarIDs.map((each) => each.toString());
          setMuscleCarIDs(myCarIDs);
          // const earnData = await Promise.all(
          //   myCarIDs.map(async (id) => {
          //     const data = await mcEarnContract.getInformation(id);
          //     return { id, data };
          //   })
          // );
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

          mcInfos = modifyCarInfo(dataGetCar, "muscle");
          setMuscleCarInfo(mcInfos);
        }

        const superCarIDs = await superCarContract.tokensOfOwner(address);

        if (superCarIDs.length) {
          const mySuperCarIds = superCarIDs
            .map((id) => id.toString())
            .sort((a, b) => a - b);
          setSuperCarIDs(mySuperCarIds);
          // const earnData = await Promise.all(
          //   mySuperCarIds.map(async (id) => {
          //     const data = await scEarnContract.getInformation(id);
          //     return { id, data };
          //   })
          // );
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

          scInfos = modifyCarInfo(dataGetCar, "super");
          setSuperCarInfo(scInfos);
        }

        handleSort([...mcInfos, ...scInfos], selectedSort.value);

        dispatch(setLoading(false));
      } catch (error) {
        toast.error("Something went wrong, please refresh your browser");
        dispatch(setLoading(false));
      }
    },
    [address, dispatch, handleSort, selectedSort.value]
  );

  const handleClaim = useCallback(
    async (id, type) => {
      try {
        if (isLoading) return;
        dispatch(setLoading(true));

        const txClaim = await earnContracts[type].claim(id);
        await txClaim.wait();
        const txInterestClaim = await earnContracts[type].claimInterest(id);
        await txInterestClaim.wait();
        const carInfo = await earnContracts[type].getInformation(id);
        console.log(id, carInfo);
        setTimeout(() => {
          getAllInfo(
            muscleCarContract,
            mcEarnContract,
            multiCallContract,
            superCarContract,
            scEarnContract,
            mcReflectionContract,
            scReflectionContract,
            racerReflectionContract,
            racerContract,
            badgeContract,
            mcvContract
          );
          toast.success("Successfully claimed your rewards");
        }, 5000);
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setLoading(false));
        console.error(error);
        toast.error("Something went wrong, please try again");
      }
    },
    [
      isLoading,
      dispatch,
      earnContracts,
      getAllInfo,
      muscleCarContract,
      mcEarnContract,
      multiCallContract,
      superCarContract,
      scEarnContract,
      mcReflectionContract,
      scReflectionContract,
      racerReflectionContract,
      racerContract,
      badgeContract,
      mcvContract,
    ]
  );

  const handleClaimAll = useCallback(async () => {
    try {
      if (isLoading) return;
      dispatch(setLoading(true));

      if (muscleCarIDs.length > 50) {
        const splitedIds = spliceIntoChunks(muscleCarIDs, 50);
        await Promise.all(
          splitedIds.map(async (ids) => {
            const tx = await mcEarnContract.claimMultiple(ids);
            const result = await tx.wait();
            return result;
          })
        );
        await Promise.all(
          splitedIds.map(async (ids) => {
            const tx = await mcEarnContract.claimInterestMultiple(ids);
            const txResult = await tx.wait();
            return txResult;
          })
        );
      } else {
        const txClaim = await mcEarnContract.claimMultiple(muscleCarIDs);
        await txClaim.wait();
        const txInterestClaim = await mcEarnContract.claimInterestMultiple(
          muscleCarIDs
        );
        await txInterestClaim.wait();
      }

      if (superCarIDs.length > 50) {
        const splitedIds = spliceIntoChunks(superCarIDs, 50);
        await Promise.all(
          splitedIds.map(async (ids) => {
            const tx = await scEarnContract.claimMultiple(ids);
            const result = await tx.wait();
            return result;
          })
        );
        await Promise.all(
          splitedIds.map(async (ids) => {
            const tx = await scEarnContract.claimInterestMultiple(ids);
            const txResult = await tx.wait();
            return txResult;
          })
        );
      } else {
        const txClaim = await scEarnContract.claimMultiple(superCarIDs);
        await txClaim.wait();
        const txInterestClaim = await scEarnContract.claimInterestMultiple(
          superCarIDs
        );
        await txInterestClaim.wait();
      }

      const txCollectIncome = await mcReflectionContract.collectFromAllOwned(
        mcvAddress
      );

      const txCollectIncomeFromRacer =
        await racerReflectionContract.collectFromAllOwned(mcvAddress);
      await txCollectIncome.wait();
      await txCollectIncomeFromRacer.wait();
      const txCollectIncome3 = await scReflectionContract.collectFromAllOwned(
        mcvAddress
      );
      await txCollectIncome3.wait();
      setTimeout(() => {
        getAllInfo(
          muscleCarContract,
          mcEarnContract,
          multiCallContract,
          superCarContract,
          scEarnContract,
          mcReflectionContract,
          scReflectionContract,
          racerReflectionContract,
          racerContract,
          badgeContract,
          mcvContract
        );
        toast.success("Successfully claimed your rewards");
      }, 5000);
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
      toast.error("Something went wrong, please try again");
    }
  }, [
    badgeContract,
    dispatch,
    getAllInfo,
    isLoading,
    mcEarnContract,
    mcReflectionContract,
    mcvContract,
    multiCallContract,
    muscleCarContract,
    muscleCarIDs,
    racerContract,
    racerReflectionContract,
    scEarnContract,
    scReflectionContract,
    superCarContract,
    superCarIDs,
  ]);

  const handleReflectionClaim = useCallback(async () => {
    try {
      if (isLoading) return;
      dispatch(setLoading(true));

      const txCollectMcIncome = await mcReflectionContract.collectFromAllOwned(
        mcvAddress
      );
      await txCollectMcIncome.wait();
      const txCollectIncomeFromRacer =
        await racerReflectionContract.collectFromAllOwned(mcvAddress);
      await txCollectIncomeFromRacer.wait();
      const txCollectScIncome = await scReflectionContract.collectFromAllOwned(
        mcvAddress
      );
      await txCollectScIncome.wait();
      setTimeout(() => {
        getAllInfo(
          muscleCarContract,
          mcEarnContract,
          multiCallContract,
          superCarContract,
          scEarnContract,
          mcReflectionContract,
          scReflectionContract,
          racerReflectionContract,
          racerContract,
          badgeContract,
          mcvContract
        );
        toast.success("Successfully claimed your rewards");
      }, 5000);
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      toast.error("Something went wrong, please try again");
      console.log(error);
    }
  }, [
    badgeContract,
    dispatch,
    getAllInfo,
    isLoading,
    mcEarnContract,
    mcReflectionContract,
    mcvContract,
    multiCallContract,
    muscleCarContract,
    racerContract,
    racerReflectionContract,
    scEarnContract,
    scReflectionContract,
    superCarContract,
  ]);

  const handleGoToGarage = useCallback(
    (id, type) => {
      navigate("/garage", {
        state: {
          id,
          type,
        },
      });
    },
    [navigate]
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
    const mcReflectionContract = new ethers.Contract(
      reflectionAddress,
      reflectionABI,
      signer
    );
    setMcReflectionContract(mcReflectionContract);
    const scReflectionContract = new ethers.Contract(
      lamboReflectionAddress,
      reflectionABI,
      signer
    );
    setScReflectionContract(scReflectionContract);
    const racerReflectionContract = new ethers.Contract(
      racerReflectionAddress,
      reflectionABI,
      signer
    );
    setRacerReflectionContract(racerReflectionContract);
    const racerContract = new ethers.Contract(racerAddress, carABI, signer);
    setRacerContract(racerContract);
    const badgeContract = new ethers.Contract(badgeAddress, badgeABI, signer);
    setBadgeContract(badgeContract);

    getAllInfo(
      muscleCarContract,
      mcEarnContract,
      multiCallContract,
      superCarContract,
      scEarnContract,
      mcReflectionContract,
      scReflectionContract,
      racerReflectionContract,
      racerContract,
      badgeContract,
      mcvContract
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalUnlockedClaimable = useMemo(
    () =>
      muscleCarInfo.reduce(
        (acc, { unlockedClaimable }) => acc + unlockedClaimable,
        0
      ) +
      superCarInfo.reduce(
        (acc, { unlockedClaimable }) => acc + unlockedClaimable,
        0
      ),
    [muscleCarInfo, superCarInfo]
  );
  const totalEarnSpeed = useMemo(
    () =>
      muscleCarInfo.reduce((acc, { earnSpeed }) => acc + earnSpeed, 0) +
      superCarInfo.reduce((acc, { earnSpeed }) => acc + earnSpeed, 0),
    [muscleCarInfo, superCarInfo]
  );
  const totalClaimed = useMemo(
    () =>
      muscleCarInfo.reduce((acc, { totalClaimed }) => acc + totalClaimed, 0) +
      superCarInfo.reduce((acc, { totalClaimed }) => acc + totalClaimed, 0),
    [muscleCarInfo, superCarInfo]
  );
  const totalInterestClaimed = useMemo(
    () =>
      muscleCarInfo.reduce(
        (acc, { totalInterestClaimed }) => acc + totalInterestClaimed,
        0
      ) +
      superCarInfo.reduce(
        (acc, { totalInterestClaimed }) => acc + totalInterestClaimed,
        0
      ),
    [muscleCarInfo, superCarInfo]
  );
  const totalLocked = useMemo(
    () =>
      muscleCarInfo.reduce((acc, { lockedTotal }) => acc + lockedTotal, 0) +
      superCarInfo.reduce((acc, { lockedTotal }) => acc + lockedTotal, 0),
    [muscleCarInfo, superCarInfo]
  );
  const savingInterest = useMemo(
    () =>
      muscleCarInfo.reduce((acc, { interestable }) => acc + interestable, 0) +
      superCarInfo.reduce((acc, { interestable }) => acc + interestable, 0),
    [muscleCarInfo, superCarInfo]
  );
  const totalLockedClaimable = useMemo(
    () =>
      muscleCarInfo.reduce(
        (acc, { lockedClaimable }) => acc + lockedClaimable,
        0
      ) +
      superCarInfo.reduce(
        (acc, { lockedClaimable }) => acc + lockedClaimable,
        0
      ),
    [muscleCarInfo, superCarInfo]
  );

  return (
    <div className="mx-4 md:ml-[13vw] md:mr-0 mt-8 2xl:mb-4 text-white">
      <div className="relative pb-4 mb-10 md:pb-20 md:mb-24 2xl:pb-12 2xl:mb-12 callout-bg">
        <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-black border border-[#009EFF] shadow-[0_0_9px_rgba(77,201,255,0.9)] hidden md:flex items-center justify-center">
          <BankIcon width={32} height={32} />
        </div>
        {/* <div className="w-10 h-10 rounded-full bg-[#062A3A] border border-[#009EFF] shadow-[0_0_9px_rgba(77,201,255,0.9)] md:hidden flex items-center justify-center mr-2">
          <BankIcon width={24} height={24} />
        </div> */}
        <div className="hidden ml-1 sm:ml-6 md:ml-24 md:flex md:items-center md:justify-between md:mr-[14vw] h-16">
          <div className="md:flex md:items-center">
            <div
              className="font-raleway font-bold text-xl text-[#33D4FF] leading-4 tracking-[2.4px] uppercase"
              style={{ textShadow: "0px 0px 5px rgba(50, 171, 252, 0.98)" }}
            >
              Account Summary
            </div>
            <div className="w-px border border-r border-dashed border-[#FFD900] h-6 rotate-[30deg] mx-1 sm:mx-4"></div>
            <div className="text-sm font-medium text-white font-raleway">
              Welcome to Bank of MCVerse
            </div>
          </div>
        </div>
        <div className="gap-2 mx-auto mt-2 md:items-center md:flex md:ml-10 sm:gap-4 xl:gap-6 md:flex-wrap">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row md:justify-start sm:gap-4 xl:gap-6">
            <div className="flex items-center">
              <div
                className="text-2xl leading-none text-white font-roboto"
                style={{ textShadow: "0px 0px 4px #00A8FF" }}
              >
                {(
                  muscleCarIDs.length +
                  superCarIDs.length +
                  racerIDs.length +
                  numOfBadges
                ).toLocaleString()}
              </div>
              <div className="ml-1 font-raleway">
                <div className="text-white text-[10px] leading-3 tracking-[1.56px] uppercase text-shadow-blue">
                  mcverse
                </div>
                <div className="text-white text-[10px] leading-3 tracking-[1.56px] font-bold uppercase text-shadow-blue">
                  assets
                </div>
              </div>
            </div>
            <div className="w-px border border-r border-dashed border-[#FFD900] h-6 rotate-[30deg] mx-1 md:block hidden"></div>
            <div className="flex items-center">
              <div
                className="text-[#20CFFF] text-2xl leading-none font-roboto"
                style={{ textShadow: "0px 0px 4px #00A8FF" }}
              >
                {muscleCarIDs.length}
              </div>
              <div className="ml-1 font-raleway">
                <div className="text-[#33D4FF] text-[10px] leading-3 tracking-[1.56px] uppercase text-shadow-blue">
                  avalanche hills
                </div>
                <div className="text-[#33D4FF] text-[10px] leading-3 tracking-[1.56px] font-bold uppercase text-shadow-blue">
                  muscle cars
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div
                className="text-[#20CFFF] text-2xl leading-none font-roboto"
                style={{ textShadow: "0px 0px 4px #00A8FF" }}
              >
                {superCarIDs.length}
              </div>
              <div className="ml-1 font-raleway">
                <div className="text-[#33D4FF] text-[10px] leading-3 tracking-[1.56px] uppercase text-shadow-blue">
                  grantsville
                </div>
                <div className="text-[#33D4FF] text-[10px] leading-3 tracking-[1.56px] font-bold uppercase text-shadow-blue">
                  super cars
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div
                className="text-[#20CFFF] text-2xl leading-none font-roboto"
                style={{ textShadow: "0px 0px 4px #00A8FF" }}
              >
                {racerIDs.length}
              </div>
              <div className="ml-1 font-raleway">
                <div className="text-[#33D4FF] text-[10px] leading-3 tracking-[1.56px] uppercase text-shadow-blue">
                  mcverse
                </div>
                <div className="text-[#33D4FF] text-[10px] leading-3 tracking-[1.56px] font-bold uppercase text-shadow-blue">
                  pixel racers
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div
                className="text-[#20CFFF] text-2xl leading-none font-roboto"
                style={{ textShadow: "0px 0px 4px #00A8FF" }}
              >
                {numOfBadges}
              </div>
              <div className="ml-1 font-raleway">
                <div className="text-[#33D4FF] text-[10px] leading-3 tracking-[1.56px] uppercase text-shadow-blue">
                  wenlambo
                </div>
                <div className="text-[#33D4FF] text-[10px] leading-3 tracking-[1.56px] font-bold uppercase text-shadow-blue">
                  og badges
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center flex-grow gap-8 pt-2">
            <div className="flex items-center">
              <LockedIcon />
              <div className="ml-2">
                <div
                  className="text-white text-xs tracking-[1.56px] uppercase"
                  style={{ textShadow: "0px 0px 5px rgba(85, 211, 255, 0.84)" }}
                >
                  locked balance
                </div>
                <div
                  className="text-[#00D0FF] text-lg xl:text-2xl xl:leading-none tracking-[3px]"
                  style={{ textShadow: "0px 0px 5px rgba(85, 211, 255, 0.84)" }}
                >
                  {totalLocked.toLocaleString()}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <SavingInterestIcon />
              <div className="ml-2">
                <div
                  className="text-white text-xs tracking-[1.56px] uppercase"
                  style={{ textShadow: "0px 0px 5px rgba(85, 211, 255, 0.84)" }}
                >
                  savings interest
                </div>
                <div
                  className="text-[#00D0FF] text-lg xl:text-2xl xl:leading-none tracking-[3px] font-roboto"
                  style={{ textShadow: "0px 0px 5px rgba(85, 211, 255, 0.84)" }}
                >
                  {savingInterest.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b mx-auto md:mr-4 my-3 border-opacity-60 border-[0.5px] border-[#80C9FF]"></div>
        <div className="grid gap-8 pb-4 mt-3 md:pr-4 2xl:grid-cols-2">
          <div className="pr-2 md:pl-8 md:ml-4 2xl:ml-0">
            <div className="mb-2 md:ml-8">
              <input
                type="number"
                className="block w-full py-1 px-2 xl:py-1.5 xl:px-3 mx-auto md:mx-0 min-w-[40px] max-w-[160px] text-[10px] text-white text-shadow-blue bg-[#00A3FF] bg-opacity-10 border border-solid border-[#BDF1FF] rounded-2xl placeholder-[#B3DAE0] tracking-[2px] focus:border-cyan-800 focus:outline-none"
                min={0}
                max={9999}
                placeholder="SEARCH"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <Table className="table w-full text-xs sm:text-[10px] text-white uppercase">
              <Thead className="w-full font-raleway">
                <Tr className="text-[#33D4FF] font-bold tracking-[0.5px] table table-fixed w-full text-shadow-blue">
                  <Th className="py-3 px-0.5 text-center">nft</Th>
                  <Th className="px-0.5 text-center">collection</Th>
                  <Th className="px-0.5">
                    <div
                      className="flex items-center md:justify-center gap-0.5 px-0.5 cursor-pointer"
                      onClick={() => handleClickSort("tokenId")}
                    >
                      <div
                        className={
                          selectedSort.value === "tokenId"
                            ? "font-bold text-white"
                            : null
                        }
                      >
                        mint #
                      </div>
                      {arrowIcon(selectedSort.value === "tokenId", sortOrder)}
                    </div>
                  </Th>
                  <Th className="px-0.5">
                    <div
                      className="flex items-center md:justify-center gap-0.5 px-0.5 cursor-pointer"
                      onClick={() => handleClickSort("earn")}
                    >
                      <div
                        className={
                          selectedSort.value === "earn"
                            ? "font-bold text-white"
                            : null
                        }
                      >
                        daily earn
                      </div>
                      {arrowIcon(selectedSort.value === "earn", sortOrder)}
                    </div>
                  </Th>
                  <Th className="px-0.5">
                    <div
                      className="flex items-center md:justify-center gap-0.5 px-0.5 cursor-pointer"
                      onClick={() => handleClickSort("locked")}
                    >
                      <div
                        className={
                          selectedSort.value === "locked"
                            ? "font-bold text-white"
                            : null
                        }
                      >
                        locked
                      </div>
                      {arrowIcon(selectedSort.value === "locked", sortOrder)}
                    </div>
                  </Th>
                  <Th className="px-0.5">
                    <div
                      className="flex items-center md:justify-center gap-0.5 px-0.5 cursor-pointer"
                      onClick={() => handleClickSort("unlocked")}
                    >
                      <div
                        className={
                          selectedSort.value === "unlocked"
                            ? "font-bold text-white"
                            : null
                        }
                      >
                        unlocked
                      </div>
                      {arrowIcon(selectedSort.value === "unlocked", sortOrder)}
                    </div>
                  </Th>
                  <Th className="px-0.5">
                    <div
                      className="flex items-center md:justify-center gap-0.5 px-0.5 cursor-pointer"
                      onClick={() => handleClickSort("claim")}
                    >
                      <div
                        className={
                          selectedSort.value === "claim"
                            ? "font-bold text-white"
                            : null
                        }
                      >
                        to claim
                      </div>
                      {arrowIcon(selectedSort.value === "claim", sortOrder)}
                    </div>
                  </Th>
                  <Th className="px-0.5 text-center">actions</Th>
                </Tr>
              </Thead>
              <Tbody className="block w-full pr-1 overflow-y-auto text-center max-h-96">
                {nfv.map((item, index) => (
                  <Tr
                    className="border-[#153A51] border-b-[0.5px] last:border-0 border-opacity-70 table table-fixed w-full"
                    key={`car_${index}`}
                  >
                    <Td className="px-0.5">
                      <div className="flex items-center py-1 md:justify-center">
                        <div className="border border-solid border-[#707070] bg-gray-700 rounded-lg">
                          <img
                            src={imgUrls(item.id, item.type)}
                            alt="car"
                            className="rounded-lg w-9 h-9"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </Td>
                    <Td className="px-0.5">
                      <div className="flex items-center gap-1 md:justify-center">
                        {item.type === "muscle" && (
                          <>
                            <img
                              src={Images.iconAhill}
                              alt="icon-token"
                              className="w-3.5"
                            />{" "}
                            AMCC
                          </>
                        )}
                        {item.type === "super" && (
                          <>
                            <img
                              src={Images.iconGville}
                              alt="icon-token"
                              className="w-3.5"
                            />{" "}
                            GSC
                          </>
                        )}
                      </div>
                    </Td>
                    <Td className="px-0.5">{item.id}</Td>
                    <Td className="px-0.5">{item.earnSpeed}/day</Td>
                    <Td className="px-0.5">
                      {item.lockedTotal.toLocaleString()} mcv
                    </Td>
                    <Td className="px-0.5">
                      {item.unlockedClaimable.toLocaleString()} mcv
                    </Td>
                    <Td className="px-0.5">
                      {item.claimable.toLocaleString()} mcv
                    </Td>
                    <Td className="px-0.5">
                      <div className="flex items-center gap-3 md:justify-center">
                        <img
                          src={Images.iconActionBank}
                          alt="action_bank"
                          title="Click to claim"
                          className="cursor-pointer"
                          onClick={() => handleClaim(item.id, item.type)}
                        />
                        <img
                          src={Images.iconActionGarage}
                          alt="action_garage"
                          title="Click to go to garage"
                          className="cursor-pointer"
                          onClick={() => handleGoToGarage(item.id, item.type)}
                        />
                        {/* <img src={Images.iconActionNft} alt="action_nft" /> */}
                      </div>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </div>
          <div className="md:pl-4 2xl:pl-0">
            <div className="border border-[#80C9FF] rounded-lg p-4 bg-gradient-blue">
              <div className="flex items-center justify-between">
                <div className="text-[#00CAFF] text-xs leading-3 font-raleway tracking-[1.6px] uppercase text-shadow-blue">
                  my <span className="font-bold">account</span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={Images.iconWallet} alt="icon_wallet" />
                  <span className="font-raleway text-white text-xs leading-3 tracking-[2px] uppercase text-shadow-blue">
                    mcv balance:
                  </span>
                  <span className="text-[#00CAFF] text-lg leading-3 font-bold tracking-[2px] text-shadow-blue">
                    {mcvBalance ? Math.round(+mcvBalance).toLocaleString() : 0}
                  </span>
                </div>
              </div>
              <div className="my-3 border-t border-white border-dotted"></div>
              <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-5">
                <div className="border-[#00CAFF] sm:border-r-[6px] pr-2">
                  <div className="font-raleway text-[#00CAFF] text-[10px] leading-3 tracking-[1px] uppercase text-shadow-blue">
                    mcv to claim
                  </div>
                  <div className="text-white text-2xl leading-3 tracking-[1px] mt-2 text-shadow-blue">
                    {(
                      totalLockedClaimable +
                      totalUnlockedClaimable +
                      savingInterest +
                      incomeByMC +
                      incomeBySC +
                      incomeFromRacer
                    ).toLocaleString()}
                  </div>
                  <div className="mt-3">
                    <button
                      className="bg-[#00CAFF] hover:bg-cyan-600 text-center rounded-tr-lg rounded-bl-lg text-[#072637] font-bold text-xs leading-3 tracking-[1px] uppercase py-2 px-4"
                      onClick={() => handleClaimAll()}
                    >
                      claim all
                    </button>
                  </div>
                </div>
                <div className="border-[#00CAFF] sm:border-r pr-2">
                  <div className="font-raleway text-[#00CAFF] text-[10px] leading-3 tracking-[1px] uppercase text-shadow-blue">
                    locked to claim
                  </div>
                  <div className="text-white text-2xl leading-3 tracking-[1px] mt-2 text-shadow-blue">
                    {totalLockedClaimable.toLocaleString()}
                  </div>
                </div>
                <div className="border-[#00CAFF] sm:border-r pr-2">
                  <div className="font-raleway text-[#00CAFF] text-[10px] leading-3 tracking-[1px] uppercase text-shadow-blue">
                    unlocked to claim
                  </div>
                  <div className="text-white text-2xl leading-3 tracking-[1px] mt-2 text-shadow-blue">
                    {totalUnlockedClaimable.toLocaleString()}
                  </div>
                </div>
                <div className="border-[#00CAFF] sm:border-r-[6px] pr-2">
                  <div className="font-raleway text-[#00CAFF] text-[10px] leading-3 tracking-[1px] uppercase text-shadow-blue">
                    reflections
                  </div>
                  <div className="text-white text-2xl leading-3 tracking-[1px] mt-2 text-shadow-blue">
                    {(
                      incomeByMC +
                      incomeBySC +
                      incomeFromRacer
                    ).toLocaleString()}
                  </div>
                  <div className="mt-3">
                    <button
                      className="border border-[#00CAFF] hover:bg-cyan-600 hover:bg-opacity-20 text-center rounded-tr-lg rounded-bl-lg text-[#00CAFF] font-bold text-xs leading-3 tracking-[1px] uppercase py-2 px-4"
                      onClick={() => handleReflectionClaim()}
                    >
                      claim
                    </button>
                  </div>
                </div>
                <div>
                  <div className="font-raleway text-[#00CAFF] text-[10px] leading-3 tracking-[1px] uppercase text-shadow-blue">
                    earning
                  </div>
                  <div className="text-white text-2xl leading-3 tracking-[1px] mt-2 text-shadow-blue">
                    {totalEarnSpeed.toLocaleString()}/
                    <span className="text-base leading-3">DAY</span>
                  </div>
                </div>
              </div>
              <div className="text-[10px] leading-3 text-[#FFAE00] tracking-[0.5px] mt-2">
                CLAIM ALL includes: Locked, Unlocked, Reflections and Savings
                Interest from all assets.
              </div>
              <div className="my-3 border-t border-white border-dotted"></div>
              <div className="grid gap-2 sm:grid-cols-2">
                <div>
                  <div className="font-raleway text-xs leading-3 tracking-[2px] text-white uppercase py-2">
                    activity <span className="font-bold">stats</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 bg-gradient-light-blue border border-[rgba(255,174,0,0.5)] rounded-md">
                      <div className="font-raleway text-[#00CAFF] text-[10px] leading-3 tracking-[1px] uppercase text-shadow-blue">
                        mcv lifetime earnings
                      </div>
                      <div className="text-white text-2xl leading-3 tracking-[1px] mt-3 text-shadow-blue">
                        {Math.round(
                          +totalClaimed + +totalInterestClaimed
                        ).toLocaleString()}
                      </div>
                    </div>
                    <div className="p-2 bg-gradient-light-blue border border-[rgba(255,174,0,0.5)] rounded-md">
                      <div className="font-raleway text-[#00CAFF] text-[10px] leading-3 tracking-[1px] uppercase text-shadow-blue">
                        mcv lifetime spending
                      </div>
                      <div className="text-white text-2xl leading-3 tracking-[1px] mt-3 text-shadow-blue">
                        0
                      </div>
                    </div>
                    <div className="p-2 bg-gradient-light-blue border border-[rgba(255,174,0,0.5)] rounded-md">
                      <div className="font-raleway text-[#00CAFF] text-[10px] leading-3 tracking-[1px] uppercase text-shadow-blue">
                        locked claimed ytd
                      </div>
                      <div className="text-white text-2xl leading-3 tracking-[1px] mt-3 text-shadow-blue">
                        0
                      </div>
                    </div>
                    <div className="p-2 bg-gradient-light-blue border border-[rgba(255,174,0,0.5)] rounded-md">
                      <div className="font-raleway text-[#00CAFF] text-[10px] leading-3 tracking-[1px] uppercase text-shadow-blue">
                        unlocked claimed ytd
                      </div>
                      <div className="text-white text-2xl leading-3 tracking-[1px] mt-3 text-shadow-blue">
                        {Math.round(totalClaimed).toLocaleString()}
                      </div>
                    </div>
                    <div className="p-2 bg-gradient-light-blue border border-[rgba(255,174,0,0.5)] rounded-md">
                      <div className="font-raleway text-[#00CAFF] text-[10px] leading-3 tracking-[1px] uppercase text-shadow-blue">
                        reflections claimed ytd
                      </div>
                      <div className="text-white text-2xl leading-3 tracking-[1px] mt-3 text-shadow-blue">
                        {Math.round(totalClaimedReflections).toLocaleString()}
                      </div>
                    </div>
                    <div className="p-2 bg-gradient-light-blue border border-[rgba(255,174,0,0.5)] rounded-md">
                      <div className="font-raleway text-[#00CAFF] text-[10px] leading-3 tracking-[1px] uppercase text-shadow-blue">
                        interest claimed ytd
                      </div>
                      <div className="text-white text-2xl leading-3 tracking-[1px] mt-3 text-shadow-blue">
                        0
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-l border-[#00CAFF]">
                  <Table className="">
                    <Thead>
                      <Tr>
                        <Td className="font-raleway text-[10px] leading-3 tracking-[1px] text-[rgba(255,255,255,0.6)] text-shadow-blue">
                          LAST CLAIM
                        </Td>
                        <Td className="font-raleway text-[10px] leading-3 tracking-[1px] text-[rgba(255,255,255,0.6)] text-shadow-blue">
                          CLAIM AMOUNT
                        </Td>
                        <Td className="font-raleway text-[10px] leading-3 tracking-[1px] text-[rgba(255,255,255,0.6)] text-shadow-blue">
                          UNLOCKED
                        </Td>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr className="bg-[rgba(217,217,217,0.05)]">
                        <Td className="text-[10px] leading-6 text-white">
                          April 3, 2023
                        </Td>
                        <Td className="text-[10px] leading-6 text-white">
                          1,273 MCV
                        </Td>
                        <Td className="text-[10px] leading-6 text-white">
                          222 MCV
                        </Td>
                      </Tr>
                      <Tr className="">
                        <Td className="text-[10px] leading-6 text-white">
                          April 3, 2023
                        </Td>
                        <Td className="text-[10px] leading-6 text-white">
                          1,273 MCV
                        </Td>
                        <Td className="text-[10px] leading-6 text-white">
                          222 MCV
                        </Td>
                      </Tr>
                      <Tr className="bg-[rgba(217,217,217,0.05)]">
                        <Td className="text-[10px] leading-6 text-white">
                          April 3, 2023
                        </Td>
                        <Td className="text-[10px] leading-6 text-white">
                          1,273 MCV
                        </Td>
                        <Td className="text-[10px] leading-6 text-white">
                          222 MCV
                        </Td>
                      </Tr>
                      <Tr className="">
                        <Td className="text-[10px] leading-6 text-white">
                          April 3, 2023
                        </Td>
                        <Td className="text-[10px] leading-6 text-white">
                          1,273 MCV
                        </Td>
                        <Td className="text-[10px] leading-6 text-white">
                          222 MCV
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </div>
              </div>
            </div>
            <div className="bg-gradient-blue border border-[#80C9FF] rounded-lg p-4 mt-4">
              <div className="text-[#FFAE00] text-xs leading-3 font-raleway tracking-[2px] uppercase text-shadow-blue">
                bank <span className="font-extrabold">statistics</span>
              </div>
              <div className="my-3 border-t border-white border-dotted"></div>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-3">
                <div className="flex items-center">
                  <VaultIcon color={`#FFAE00`} />
                  <div className="ml-2">
                    <div className="text-[#FFCE0D] font-raleway text-[10px] leading-3 tracking-[1px] uppercase text-shadow-blue">
                      vault balance
                    </div>
                    <div className="text-white text-lg xl:text-2xl xl:leading-none tracking-[1px] text-shadow-blue">
                      {vaultBalance.toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <ProcessIcon color={`#FFAE00`} />
                  <div className="ml-2">
                    <div className="text-[#FFCE0D] font-raleway text-[10px] leading-3 tracking-[1px] uppercase text-shadow-blue">
                      mcv processed
                    </div>
                    <div className="text-white text-lg xl:text-2xl xl:leading-none tracking-[1px] text-shadow-blue">
                      {bankInfo ? bankInfo.totalProcessed.toLocaleString() : 0}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <BurnIcon color={`#FFAE00`} />
                  <div className="ml-2">
                    <div className="text-[#FFCE0D] font-raleway text-[10px] leading-3 tracking-[1px] uppercase text-shadow-blue">
                      mcv burned
                    </div>
                    <div className="text-white text-lg xl:text-2xl xl:leading-none tracking-[1px] text-shadow-blue">
                      {bankInfo ? bankInfo.totalBurned.toLocaleString() : 0}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <DistributedIcon color={`#FFAE00`} />
                  <div className="ml-2">
                    <div className="text-[#FFCE0D] font-raleway text-[10px] leading-3 tracking-[1px] uppercase text-shadow-blue">
                      distributed to holders
                    </div>
                    <div className="text-white text-lg xl:text-2xl xl:leading-none tracking-[1px] text-shadow-blue">
                      {bankInfo
                        ? bankInfo.totalDistributed.toLocaleString()
                        : 0}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <DepositIcon color={`#FFAE00`} />
                  <div className="ml-2">
                    <div className="text-[#FFCE0D] font-raleway text-[10px] leading-3 tracking-[1px] uppercase text-shadow-blue">
                      deposited to vault
                    </div>
                    <div className="text-white text-lg xl:text-2xl xl:leading-none tracking-[1px] text-shadow-blue">
                      {bankInfo ? bankInfo.totalDeposited.toLocaleString() : 0}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
