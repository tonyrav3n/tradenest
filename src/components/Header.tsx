import { Link, useLocation } from 'react-router-dom';
import { HiShoppingBag, HiBars3, HiXMark } from 'react-icons/hi2';
import { useState } from 'react';

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
    <header
      className='fixed top-0 left-0 right-0 w-full border-b border-blue-500/20 backdrop-blur-sm z-50'
      style={{ backgroundColor: 'rgba(10, 9, 15, 0.9)' }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo/Brand */}
          <div className='flex items-center'>
            <Link
              to='/'
              onClick={handleHomeClick}
              className='text-xl font-bold text-white cursor-pointer no-underline'
            >
              TradeNest
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            <Link
              to='/products'
              className='flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors no-underline'
            >
              <HiShoppingBag className='w-5 h-5' />
              Browse Products
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
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
