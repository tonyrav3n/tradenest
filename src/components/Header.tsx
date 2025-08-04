import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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

          {/* Navigation */}
          <nav className='hidden md:flex space-x-8'>
            <a
              href='#browse'
              className='text-gray-300 hover:text-blue-400 transition-colors'
            >
              Browse Products
            </a>
            <Link
              to='/list-product'
              className='text-gray-300 hover:text-blue-400 transition-colors no-underline'
            >
              List Product
            </Link>
          </nav>

          {/* Wallet Connect Button */}
          <div className='flex items-center'>
            <appkit-button />
          </div>
        </div>
      </div>
    </header>
  );
}
