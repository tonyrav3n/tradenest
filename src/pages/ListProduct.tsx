import { calculateEquivalentPrice, getCurrencySymbol } from '@/lib/utils';
import { addProduct } from '@/lib/productStore';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';

const STORAGE_KEY = 'tradenest-list-product-form';

export default function ListProduct() {
  const navigate = useNavigate();
  const { address, isConnected } = useAccount();
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    description: '',
    category: '',
    priceUSD: '',
    network: '',
    file: null as File | null,
    previewImage: null as File | null,
    agreeToTerms: false,
  });

  const [equivalentPrice, setEquivalentPrice] = useState('0.00');

  // Refs for file inputs to manually clear them
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewImageInputRef = useRef<HTMLInputElement>(null);

  // Load form data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        // Don't restore files and terms checkbox for security/UX reasons
        const { file, previewImage, agreeToTerms, ...restData } = parsedData;
        setFormData((prev) => ({ ...prev, ...restData }));

        // Recalculate equivalent price if we have both USD price and network
        if (parsedData.priceUSD && parsedData.network) {
          setEquivalentPrice(
            calculateEquivalentPrice(parsedData.priceUSD, parsedData.network)
          );
        }
      } catch (error) {
        console.error('Error loading saved form data:', error);
      }
    }
  }, []);

  // Save form data to localStorage whenever it changes (except files)
  useEffect(() => {
    const { file, previewImage, ...dataToSave } = formData;
    // Only save if there's actual data to prevent saving empty initial state
    if (
      Object.values(dataToSave).some((value) => value !== '' && value !== false)
    ) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    }
  }, [formData]);

  // Clear localStorage after successful submission
  const clearSavedData = () => {
    localStorage.removeItem(STORAGE_KEY);
  };

  const categories = [
    'Software & Tools',
    'Digital Art & NFTs',
    'E-books & Documents',
    'Music & Audio',
    'Video & Animation',
    'Templates & Themes',
    'Photography',
    'Educational Content',
    'Games & Gaming Assets',
    'Other',
  ];

  const networks = [
    { value: 'ethereum', label: 'Ethereum (ETH)' },
    { value: 'polygon', label: 'Polygon (MATIC)' },
    { value: 'bsc', label: 'Binance Smart Chain (BNB)' },
  ];

  const acceptedFileTypes = [
    '.pdf',
    '.doc',
    '.docx',
    '.zip',
    '.rar',
    '.mp3',
    '.mp4',
    '.wav',
    '.png',
    '.jpg',
    '.jpeg',
    '.gif',
    '.psd',
    '.ai',
    '.svg',
    '.exe',
    '.dmg',
    '.pkg',
    '.deb',
    '.rpm',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));

      // Update equivalent price when USD price or network changes
      if (name === 'priceUSD' || name === 'network') {
        const usdPrice = name === 'priceUSD' ? value : formData.priceUSD;
        const network = name === 'network' ? value : formData.network;
        setEquivalentPrice(calculateEquivalentPrice(usdPrice, network));
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
  };

  const handlePreviewImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, previewImage: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if wallet is connected
    if (!isConnected || !address) {
      alert('Please connect your wallet to list a product');
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    try {
      // Add the product to our store with the connected wallet address
      const newProduct = addProduct({
        title: formData.title,
        summary: formData.summary,
        description: formData.description,
        category: formData.category,
        priceUSD: formData.priceUSD,
        network: formData.network,
        file: formData.file,
        previewImage: formData.previewImage,
      }, address);

      console.log('New product created:', newProduct);

      // Clear saved data after successful submission
      clearSavedData();

      // Reset form
      setFormData({
        title: '',
        summary: '',
        description: '',
        category: '',
        priceUSD: '',
        network: '',
        file: null,
        previewImage: null,
        agreeToTerms: false,
      });
      setEquivalentPrice('0.00');

      // Manually clear file inputs
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      if (previewImageInputRef.current) {
        previewImageInputRef.current.value = '';
      }

      // Show success message and redirect
      alert(`Product "${newProduct.title}" has been listed successfully! Redirecting to product page...`);
      
      // Navigate to the new product's detail page
      setTimeout(() => {
        navigate(`/product/${newProduct.id}`);
      }, 1000);

    } catch (error) {
      console.error('Error creating product:', error);
      alert('There was an error listing your product. Please try again.');
    }
  };

  const isFormValid = () => {
    return (
      isConnected &&
      address &&
      formData.title.trim() &&
      formData.summary.trim() &&
      formData.description.trim() &&
      formData.category &&
      formData.priceUSD &&
      formData.network &&
      formData.file &&
      formData.agreeToTerms
    );
  };

  return (
    <div className='min-h-screen px-4 sm:px-6 lg:px-8 pt-32 pb-12'>
      <div className='max-w-2xl mx-auto'>
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold text-white mb-4'>
            List Your Product
          </h1>
          <p className='text-gray-300'>
            Create a secure listing for your digital product
          </p>
        </div>

        <div className='bg-black/30 border border-blue-500 rounded-xl p-8'>
          {/* Wallet Connection Status */}
          <div className='mb-6 p-4 border rounded-lg' style={{
            borderColor: isConnected ? '#22c55e' : '#f59e0b',
            backgroundColor: isConnected ? '#22c55e10' : '#f59e0b10'
          }}>
            <div className='flex items-center justify-between'>
              <div>
                <p className='font-medium' style={{ color: isConnected ? '#22c55e' : '#f59e0b' }}>
                  {isConnected ? '✅ Wallet Connected' : '⚠️ Wallet Not Connected'}
                </p>
                {isConnected && address && (
                  <p className='text-sm text-gray-400 mt-1'>
                    Connected as: <span className='font-mono'>{address.slice(0, 6)}...{address.slice(-4)}</span>
                  </p>
                )}
                {!isConnected && (
                  <p className='text-sm text-gray-400 mt-1'>
                    You need to connect your wallet to list products
                  </p>
                )}
              </div>
              {!isConnected && (
                <w3m-button />
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Product Title */}
            <div>
              <label
                htmlFor='title'
                className='block text-sm font-medium text-white mb-2'
              >
                Product Title *
              </label>
              <input
                type='text'
                id='title'
                name='title'
                value={formData.title}
                onChange={handleInputChange}
                maxLength={100}
                className='w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none'
                placeholder='Enter your product title'
                required
              />
              <div className='flex justify-end mt-1'>
                <p className='text-xs text-gray-400'>
                  {formData.title.length}/100
                </p>
              </div>
            </div>

            {/* Summary */}
            <div>
              <label
                htmlFor='summary'
                className='block text-sm font-medium text-white mb-2'
              >
                Summary *
              </label>
              <textarea
                id='summary'
                name='summary'
                value={formData.summary}
                onChange={handleInputChange}
                rows={2}
                maxLength={160}
                className='w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none'
                placeholder='Brief summary of your product'
                required
              />
              <div className='flex justify-between items-center mt-1'>
                <p className='text-xs text-gray-400'>
                  Keep it concise - this will be displayed on product cards
                </p>
                <p className='text-xs text-gray-400'>
                  {formData.summary.length}/160
                </p>
              </div>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor='description'
                className='block text-sm font-medium text-white mb-2'
              >
                Full Description *
              </label>
              <textarea
                id='description'
                name='description'
                value={formData.description}
                onChange={handleInputChange}
                rows={6}
                maxLength={2000}
                className='w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none'
                placeholder='Detailed description of your product'
                required
              />
              <div className='flex justify-between items-center mt-1'>
                <p className='text-xs text-gray-400'>
                  Provide comprehensive details about your product
                </p>
                <p className='text-xs text-gray-400'>
                  {formData.description.length}/2000
                </p>
              </div>
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor='category'
                className='block text-sm font-medium text-white mb-2'
              >
                Category *
              </label>
              <select
                id='category'
                name='category'
                value={formData.category}
                onChange={handleInputChange}
                className='w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none'
                required
              >
                <option value=''>Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price and Network */}
            <div className='grid md:grid-cols-2 gap-4'>
              <div>
                <label
                  htmlFor='priceUSD'
                  className='block text-sm font-medium text-white mb-2'
                >
                  Price (USD) *
                </label>
                <input
                  type='number'
                  id='priceUSD'
                  name='priceUSD'
                  value={formData.priceUSD}
                  onChange={handleInputChange}
                  min='0'
                  step='0.01'
                  className='w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none'
                  placeholder='0.00'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor='network'
                  className='block text-sm font-medium text-white mb-2'
                >
                  Network *
                </label>
                <select
                  id='network'
                  name='network'
                  value={formData.network}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none'
                  required
                >
                  <option value=''>Select network</option>
                  {networks.map((network) => (
                    <option key={network.value} value={network.value}>
                      {network.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Equivalent Price */}
            <div>
              <label className='block text-sm font-medium text-white mb-2'>
                Equivalent Price
              </label>
              <div className='px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-300'>
                {equivalentPrice}{' '}
                {formData.network ? getCurrencySymbol(formData.network) : ''}
              </div>
              <p className='text-sm text-gray-400 mt-1'>
                Auto-calculated based on current exchange rates
              </p>
            </div>

            {/* File Upload */}
            <div>
              <label
                htmlFor='file'
                className='block text-sm font-medium text-white mb-2'
              >
                Product File *
              </label>
              <input
                type='file'
                id='file'
                name='file'
                ref={fileInputRef}
                onChange={handleFileChange}
                accept={acceptedFileTypes.join(',')}
                className='w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 focus:border-blue-500 focus:outline-none'
                required
              />
              <p className='text-sm text-gray-400 mt-1'>
                Accepted formats: {acceptedFileTypes.join(', ')}
              </p>
            </div>

            {/* Preview Image */}
            <div>
              <label
                htmlFor='previewImage'
                className='block text-sm font-medium text-white mb-2'
              >
                Preview Image (Optional)
              </label>
              <input
                type='file'
                id='previewImage'
                name='previewImage'
                ref={previewImageInputRef}
                onChange={handlePreviewImageChange}
                accept='image/*'
                className='w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 focus:border-blue-500 focus:outline-none'
              />
              <p className='text-sm text-gray-400 mt-1'>
                Upload an image to showcase your product
              </p>
            </div>

            {/* Terms Checkbox */}
            <div className='flex items-start space-x-3'>
              <input
                type='checkbox'
                id='agreeToTerms'
                name='agreeToTerms'
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className='mt-1 w-4 h-4 text-blue-600 bg-black/50 border-gray-600 rounded focus:ring-blue-500 focus:ring-2'
                required
              />
              <label htmlFor='agreeToTerms' className='text-sm text-gray-300'>
                I agree to the{' '}
                <a
                  href='#'
                  className='text-blue-400 hover:text-blue-300 underline'
                >
                  terms and conditions
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              disabled={!isFormValid()}
              className='w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors font-semibold text-lg'
            >
              {!isConnected ? 'Connect Wallet to List Product' : 'List Product'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
