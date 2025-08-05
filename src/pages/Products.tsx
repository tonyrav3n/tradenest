import LoadMoreSection from '@/components/LoadMoreSection';
import NoProductsFound from '@/components/NoProductsFound';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';
import {
  filterAndSortProducts,
  type FilterOptions,
} from '@/lib/productFilters';
import { getProducts } from '@/lib/productStore';
import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState(getProducts());
  const [displayedProducts, setDisplayedProducts] = useState(6); // Show 6 products initially
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  // Refresh products when component mounts or when returning to this page
  useEffect(() => {
    setProducts(getProducts());
  }, []);

  // Get filtered and sorted products
  const filterOptions: FilterOptions = { searchTerm, selectedCategory, sortBy };
  const filteredProducts = filterAndSortProducts(products, filterOptions);

  // Reset displayed products when filters change
  useEffect(() => {
    setDisplayedProducts(6);
  }, [searchTerm, selectedCategory, sortBy]);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayedProducts((prev) => prev + 6);
      setIsLoading(false);
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSortBy('newest');
  };

  const hasMoreProducts = displayedProducts < filteredProducts.length;
  const productsToShow = filteredProducts.slice(0, displayedProducts);
  const hasActiveFilters = !!(searchTerm || selectedCategory);
  return (
    <div className='min-h-screen px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-8 sm:mb-12'>
          <h1 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
            Browse Products
          </h1>
          <p className='text-gray-300 max-w-2xl mx-auto px-4'>
            Discover and purchase digital products securely with cryptocurrency
          </p>
        </div>

        {/* Filters */}
        <ProductFilters
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          sortBy={sortBy}
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
          onSortChange={setSortBy}
          onClearFilters={clearFilters}
          hasActiveFilters={hasActiveFilters}
        />

        {/* Content */}
        {filteredProducts.length === 0 ? (
          <NoProductsFound
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
            onClearFilters={clearFilters}
          />
        ) : (
          <>
            {/* Products Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {productsToShow.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Load More */}
            <LoadMoreSection
              hasMoreProducts={hasMoreProducts}
              isLoading={isLoading}
              totalFilteredProducts={filteredProducts.length}
              onLoadMore={handleLoadMore}
              onScrollToTop={scrollToTop}
            />
          </>
        )}
      </div>
    </div>
  );
}
