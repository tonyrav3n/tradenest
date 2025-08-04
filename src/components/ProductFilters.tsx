import { categoryOptions, sortOptions } from '@/lib/productFilters';

interface ProductFiltersProps {
  searchTerm: string;
  selectedCategory: string;
  sortBy: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSortChange: (value: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

export default function ProductFilters({
  searchTerm,
  selectedCategory,
  sortBy,
  onSearchChange,
  onCategoryChange,
  onSortChange,
  onClearFilters,
  hasActiveFilters,
}: ProductFiltersProps) {
  return (
    <div className='flex flex-wrap gap-4 mb-8 justify-center'>
      <input
        type='text'
        placeholder='Search products...'
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className='px-4 py-2 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none min-w-[250px]'
      />

      <div className='relative'>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className='px-4 py-2 pr-8 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none appearance-none w-full [&>option]:bg-gray-800 [&>option]:text-white [&>option]:py-2'
        >
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <svg
          className='absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5 text-gray-400'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </div>

      <div className='relative'>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className='px-4 py-2 pr-8 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none appearance-none w-full [&>option]:bg-gray-800 [&>option]:text-white [&>option]:py-2'
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <svg
          className='absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5 text-gray-400'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </div>

      {hasActiveFilters && (
        <button
          onClick={onClearFilters}
          className='px-4 py-2 bg-red-600/20 border border-red-500 hover:bg-red-500/10 text-red-400 rounded-lg transition-colors font-medium'
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}
