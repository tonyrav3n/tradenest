import type { Product } from '@/lib/productStore';
import { formatPrice, truncateAddress } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { 
  HiCog6Tooth, 
  HiSwatch, 
  HiDocumentText, 
  HiMusicalNote, 
  HiFilm, 
  HiCamera, 
  HiAcademicCap, 
  HiPuzzlePiece, 
  HiCube,
  HiEye,
  HiShoppingCart 
} from 'react-icons/hi2';

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
              <div className='text-4xl mb-2 text-blue-300 flex items-center justify-center'>
                {product.category === 'Software & Tools' && <HiCog6Tooth />}
                {product.category === 'Digital Art & NFTs' && <HiSwatch />}
                {product.category === 'E-books & Documents' && <HiDocumentText />}
                {product.category === 'Music & Audio' && <HiMusicalNote />}
                {product.category === 'Video & Animation' && <HiFilm />}
                {product.category === 'Templates & Themes' && <HiSwatch />}
                {product.category === 'Photography' && <HiCamera />}
                {product.category === 'Educational Content' && <HiAcademicCap />}
                {product.category === 'Games & Gaming Assets' && <HiPuzzlePiece />}
                {product.category === 'Other' && <HiCube />}
              </div>
              <div className='text-sm font-medium text-blue-300'>
                {product.category}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className='p-4 sm:p-6'>
        {/* Category Badge */}
        <div className='mb-3'>
          <span className='inline-block px-2 sm:px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full'>
            {product.category}
          </span>
        </div>

        {/* Title */}
        <h3 className='text-base sm:text-lg font-semibold text-white mb-2 line-clamp-2'>
          {product.title}
        </h3>

        {/* Description */}
        <p className='text-gray-300 text-xs sm:text-sm mb-4 line-clamp-2'>
          {product.summary}
        </p>

        {/* Price */}
        <div className='mb-4'>
          <div className='text-lg sm:text-xl font-bold text-white'>{prices.crypto}</div>
          <div className='text-xs sm:text-sm text-gray-400'>≈ {prices.usd} USD</div>
        </div>

        {/* Seller & Date */}
        <div className='flex justify-between items-center text-xs text-gray-400 mb-4'>
          <span>By {truncateAddress(product.seller)}</span>
          <span>{new Date(product.dateCreated).toLocaleDateString()}</span>
        </div>

        {/* Actions */}
        <div className='flex flex-col sm:flex-row gap-2'>
          <Link
            to={`/product/${product.id}`}
            className='flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg transition-colors font-medium text-xs sm:text-sm no-underline'
          >
            <HiEye className='w-4 h-4' />
            <span className='hidden sm:inline'>View Details</span>
            <span className='sm:hidden'>View</span>
          </Link>
          <button
            className='flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-transparent border border-blue-500 hover:bg-blue-500/10 text-blue-400 rounded-lg transition-colors font-medium text-xs sm:text-sm'
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Quick buy logic would go here
              console.log('Quick buy clicked for product:', product.id);
            }}
          >
            <HiShoppingCart className='w-4 h-4' />
            <span className='hidden sm:inline'>Quick Buy</span>
            <span className='sm:hidden'>Buy</span>
          </button>
        </div>
      </div>
    </Link>
  );
}
