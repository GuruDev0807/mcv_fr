import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import {
  coinbaseWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  trustWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { configureChains, createClient } from 'wagmi'
import { avalanche, avalancheFuji } from 'wagmi/chains'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { publicProvider } from 'wagmi/providers/public'

export const SupportedChainId = {
  AVALANCHE: avalanche.id,
  FUJI: avalancheFuji.id,
}

// export interface NetworkMetadata {
//   chainName: string
//   symbol: string
//   isTestnet: boolean
//   chainId: SupportedChainId
//   icon: string
//   blockExplorers: { name: string; url: string }
// }

export const DEFAULT_CHAIN_ID = process.env.REACT_APP_ENV === 'prod' ? SupportedChainId.AVALANCHE : SupportedChainId.FUJI

export const supportedChains = {
  [SupportedChainId.AVALANCHE]: avalanche,
  [SupportedChainId.FUJI]: avalancheFuji,
}

export const ConnectorNames = {
  Metamask: 'metaMask',
  WalletConnect: 'walletConnect',
}

export const defaultNetworkMetadata = {
  [SupportedChainId.AVALANCHE]: {
    chainName: 'Avalanche',
    symbol: 'AVAX',
    isTestnet: false,
    chainId: SupportedChainId.AVALANCHE,
    icon: '',
    blockExplorers: avalanche.blockExplorers.default,
  },
  [SupportedChainId.FUJI]: {
    chainName: 'Avalanche Fuji',
    symbol: 'AVAX',
    isTestnet: true,
    chainId: SupportedChainId.FUJI,
    icon: '',
    blockExplorers: avalancheFuji.blockExplorers.default,
  },
}

export const rpcUrlMap = {
  [SupportedChainId.AVALANCHE]: `${avalanche.rpcUrls.default.http}`,
  [SupportedChainId.FUJI]: `${avalancheFuji.rpcUrls.default.http}`,
}

export const { chains, provider } = configureChains(
  [supportedChains[SupportedChainId.AVALANCHE], supportedChains[SupportedChainId.FUJI]],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: rpcUrlMap[chain.id],
      }),
    }),
    publicProvider(),
  ]
)

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [injectedWallet({ chains }), metaMaskWallet({ chains })],
  },
  {
    groupName: 'Others',
    wallets: [
      walletConnectWallet({ chains }),
      trustWallet({ chains }),
      ledgerWallet({ chains }),
      coinbaseWallet({ chains, appName: 'MCVerse Farming' }),
    ],
  },
])

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})
