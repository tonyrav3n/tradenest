import { HiMagnifyingGlass } from 'react-icons/hi2';

interface NoProductsFoundProps {
  searchTerm: string;
  selectedCategory: string;
  onClearFilters: () => void;
}

export default function NoProductsFound({
  searchTerm,
  selectedCategory,
  onClearFilters,
}: NoProductsFoundProps) {
  const hasActiveFilters = searchTerm || selectedCategory;

  return (
    <div className='text-center py-16'>
      <div className='flex justify-center mb-4'>
        <HiMagnifyingGlass className='w-16 h-16 text-gray-400' />
      </div>
      <h3 className='text-2xl font-bold text-white mb-4'>No Products Found</h3>
      <p className='text-gray-400 mb-8 max-w-md mx-auto'>
        {hasActiveFilters
          ? 'No products match your current search or filter criteria. Try adjusting your filters.'
          : 'No products are currently available.'}
      </p>
      {hasActiveFilters && (
        <button
          onClick={onClearFilters}
          className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium'
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}
