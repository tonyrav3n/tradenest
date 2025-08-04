import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8 pt-16'>
      {/* Hero Section */}
      <div className='flex items-center justify-center min-h-[calc(100vh-4rem)]'>
        <div className='text-center max-w-4xl mx-auto'>
          <h1 className='text-5xl font-bold text-white mb-6'>
            Secure Digital Trading
          </h1>
          <p className='text-xl text-gray-300 mb-12'>
            Buy and sell digital products. No trust needed. No risk tolerated.
          </p>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link
              to='/list-product'
              className='px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold text-lg min-w-[160px] text-center no-underline'
            >
              List Product
            </Link>
            <Link
              to='/products'
              className='px-8 py-4 bg-transparent border-2 border-blue-500 hover:bg-blue-500/10 text-blue-400 rounded-lg transition-colors font-semibold text-lg min-w-[160px] text-center no-underline'
            >
              Browse Products
            </Link>
            <button className='px-8 py-4 bg-transparent border-2 border-gray-500 hover:bg-gray-500/10 text-gray-300 rounded-lg transition-colors font-semibold text-lg min-w-[160px]'>
              Create Trade
            </button>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className='max-w-6xl mx-auto py-20'>
        <h2 className='text-4xl font-bold text-white text-center mb-16'>
          How It Works
        </h2>

        <div className='grid md:grid-cols-2 gap-12'>
          {/* For Buyers */}
          <div className='bg-black/30 border border-blue-500 rounded-xl p-8 space-y-8'>
            <h3 className='text-2xl font-semibold text-blue-400 mb-6'>
              For Buyers
            </h3>

            <div className='relative space-y-6'>
              {/* Connecting line */}
              <div className='absolute left-4 top-4 bottom-4 w-0.5 bg-blue-600/30'></div>

              <div className='flex items-start gap-4 relative'>
                <div className='flex-shrink-0 w-8 h-8 border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center font-semibold bg-[#0a090f] z-10'>
                  1
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-white mb-2'>
                    Find or Receive a Trade
                  </h4>
                  <p className='text-gray-300'>
                    Browse listed products or accept an invite to a trade.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 relative'>
                <div className='flex-shrink-0 w-8 h-8 border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center font-semibold bg-[#0a090f] z-10'>
                  2
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-white mb-2'>
                    Review Trade Details
                  </h4>
                  <p className='text-gray-300'>
                    Check the product, previews, and price.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 relative'>
                <div className='flex-shrink-0 w-8 h-8 border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center font-semibold bg-[#0a090f] z-10'>
                  3
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-white mb-2'>
                    Deposit Payment
                  </h4>
                  <p className='text-gray-300'>
                    Your funds are securely held in escrow.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 relative'>
                <div className='flex-shrink-0 w-8 h-8 border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center font-semibold bg-[#0a090f] z-10'>
                  4
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-white mb-2'>
                    Receive Product
                  </h4>
                  <p className='text-gray-300'>
                    Seller delivers the product. Confirm once satisfied.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 relative'>
                <div className='flex-shrink-0 w-8 h-8 border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center font-semibold bg-[#0a090f] z-10'>
                  5
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-white mb-2'>
                    Escrow Releases Funds
                  </h4>
                  <p className='text-gray-300'>
                    Your payment is released to the seller.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* For Sellers */}
          <div className='bg-black/30 border border-blue-500 rounded-xl p-8 space-y-8'>
            <h3 className='text-2xl font-semibold text-green-400 mb-6'>
              For Sellers
            </h3>

            <div className='relative space-y-6'>
              {/* Connecting line */}
              <div className='absolute left-4 top-4 bottom-4 w-0.5 bg-green-600/30'></div>

              <div className='flex items-start gap-4 relative'>
                <div className='flex-shrink-0 w-8 h-8 border-2 border-green-600 text-green-600 rounded-full flex items-center justify-center font-semibold bg-[#0a090f] z-10'>
                  1
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-white mb-2'>
                    List a Product or Accept a Trade
                  </h4>
                  <p className='text-gray-300'>
                    Create your own listing or accept a trade invite.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 relative'>
                <div className='flex-shrink-0 w-8 h-8 border-2 border-green-600 text-green-600 rounded-full flex items-center justify-center bg-[#0a090f] z-10'>
                  2
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-white mb-2'>
                    Provide Trade Details
                  </h4>
                  <p className='text-gray-300'>
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
                  <h4 className='text-lg font-semibold text-white mb-2'>
                    Wait for Buyer Deposit
                  </h4>
                  <p className='text-gray-300'>
                    Escrow holds the buyer's funds before you send anything.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 relative'>
                <div className='flex-shrink-0 w-8 h-8 border-2 border-green-600 text-green-600 rounded-full flex items-center justify-center font-semibold bg-[#0a090f] z-10'>
                  4
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-white mb-2'>
                    Deliver the Product
                  </h4>
                  <p className='text-gray-300'>
                    Send the digital product to the buyer.
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4 relative'>
                <div className='flex-shrink-0 w-8 h-8 border-2 border-green-600 text-green-600 rounded-full flex items-center justify-center font-semibold bg-[#0a090f] z-10'>
                  5
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-white mb-2'>
                    Get Paid
                  </h4>
                  <p className='text-gray-300'>
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
