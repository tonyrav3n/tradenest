export interface Trade {
  id: string;
  title: string;
  category: string;
  price: string;
  status: 'pending' | 'in_progress' | 'completed' | 'disputed';
  role: 'buyer' | 'seller';
  counterparty: string;
  createdAt: string;
  description: string;
  previewUrl?: string;
}

export const mockTrades: Trade[] = [
  {
    id: '1',
    title: 'Premium Photoshop Action Pack',
    category: 'Digital Art & NFTs',
    price: '0.05',
    status: 'in_progress',
    role: 'buyer',
    counterparty: '0x1234...5678',
    createdAt: '2025-08-05',
    description: 'Professional photo editing actions for portraits and landscapes.',
    previewUrl: 'https://example.com/preview1.jpg'
  },
  {
    id: '2',
    title: 'React Component Library',
    category: 'Software & Tools',
    price: '0.12',
    status: 'pending',
    role: 'seller',
    counterparty: '0xabcd...efgh',
    createdAt: '2025-08-04',
    description: 'Modern React components with TypeScript support.'
  },
  {
    id: '3',
    title: 'Logo Design Package',
    category: 'Digital Art & NFTs',
    price: '0.08',
    status: 'completed',
    role: 'seller',
    counterparty: '0x9876...5432',
    createdAt: '2025-08-02',
    description: 'Professional logo designs in multiple formats.'
  },
  {
    id: '4',
    title: 'Audio Mixing Services',
    category: 'Music & Audio',
    price: '0.15',
    status: 'disputed',
    role: 'buyer',
    counterparty: '0xfedc...ba98',
    createdAt: '2025-08-01',
    description: 'Professional audio mixing and mastering services.'
  }
];
