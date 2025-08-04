import type { Product } from './productStore';

export interface FilterOptions {
  searchTerm: string;
  selectedCategory: string;
  sortBy: string;
}

export const filterAndSortProducts = (
  products: Product[],
  options: FilterOptions
): Product[] => {
  let filtered = products;

  // Apply search filter
  if (options.searchTerm) {
    filtered = filtered.filter(
      (product) =>
        product.title
          .toLowerCase()
          .includes(options.searchTerm.toLowerCase()) ||
        product.summary
          .toLowerCase()
          .includes(options.searchTerm.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(options.searchTerm.toLowerCase())
    );
  }

  // Apply category filter
  if (options.selectedCategory) {
    filtered = filtered.filter((product) => {
      switch (options.selectedCategory) {
        case 'software':
          return product.category === 'Software & Tools';
        case 'art':
          return product.category === 'Digital Art & NFTs';
        case 'education':
          return product.category === 'Educational Content';
        case 'templates':
          return product.category === 'Templates & Themes';
        case 'photography':
          return product.category === 'Photography';
        case 'music':
          return product.category === 'Music & Audio';
        case 'ebooks':
          return product.category === 'E-books & Documents';
        case 'video':
          return product.category === 'Video & Animation';
        case 'games':
          return product.category === 'Games & Gaming Assets';
        default:
          return true;
      }
    });
  }

  // Apply sorting
  const sorted = [...filtered].sort((a, b) => {
    switch (options.sortBy) {
      case 'oldest':
        return (
          new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
        );
      case 'price-low':
        return a.priceUSD - b.priceUSD;
      case 'price-high':
        return b.priceUSD - a.priceUSD;
      case 'newest':
      default:
        return (
          new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
        );
    }
  });

  return sorted;
};

export const categoryOptions = [
  { value: '', label: 'All Categories' },
  { value: 'software', label: 'Software & Tools' },
  { value: 'art', label: 'Digital Art & NFTs' },
  { value: 'education', label: 'Educational Content' },
  { value: 'templates', label: 'Templates & Themes' },
  { value: 'photography', label: 'Photography' },
  { value: 'music', label: 'Music & Audio' },
  { value: 'ebooks', label: 'E-books & Documents' },
  { value: 'video', label: 'Video & Animation' },
  { value: 'games', label: 'Games & Gaming Assets' },
];

export const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
];
