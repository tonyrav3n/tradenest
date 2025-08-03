# TradeNest

A secure escrow platform for digital goods built with Vite, React, and Web3 technology.

## Overview

TradeNest provides a trustless escrow service for digital transactions, leveraging blockchain technology to ensure secure peer-to-peer trading of digital assets.

## Tech Stack

- **Framework**: Vite + React
- **Language**: TypeScript
- **Wallet Integration**: Reown AppKit + wagmi
- **Blockchain**: Ethereum (Mainnet & Sepolia testnet)
- **Styling**: Tailwind CSS v4
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- A WalletConnect Project ID

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tonyrav3n/tradenest.git
   cd tradenest
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env.local
   ```

   Add your WalletConnect Project ID:

   ```env
   VITE_WALLETCONNECT_PROJECT_ID=your_project_id_here
   ```

4. Run the development server:

   ```bash
   pnpm dev
   ```

   Open [http://localhost:5173](http://localhost:5173) to view the application.

## Project Structure

```tree
tradenest/
├── src/
│   ├── App.tsx              # Root React component
│   ├── Providers.tsx        # AppKit providers
│   ├── components/
│   │   └── Header.tsx       # Navigation header
│   ├── pages/
│   │   └── Home.tsx         # Landing page
│   ├── lib/
│   │   └── wallet.ts        # Wallet & AppKit configuration
│   ├── styles/
│   │   ├── App.css          # App-specific styles
│   │   └── index.css        # Global styles (includes Tailwind)
│   └── main.tsx             # App entry point
├── public/                  # Static assets
└── ...
```

## Features

- 🎨 **Modern UI**: Dark theme with subtle blue accents and dotted background
- 🔗 **Web3 Integration**: Connect with popular wallets via Reown AppKit
- 📱 **Responsive Design**: Mobile-first responsive interface
- ⚡ **Fast Performance**: Built on Vite for optimal performance

## Features (Planned)

- 🔒 **Secure Escrow**: Smart contract-based escrow system
- 💰 **Multi-token Support**: Support for various ERC-20 tokens
- 🛒 **Item Marketplace**: Browse and list digital items
- 🤝 **Trade Creation**: Create custom trade agreements

## Environment Variables

| Variable                        | Description              | Required |
| ------------------------------- | ------------------------ | -------- |
| `VITE_WALLETCONNECT_PROJECT_ID` | WalletConnect project ID | Yes      |

## Development

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
