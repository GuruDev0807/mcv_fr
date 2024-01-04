import { useEffect, useCallback } from "react";
import { useBalance } from 'wagmi';
import { useWeb3 } from "./useWeb3";
import { mcvAddress } from "../contracts/address";
import { useDispatch } from "react-redux";
import { setWalletBalance } from "../reducers/globalInfoSlice";

export const useTokenBalance = () => {
  const { address, chainId } = useWeb3()
  const dispatch = useDispatch()
  const { data: avaxBalance, isSuccess } = useBalance({ address, chainId, watch: true, cacheTime: 2_000  })
  const { data: mcvBalance, isSuccess: isTokenBalanceSuccess } = useBalance({
    address,
    token: mcvAddress,
    chainId: 43114, watch: true, cacheTime: 2_000
  })

  const handleBalance = useCallback(() => {
    if (isSuccess && isTokenBalanceSuccess) dispatch(setWalletBalance({ avaxBalance: avaxBalance.formatted, mcvBalance: mcvBalance.formatted }))
  }, [avaxBalance, dispatch, isSuccess, isTokenBalanceSuccess, mcvBalance])

  useEffect(() => {
    handleBalance()
  }, [handleBalance])
}