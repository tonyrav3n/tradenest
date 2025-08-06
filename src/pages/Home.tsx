import { HiPlus, HiShoppingBag, HiUsers } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='min-h-screen px-4 sm:px-6 lg:px-8 relative'>
      {/* Subtle hero background glow - extends to full page */}
      <div className='pointer-events-none fixed inset-0 -z-10'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.15),_transparent_60%)]' />
        <div className='absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-40 bg-[radial-gradient(ellipse_at_bottom,_rgba(147,51,234,0.12),_transparent_60%)]' />
      </div>

      {/* Hero Section */}
      <div className='flex items-center justify-center min-h-[80vh] pt-8'>
        <div className='text-center max-w-4xl mx-auto'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6'>
            Secure Digital Trading
          </h1>
          <p className='text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 px-2'>
            Buy and sell digital products. No trust needed. No risk tolerated.
          </p>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4'>
            <Link
              to='/create-trade'
              className='w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 font-semibold text-base sm:text-lg min-w-[160px] shadow-sm hover:shadow-blue-600/20 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a090f] no-underline'
            >
              <HiUsers className='w-5 h-5' />
              Create Trade
            </Link>
            <Link
              to='/products'
              className='w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-blue-500 hover:bg-blue-500/10 text-blue-400 rounded-lg transition-all duration-200 font-semibold text-base sm:text-lg min-w-[160px] text-center no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a090f]'
            >
              <HiShoppingBag className='w-5 h-5' />
              Browse Products
            </Link>
            <Link
              to='/list-product'
              className='w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-gray-500/70 hover:bg-gray-500/10 text-gray-300 rounded-lg transition-all duration-200 font-semibold text-base sm:text-lg min-w-[160px] text-center no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a090f]'
            >
              <HiPlus className='w-5 h-5' />
              List Product
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className='max-w-6xl mx-auto py-12 sm:py-20 px-4'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-16'>
          How It Works
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
          {/* For Buyers */}
          <div className='bg-black/30 backdrop-blur border border-blue-500/60 rounded-xl p-6 sm:p-8 space-y-6 sm:space-y-8 transition-colors'>
            <h3 className='text-xl sm:text-2xl font-semibold text-blue-400 mb-4 sm:mb-6'>
              For Buyers
            </h3>

            <div className='relative space-y-4 sm:space-y-6'>
              {/* Connecting line */}
              <div className='absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-600/50 to-blue-600/10'></div>

              <div className='flex items-start gap-4 relative'>
                <div className='flex-shrink-0 w-8 h-8 border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center font-semibold bg-[#0a090f] z-10'>
                  1
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-semibold text-white mb-2'>
                    Find or Receive a Trade
                  </h4>
                  <p className='text-sm sm:text-base text-gray-300'>
                    Browse listed products or accept an invite to a trade.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 relative'>
                <div className='flex-shrink-0 w-8 h-8 border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center font-semibold bg-[#0a090f] z-10'>
                  2
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-semibold text-white mb-2'>
                    Review Trade Details
                  </h4>
                  <p className='text-sm sm:text-base text-gray-300'>
                    Check the product, previews, and price.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 relative'>
                <div className='flex-shrink-0 w-8 h-8 border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center font-semibold bg-[#0a090f] z-10'>
                  3
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-semibold text-white mb-2'>
                    Deposit Payment
                  </h4>
                  <p className='text-sm sm:text-base text-gray-300'>
                    Your funds are securely held in escrow.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 relative'>
                <div className='flex-shrink-0 w-8 h-8 border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center font-semibold bg-[#0a090f] z-10'>
                  4
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-semibold text-white mb-2'>
                    Receive Product
                  </h4>
                  <p className='text-sm sm:text-base text-gray-300'>
                    Seller delivers the product. Confirm once satisfied.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 relative'>
                <div className='flex-shrink-0 w-8 h-8 border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center font-semibold bg-[#0a090f] z-10'>
                  5
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-semibold text-white mb-2'>
                    Escrow Releases Funds
                  </h4>
                  <p className='text-sm sm:text-base text-gray-300'>
                    Your payment is released to the seller.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* For Sellers */}
          <div className='bg-black/30 backdrop-blur border border-green-500/60 rounded-xl p-6 sm:p-8 space-y-6 sm:space-y-8 transition-colors'>
            <h3 className='text-xl sm:text-2xl font-semibold text-green-400 mb-4 sm:mb-6'>
              For Sellers
            </h3>

            <div className='relative space-y-4 sm:space-y-6'>
              {/* Connecting line */}
              <div className='absolute left-4 top-4 bottom-8 w-0.5 bg-gradient-to-b from-green-600/50 to-green-600/10'></div>

              <div className='flex items-start gap-4 relative'>
                <div className='flex-shrink-0 w-8 h-8 border-2 border-green-600 text-green-600 rounded-full flex items-center justify-center font-semibold bg-[#0a090f] z-10'>
                  1
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-semibold text-white mb-2'>
                    List a Product or Accept a Trade
                  </h4>
                  <p className='text-sm sm:text-base text-gray-300'>
                    Create your own listing or accept a trade invite.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 relative'>
                <div className='flex-shrink-0 w-8 h-8 border-2 border-green-600 text-green-600 rounded-full flex items-center justify-center bg-[#0a090f] z-10'>
                  2
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-semibold text-white mb-2'>
                    Provide Trade Details
                  </h4>
                  <p className='text-sm sm:text-base text-gray-300'>
                    Share product description, pricing, and optional previews to
                    start the trade.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 relative'>
                <div className='flex-shrink-0 w-8 h-8 border-2 border-green-600 text-green-600 rounded-full flex items-center justify-center font-semibold bg-[#0a090f] z-10'>
                  3
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-semibold text-white mb-2'>
                    Wait for Buyer Deposit
                  </h4>
                  <p className='text-sm sm:text-base text-gray-300'>
                    Escrow holds the buyer's funds before you send anything.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 relative'>
                <div className='flex-shrink-0 w-8 h-8 border-2 border-green-600 text-green-600 rounded-full flex items-center justify-center font-semibold bg-[#0a090f] z-10'>
                  4
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-semibold text-white mb-2'>
                    Deliver the Product
                  </h4>
                  <p className='text-sm sm:text-base text-gray-300'>
                    Send the digital product to the buyer.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 relative'>
                <div className='flex-shrink-0 w-8 h-8 border-2 border-green-600 text-green-600 rounded-full flex items-center justify-center font-semibold bg-[#0a090f] z-10'>
                  5
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-semibold text-white mb-2'>
                    Get Paid
                  </h4>
                  <p className='text-sm sm:text-base text-gray-300'>
                    Once the buyer confirms, escrow releases your payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
