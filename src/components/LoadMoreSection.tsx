import { HiArrowUp } from 'react-icons/hi2';

interface LoadMoreSectionProps {
  hasMoreProducts: boolean;
  isLoading: boolean;
  totalFilteredProducts: number;
  onLoadMore: () => void;
  onScrollToTop: () => void;
}

export default function LoadMoreSection({
  hasMoreProducts,
  isLoading,
  totalFilteredProducts,
  onLoadMore,
  onScrollToTop,
}: LoadMoreSectionProps) {
  return (
    <div className='text-center mt-12'>
      {hasMoreProducts ? (
        <button
          onClick={onLoadMore}
          disabled={isLoading}
          className='px-8 py-3 bg-transparent border border-gray-500 hover:bg-gray-500/10 disabled:opacity-50 disabled:cursor-not-allowed text-gray-300 rounded-lg transition-colors font-medium'
        >
          {isLoading ? (
            <div className='flex items-center gap-2'>
              <svg className='animate-spin h-4 w-4' viewBox='0 0 24 24'>
                <circle
                  className='opacity-25'
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='4'
                  fill='none'
                />
                <path
                  className='opacity-75'
                  fill='currentColor'
                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                />
              </svg>
              Loading More Products...
            </div>
          ) : (
            'Load More Products'
          )}
        </button>
      ) : (
        totalFilteredProducts > 6 && (
          <div className='text-center py-8'>
            <p className='text-gray-400 font-medium mb-4'>No More Items</p>
            <button
              onClick={onScrollToTop}
              className='flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium cursor-pointer'
            >
              <HiArrowUp className='w-4 h-4' />
              Back to Top
            </button>
          </div>
        )
      )}
    </div>
  );
}
