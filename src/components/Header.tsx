import { useState } from 'react';
import { HiBars3, HiShoppingBag, HiXMark, HiPlus, HiArrowUpTray, HiClipboardDocumentList } from 'react-icons/hi2';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className='sticky top-0 w-full bg-[#0a090f]/80 backdrop-blur-md border-b border-white/10 z-50 transition-all duration-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo/Brand */}
          <div className='flex items-center'>
            <Link
              to='/'
              onClick={handleHomeClick}
              className='text-xl font-bold text-white cursor-pointer no-underline hover:text-blue-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a090f] rounded'
            >
              TradeNest
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            <Link
              to='/products'
              className={`flex items-center gap-2 transition-all duration-200 no-underline px-3 py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a090f] ${
                location.pathname === '/products'
                  ? 'text-blue-400 bg-blue-500/10 border-b-2 border-blue-400'
                  : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/5'
              }`}
            >
              <HiShoppingBag className='w-5 h-5' />
              Browse Products
            </Link>
            <Link
              to='/my-trades'
              className={`flex items-center gap-2 transition-all duration-200 no-underline px-3 py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a090f] ${
                location.pathname === '/my-trades'
                  ? 'text-purple-400 bg-purple-500/10 border-b-2 border-purple-400'
                  : 'text-gray-300 hover:text-purple-400 hover:bg-purple-500/5'
              }`}
            >
              <HiClipboardDocumentList className='w-5 h-5' />
              My Trades
            </Link>
            <Link
              to='/list-product'
              className={`flex items-center gap-2 transition-all duration-200 no-underline px-3 py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a090f] ${
                location.pathname === '/list-product'
                  ? 'text-orange-400 bg-orange-500/10 border-b-2 border-orange-400'
                  : 'text-gray-300 hover:text-orange-400 hover:bg-orange-500/5'
              }`}
            >
              <HiArrowUpTray className='w-5 h-5' />
              List Product
            </Link>
            <Link
              to='/create-trade'
              className={`flex items-center gap-2 transition-all duration-200 no-underline px-3 py-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a090f] ${
                location.pathname === '/create-trade'
                  ? 'text-green-400 bg-green-500/10 border-b-2 border-green-400'
                  : 'text-gray-300 hover:text-green-400 hover:bg-green-500/5'
              }`}
            >
              <HiPlus className='w-5 h-5' />
              Create Trade
            </Link>
          </nav>

          {/* Right side - Mobile menu button and Wallet */}
          <div className='flex items-center gap-3'>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='md:hidden p-2 text-gray-300 hover:text-white transition-colors'
            >
              {isMobileMenuOpen ? (
                <HiXMark className='w-6 h-6' />
              ) : (
                <HiBars3 className='w-6 h-6' />
              )}
            </button>

            {/* Wallet Connect Button */}
            <div className='flex items-center'>
              <appkit-button />
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden border-t border-blue-500/20 bg-black/95 backdrop-blur-sm'>
            <nav className='px-4 py-4 space-y-3'>
              <Link
                to='/products'
                onClick={closeMobileMenu}
                className='flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors no-underline py-2'
              >
                <HiShoppingBag className='w-5 h-5' />
                Browse Products
              </Link>
              <Link
                to='/my-trades'
                onClick={closeMobileMenu}
                className='flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors no-underline py-2'
              >
                <HiClipboardDocumentList className='w-5 h-5' />
                My Trades
              </Link>
              <Link
                to='/list-product'
                onClick={closeMobileMenu}
                className='flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors no-underline py-2'
              >
                <HiArrowUpTray className='w-5 h-5' />
                List Product
              </Link>
              <Link
                to='/create-trade'
                onClick={closeMobileMenu}
                className='flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors no-underline py-2'
              >
                <HiPlus className='w-5 h-5' />
                Create Trade
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
