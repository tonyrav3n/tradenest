import { getCurrencySymbol } from '@/lib/utils';
import { mockProducts } from '@/data/products';
import { Link } from 'react-router-dom';

export default function Products() {
  const formatPrice = (usd: number, crypto: number, network: string) => {
    return {
      usd: `$${usd.toFixed(2)}`,
      crypto: `${crypto.toFixed(6)} ${getCurrencySymbol(network)}`
    };
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className='min-h-screen px-4 sm:px-6 lg:px-8 pt-32 pb-12'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-white mb-4'>
            Browse Products
          </h1>
          <p className='text-gray-300 max-w-2xl mx-auto'>
            Discover and purchase digital products securely with cryptocurrency
          </p>
        </div>

        {/* Filters */}
        <div className='flex flex-wrap gap-4 mb-8 justify-center'>
          <input
            type='text'
            placeholder='Search products...'
            className='px-4 py-2 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none min-w-[250px]'
          />
          
          <div className='relative'>
            <select className='px-4 py-2 pr-8 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none appearance-none w-full [&>option]:bg-gray-800 [&>option]:text-white [&>option]:py-2'>
              <option value=''>All Categories</option>
              <option value='software'>Software & Tools</option>
              <option value='art'>Digital Art & NFTs</option>
              <option value='education'>Educational Content</option>
              <option value='templates'>Templates & Themes</option>
              <option value='photography'>Photography</option>
              <option value='music'>Music & Audio</option>
            </select>
            <svg className='absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
            </svg>
          </div>
          
          <div className='relative'>
            <select className='px-4 py-2 pr-8 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none appearance-none w-full [&>option]:bg-gray-800 [&>option]:text-white [&>option]:py-2'>
              <option value='newest'>Newest First</option>
              <option value='oldest'>Oldest First</option>
              <option value='price-low'>Price: Low to High</option>
              <option value='price-high'>Price: High to Low</option>
            </select>
            <svg className='absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
            </svg>
          </div>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {mockProducts.map((product) => {
            const prices = formatPrice(product.priceUSD, product.priceCrypto, product.network);
            
            return (
              <div key={product.id} className='bg-black/30 border border-blue-500/30 rounded-xl overflow-hidden hover:border-blue-500 transition-colors'>
                {/* Product Image */}
                <div className='aspect-video w-full overflow-hidden'>
                  <img
                    src={product.previewImage}
                    alt={product.title}
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                  />
                </div>
                
                {/* Product Info */}
                <div className='p-6'>
                  {/* Category Badge */}
                  <div className='mb-3'>
                    <span className='inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full'>
                      {product.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className='text-lg font-semibold text-white mb-2 line-clamp-2'>
                    {product.title}
                  </h3>
                  
                  {/* Description */}
                  <p className='text-gray-300 text-sm mb-4 line-clamp-2'>
                    {product.description}
                  </p>
                  
                  {/* Price */}
                  <div className='mb-4'>
                    <div className='text-xl font-bold text-white'>
                      {prices.crypto}
                    </div>
                    <div className='text-sm text-gray-400'>
                      ≈ {prices.usd} USD
                    </div>
                  </div>
                  
                  {/* Seller & Date */}
                  <div className='flex justify-between items-center text-xs text-gray-400 mb-4'>
                    <span>By {truncateAddress(product.seller)}</span>
                    <span>{new Date(product.dateCreated).toLocaleDateString()}</span>
                  </div>
                  
                  {/* Actions */}
                  <div className='flex gap-2'>
                    <Link
                      to={`/products/${product.id}`}
                      className='flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg transition-colors font-medium text-sm no-underline'
                    >
                      View Details
                    </Link>
                    <button className='px-4 py-2 bg-transparent border border-blue-500 hover:bg-blue-500/10 text-blue-400 rounded-lg transition-colors font-medium text-sm'>
                      Quick Buy
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More */}
        <div className='text-center mt-12'>
          <button className='px-8 py-3 bg-transparent border border-gray-500 hover:bg-gray-500/10 text-gray-300 rounded-lg transition-colors font-medium'>
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
}
