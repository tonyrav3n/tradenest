import { createAppKit } from '@reown/appkit/react';

import { mainnet, sepolia } from '@reown/appkit/networks';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

const metadata = {
  name: 'TradeNest',
  description: 'TradeNest is a decentralized trading platform.',
  url: 'https://tradenest-tau.vercel.app',
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
  features: {
    analytics: true,
  },
});
