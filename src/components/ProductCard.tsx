import type { Product } from '@/lib/productStore';
import { formatPrice, truncateAddress } from '@/lib/utils';
import {
  HiAcademicCap,
  HiCamera,
  HiCog6Tooth,
  HiCube,
  HiDocumentText,
  HiEye,
  HiFilm,
  HiMusicalNote,
  HiPuzzlePiece,
  HiShoppingCart,
  HiSwatch,
} from 'react-icons/hi2';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

// Category color mapping
const getCategoryStyles = (category: string) => {
  const styles = {
    'Software & Tools': {
      badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      gradient: 'from-blue-600/20 to-blue-400/10',
      icon: 'text-blue-300'
    },
    'Digital Art & NFTs': {
      badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      gradient: 'from-purple-600/20 to-purple-400/10',
      icon: 'text-purple-300'
    },
    'E-books & Documents': {
      badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      gradient: 'from-emerald-600/20 to-emerald-400/10',
      icon: 'text-emerald-300'
    },
    'Music & Audio': {
      badge: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
      gradient: 'from-pink-600/20 to-pink-400/10',
      icon: 'text-pink-300'
    },
    'Video & Animation': {
      badge: 'bg-red-500/20 text-red-300 border-red-500/30',
      gradient: 'from-red-600/20 to-red-400/10',
      icon: 'text-red-300'
    },
    'Templates & Themes': {
      badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      gradient: 'from-indigo-600/20 to-indigo-400/10',
      icon: 'text-indigo-300'
    },
    'Photography': {
      badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      gradient: 'from-amber-600/20 to-amber-400/10',
      icon: 'text-amber-300'
    },
    'Educational Content': {
      badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      gradient: 'from-cyan-600/20 to-cyan-400/10',
      icon: 'text-cyan-300'
    },
    'Games & Gaming Assets': {
      badge: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
      gradient: 'from-violet-600/20 to-violet-400/10',
      icon: 'text-violet-300'
    }
  };

  return styles[category as keyof typeof styles] || {
    badge: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    gradient: 'from-gray-600/20 to-gray-400/10',
    icon: 'text-gray-300'
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  const prices = formatPrice(
    product.priceUSD,
    product.priceCrypto,
    product.network
  );

  const categoryStyles = getCategoryStyles(product.category);

  return (
    <Link
      to={`/product/${product.id}`}
      className='group block bg-black/30 border border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-500/50 hover:bg-black/40 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-blue-600/10 transition-all duration-300 cursor-pointer no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a090f]'
    >
      {/* Product Image */}
      <div className='aspect-video w-full overflow-hidden relative'>
        {product.previewImage ? (
          <img
            src={product.previewImage}
            alt={product.title}
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${categoryStyles.gradient} flex items-center justify-center`}
          >
            <div className='text-center'>
              <div
                className={`text-4xl mb-2 ${categoryStyles.icon} flex items-center justify-center`}
              >
                {product.category === 'Software & Tools' && <HiCog6Tooth />}
                {product.category === 'Digital Art & NFTs' && <HiSwatch />}
                {product.category === 'E-books & Documents' && (
                  <HiDocumentText />
                )}
                {product.category === 'Music & Audio' && <HiMusicalNote />}
                {product.category === 'Video & Animation' && <HiFilm />}
                {product.category === 'Templates & Themes' && <HiSwatch />}
                {product.category === 'Photography' && <HiCamera />}
                {product.category === 'Educational Content' && (
                  <HiAcademicCap />
                )}
                {product.category === 'Games & Gaming Assets' && (
                  <HiPuzzlePiece />
                )}
                {product.category === 'Other' && <HiCube />}
              </div>
              <div className={`text-sm font-medium ${categoryStyles.icon}`}>
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
          <span
            className={`inline-block px-2 sm:px-3 py-1 ${categoryStyles.badge} border text-xs font-medium rounded-full`}
          >
            {product.category}
          </span>
        </div>

        {/* Title */}
        <h3 className='text-base sm:text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors'>
          {product.title}
        </h3>

        {/* Description */}
        <p className='text-gray-300 text-xs sm:text-sm mb-4 line-clamp-2'>
          {product.summary}
        </p>

        {/* Price */}
        <div className='mb-4'>
          <div className='text-lg sm:text-xl font-bold text-white'>
            {prices.crypto}
          </div>
          <div className='text-xs sm:text-sm text-gray-400'>
            ≈ {prices.usd} USD
          </div>
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
