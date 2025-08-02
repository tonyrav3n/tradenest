import { getDefaultConfig } from '@rainbow-me/rainbowkit';

import { mainnet, sepolia } from 'wagmi/chains';

export default getDefaultConfig({
  appName: 'TradeNest',
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,
  chains: [mainnet, sepolia],
  ssr: false,
});
