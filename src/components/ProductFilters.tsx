import { categoryOptions, sortOptions } from '@/lib/productFilters';
import { HiXMark, HiMagnifyingGlass, HiChevronDown } from 'react-icons/hi2';

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
    <div className='flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 justify-center'>
      <div className='relative w-full sm:w-auto'>
        <HiMagnifyingGlass className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
        <input
          type='text'
          placeholder='Search products...'
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className='w-full sm:w-[250px] pl-10 px-4 py-2 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none'
        />
      </div>

      <div className='relative w-full sm:w-auto'>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className='w-full sm:w-auto px-4 py-2 pr-8 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none appearance-none [&>option]:bg-gray-800 [&>option]:text-white [&>option]:py-2'
        >
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <HiChevronDown className='absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5 text-gray-400' />
      </div>

      <div className='relative w-full sm:w-auto'>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className='w-full sm:w-auto px-4 py-2 pr-8 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none appearance-none [&>option]:bg-gray-800 [&>option]:text-white [&>option]:py-2'
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <HiChevronDown className='absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5 text-gray-400' />
      </div>

      {hasActiveFilters && (
        <button
          onClick={onClearFilters}
          className='flex items-center justify-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500 hover:bg-red-500/10 text-red-400 rounded-lg transition-colors font-medium whitespace-nowrap'
        >
          <HiXMark className='w-4 h-4' />
          <span className='hidden sm:inline'>Clear Filters</span>
          <span className='sm:hidden'>Clear</span>
        </button>
      )}
    </div>
  );
}
