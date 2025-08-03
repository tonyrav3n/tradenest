export default function Header() {
  return (
    <header className='w-full border-b border-blue-500/20 backdrop-blur-sm' style={{backgroundColor: 'rgba(10, 9, 15, 0.9)'}}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo/Brand */}
          <div className='flex items-center'>
            <h1 className='text-xl font-bold text-white'>TradeNest</h1>
          </div>

          {/* Navigation */}
          {/* <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900">
            </a>
          </nav> */}

          {/* Wallet Connect Button */}
          <div className='flex items-center'>
            <appkit-button />
          </div>
        </div>
      </div>
    </header>
  );
}
