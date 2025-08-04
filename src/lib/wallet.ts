import { createAppKit } from '@reown/appkit/react';

import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { mainnet, sepolia } from '@reown/appkit/networks';

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

const metadata = {
  name: 'TradeNest',
  description: 'TradeNest is a decentralized trading platform.',
  url: 'https://localhost:5173',
  // url: 'https://tradenest-tau.vercel.app',
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
};

const networks = [mainnet, sepolia] as [typeof mainnet, typeof sepolia];

export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: false,
});

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#3b82f6',
    '--w3m-color-mix': '#3b82f6',
    '--w3m-color-mix-strength': 5,
    '--w3m-border-radius-master': '8px',
  },
  features: {
    analytics: true,
  },
});
