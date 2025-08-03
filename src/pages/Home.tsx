export default function Home() {
  return (
    <div className='min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8'>
      {/* Hero Section */}
      <div className='text-center max-w-4xl mx-auto'>
        <h1 className='text-5xl font-bold text-white mb-6'>
          Secure Digital Trading
        </h1>
        <p className='text-xl text-gray-300 mb-12'>
          Buy and sell digital items. No trust needed. No risk tolerated.
        </p>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <button className='px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold text-lg min-w-[160px]'>
            List Item
          </button>
          <button className='px-8 py-4 bg-transparent border-2 border-blue-500 hover:bg-blue-500/10 text-blue-400 rounded-lg transition-colors font-semibold text-lg min-w-[160px]'>
            Browse Items
          </button>
          <button className='px-8 py-4 bg-transparent border-2 border-gray-500 hover:bg-gray-500/10 text-gray-300 rounded-lg transition-colors font-semibold text-lg min-w-[160px]'>
            Create Trade
          </button>
        </div>
      </div>
    </div>
  );
}
