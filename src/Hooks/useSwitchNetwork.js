import { useCallback, useEffect } from 'react'

import { useSwitchNetwork } from 'wagmi'

import { DEFAULT_CHAIN_ID } from '../config/web3'

import { useWeb3 } from './useWeb3'

export const useCheckIsSupportedNetwork = () => {
  const { isSupported } = useWeb3()
  const { switchNetwork } = useSwitchNetwork()

  const handleCheckSupportedNetwork = useCallback(async () => {
    if (!isSupported && switchNetwork) {
      switchNetwork(DEFAULT_CHAIN_ID)
    }
  }, [isSupported, switchNetwork])

  useEffect(() => {
    handleCheckSupportedNetwork()
  }, [handleCheckSupportedNetwork])
}
