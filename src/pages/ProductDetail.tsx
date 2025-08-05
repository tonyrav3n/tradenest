import { getProductById, getProducts } from '@/lib/productStore';
import { formatPrice, getCurrencySymbol, truncateAddress } from '@/lib/utils';
import {
  HiAcademicCap,
  HiCamera,
  HiCog6Tooth,
  HiCube,
  HiDocumentText,
  HiFilm,
  HiHeart,
  HiMusicalNote,
  HiPuzzlePiece,
  HiShoppingCart,
  HiStar,
  HiSwatch,
} from 'react-icons/hi2';
import { Link, useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id!);
  const allProducts = getProducts();

  const formatNetworkName = (network: string): string => {
    switch (network.toLowerCase()) {
      case 'ethereum':
        return 'Ethereum';
      case 'polygon':
        return 'Polygon';
      case 'bsc':
        return 'BSC';
      default:
        return network.charAt(0).toUpperCase() + network.slice(1);
    }
  };

  if (!product) {
    return (
      <div className='min-h-screen px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12'>
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl font-bold text-white mb-4'>
            Product Not Found
          </h1>
          <p className='text-gray-300 mb-8'>
            The product you're looking for doesn't exist.
          </p>
          <Link
            to='/products'
            className='inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium no-underline'
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const prices = formatPrice(
    product.priceUSD,
    product.priceCrypto,
    product.network
  );

  return (
    <div className='min-h-screen px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12'>
      <div className='max-w-6xl mx-auto'>
        {/* Breadcrumb */}
        <nav className='mb-6 sm:mb-8'>
          <div className='flex items-center space-x-2 text-sm text-gray-400 px-2'>
            <Link
              to='/'
              className='hover:text-white transition-colors no-underline'
            >
              Home
            </Link>
            <span>/</span>
            <Link
              to='/products'
              className='hover:text-white transition-colors no-underline'
            >
              Products
            </Link>
            <span>/</span>
            <span className='text-white truncate'>{product.title}</span>
          </div>
        </nav>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
          {/* Product Image */}
          <div className='space-y-4'>
            <div className='aspect-video w-full overflow-hidden rounded-xl border border-blue-500/30'>
              {product.previewImage ? (
                <img
                  src={product.previewImage}
                  alt={product.title}
                  className='w-full h-full object-cover'
                />
              ) : (
                <div className='w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center'>
                  <div className='text-center'>
                    <div className='text-6xl mb-4 text-blue-300 flex items-center justify-center'>
                      {product.category === 'Software & Tools' && (
                        <HiCog6Tooth />
                      )}
                      {product.category === 'Digital Art & NFTs' && (
                        <HiSwatch />
                      )}
                      {product.category === 'E-books & Documents' && (
                        <HiDocumentText />
                      )}
                      {product.category === 'Music & Audio' && (
                        <HiMusicalNote />
                      )}
                      {product.category === 'Video & Animation' && <HiFilm />}
                      {product.category === 'Templates & Themes' && (
                        <HiSwatch />
                      )}
                      {product.category === 'Photography' && <HiCamera />}
                      {product.category === 'Educational Content' && (
                        <HiAcademicCap />
                      )}
                      {product.category === 'Games & Gaming Assets' && (
                        <HiPuzzlePiece />
                      )}
                      {product.category === 'Other' && <HiCube />}
                    </div>
                    <div className='text-lg font-medium text-blue-300'>
                      {product.category}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className='space-y-6'>
            {/* Category Badge */}
            <div>
              <span className='inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-full'>
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h1 className='text-3xl font-bold text-white'>{product.title}</h1>

            {/* Summary */}
            <p className='text-gray-300 text-lg leading-relaxed'>
              {product.summary}
            </p>

            {/* Full Description */}
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold text-white'>
                Product Description
              </h3>
              <div className='text-gray-300 space-y-2'>
                <p>{product.description}</p>
              </div>
            </div>

            {/* Price */}
            <div className='bg-black/30 border border-blue-500/30 rounded-xl p-6'>
              <div className='flex items-center justify-between mb-4'>
                <div>
                  <div className='text-2xl font-bold text-white'>
                    {prices.crypto}
                  </div>
                  <div className='text-gray-400'>≈ {prices.usd} USD</div>
                </div>
                <div className='text-right text-sm text-gray-400'>
                  <div>Network: {formatNetworkName(product.network)}</div>
                  <div>Currency: {getCurrencySymbol(product.network)}</div>
                </div>
              </div>

              {/* Purchase Buttons */}
              <div className='space-y-3'>
                <button className='w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors'>
                  <HiShoppingCart className='w-5 h-5' />
                  Buy Now
                </button>
                <button className='w-full flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-blue-500 hover:bg-blue-500/10 text-blue-400 font-semibold rounded-lg transition-colors'>
                  <HiHeart className='w-5 h-5' />
                  Add to Wishlist
                </button>
              </div>
            </div>

            {/* Seller Info */}
            <div className='bg-black/30 border border-gray-600 rounded-xl p-6'>
              <h3 className='text-lg font-semibold text-white mb-4'>
                Seller Information
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Seller:</span>
                  <span className='text-white font-mono'>
                    {truncateAddress(product.seller)}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Listed on:</span>
                  <span className='text-white'>
                    {new Date(product.dateCreated).toLocaleDateString()}
                  </span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-400'>Rating:</span>
                  <div className='flex items-center'>
                    <div className='flex text-yellow-400'>
                      {[...Array(5)].map((_, i) => (
                        <HiStar key={i} className='w-4 h-4' />
                      ))}
                    </div>
                    <span className='text-gray-400 ml-2'>(4.8/5)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className='mt-12 sm:mt-16'>
          <h2 className='text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 px-2'>
            Related Products
          </h2>
          {(() => {
            const relatedProducts = allProducts
              .filter(
                (p) => p.category === product.category && p.id !== product.id
              )
              .slice(0, 4);

            if (relatedProducts.length === 0) {
              return (
                <div className='text-center py-8 sm:py-12 bg-black/20 border border-gray-600 rounded-xl mx-2'>
                  <h3 className='text-lg sm:text-xl font-semibold text-white mb-2'>
                    No Related Products Found
                  </h3>
                  <p className='text-gray-400 mb-4 sm:mb-6 px-4'>
                    There are currently no other products in the "
                    {product.category}" category.
                  </p>
                  <Link
                    to='/products'
                    className='inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium no-underline'
                  >
                    Browse All Products
                  </Link>
                </div>
              );
            }

            return (
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-2'>
                {relatedProducts.map((relatedProduct) => {
                  const relatedPrices = formatPrice(
                    relatedProduct.priceUSD,
                    relatedProduct.priceCrypto,
                    relatedProduct.network
                  );
                  return (
                    <Link
                      key={relatedProduct.id}
                      to={`/product/${relatedProduct.id}`}
                      className='block bg-black/30 border border-blue-500/30 rounded-xl overflow-hidden hover:border-blue-500 transition-colors no-underline'
                    >
                      <div className='aspect-video w-full overflow-hidden'>
                        {relatedProduct.previewImage ? (
                          <img
                            src={relatedProduct.previewImage}
                            alt={relatedProduct.title}
                            className='w-full h-full object-cover'
                          />
                        ) : (
                          <div className='w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center'>
                            <div className='text-center'>
                              <div className='text-2xl mb-1 text-blue-300 flex items-center justify-center'>
                                {relatedProduct.category ===
                                  'Software & Tools' && <HiCog6Tooth />}
                                {relatedProduct.category ===
                                  'Digital Art & NFTs' && <HiSwatch />}
                                {relatedProduct.category ===
                                  'E-books & Documents' && <HiDocumentText />}
                                {relatedProduct.category ===
                                  'Music & Audio' && <HiMusicalNote />}
                                {relatedProduct.category ===
                                  'Video & Animation' && <HiFilm />}
                                {relatedProduct.category ===
                                  'Templates & Themes' && <HiSwatch />}
                                {relatedProduct.category === 'Photography' && (
                                  <HiCamera />
                                )}
                                {relatedProduct.category ===
                                  'Educational Content' && <HiAcademicCap />}
                                {relatedProduct.category ===
                                  'Games & Gaming Assets' && <HiPuzzlePiece />}
                                {relatedProduct.category === 'Other' && (
                                  <HiCube />
                                )}
                              </div>
                              <div className='text-xs font-medium text-blue-300'>
                                {relatedProduct.category}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className='p-4'>
                        <h3 className='text-white font-semibold mb-2 line-clamp-2'>
                          {relatedProduct.title}
                        </h3>
                        <div className='text-blue-400 font-bold'>
                          {relatedPrices.crypto}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
