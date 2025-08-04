import type { Product } from '@/lib/productStore';
import { formatPrice, truncateAddress } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const prices = formatPrice(
    product.priceUSD,
    product.priceCrypto,
    product.network
  );

  return (
    <Link
      to={`/product/${product.id}`}
      className='block bg-black/30 border border-blue-500/30 rounded-xl overflow-hidden hover:border-blue-500 hover:bg-black/40 transition-all duration-300 cursor-pointer no-underline'
    >
      {/* Product Image */}
      <div className='aspect-video w-full overflow-hidden'>
        {product.previewImage ? (
          <img
            src={product.previewImage}
            alt={product.title}
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
          />
        ) : (
          <div className='w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center'>
            <div className='text-center'>
              <div className='text-4xl mb-2'>
                {product.category === 'Software & Tools' && '⚙️'}
                {product.category === 'Digital Art & NFTs' && '🎨'}
                {product.category === 'E-books & Documents' && '📚'}
                {product.category === 'Music & Audio' && '🎵'}
                {product.category === 'Video & Animation' && '🎬'}
                {product.category === 'Templates & Themes' && '🎨'}
                {product.category === 'Photography' && '📸'}
                {product.category === 'Educational Content' && '🎓'}
                {product.category === 'Games & Gaming Assets' && '🎮'}
                {product.category === 'Other' && '📦'}
              </div>
              <div className='text-sm font-medium text-blue-300'>
                {product.category}
              </div>
            </div>
          </div>
        )}
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
          {product.summary}
        </p>

        {/* Price */}
        <div className='mb-4'>
          <div className='text-xl font-bold text-white'>{prices.crypto}</div>
          <div className='text-sm text-gray-400'>≈ {prices.usd} USD</div>
        </div>

        {/* Seller & Date */}
        <div className='flex justify-between items-center text-xs text-gray-400 mb-4'>
          <span>By {truncateAddress(product.seller)}</span>
          <span>{new Date(product.dateCreated).toLocaleDateString()}</span>
        </div>

        {/* Actions */}
        <div className='flex gap-2'>
          <Link
            to={`/product/${product.id}`}
            className='flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg transition-colors font-medium text-sm no-underline'
          >
            View Details
          </Link>
          <button
            className='px-4 py-2 bg-transparent border border-blue-500 hover:bg-blue-500/10 text-blue-400 rounded-lg transition-colors font-medium text-sm'
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Quick buy logic would go here
              console.log('Quick buy clicked for product:', product.id);
            }}
          >
            Quick Buy
          </button>
        </div>
      </div>
    </Link>
  );
}
