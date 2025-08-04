import { calculateEquivalentPrice, getCurrencySymbol } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'tradenest-list-product-form';

export default function ListProduct() {
  const [formData, setFormData] = useState({
    title: '',
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
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    // TODO: Implement actual form submission
    console.log('Form data:', formData);

    // Clear saved data after successful submission
    clearSavedData();

    // Reset form
    setFormData({
      title: '',
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

    alert('Product listing submitted! (This is a demo)');
  };

  const isFormValid = () => {
    return (
      formData.title.trim() &&
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
                className='w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none'
                placeholder='Enter your product title'
                required
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor='description'
                className='block text-sm font-medium text-white mb-2'
              >
                Description *
              </label>
              <textarea
                id='description'
                name='description'
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className='w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none'
                placeholder='Describe your product in detail'
                required
              />
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
                Upload an image to showcase your product (PNG, JPG, GIF)
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
              List Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
