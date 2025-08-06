import { useState } from 'react';
import { HiPlus, HiExclamationTriangle, HiCheckCircle } from 'react-icons/hi2';

interface TradeFormData {
  title: string;
  category: string;
  price: string;
  description: string;
  previewUrl: string;
}

const categories = [
  'Software & Tools',
  'Digital Art & NFTs',
  'Music & Audio',
  'Video & Film',
  'Photography',
  'Documents & E-books',
  'Educational Content',
  'Games & Entertainment',
  'Other'
];

export default function CreateTrade() {
  const [formData, setFormData] = useState<TradeFormData>({
    title: '',
    category: '',
    price: '',
    description: '',
    previewUrl: ''
  });

  const [errors, setErrors] = useState<Partial<TradeFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<TradeFormData> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    if (!formData.price.trim()) {
      newErrors.price = 'Price is required';
    } else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = 'Price must be a valid positive number';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    }

    if (formData.previewUrl && !isValidUrl(formData.previewUrl)) {
      newErrors.previewUrl = 'Please enter a valid URL';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (string: string): boolean => {
    try {
      new URL(string);
      return true;
    } catch {
      return false;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof TradeFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Creating trade with data:', formData);
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        title: '',
        category: '',
        price: '',
        description: '',
        previewUrl: ''
      });
      setShowSuccess(false);
    }, 3000);
  };

  const isFormValid = 
    formData.title.trim().length > 0 &&
    formData.category.length > 0 &&
    formData.price.trim().length > 0 &&
    !isNaN(Number(formData.price)) &&
    Number(formData.price) > 0 &&
    formData.description.trim().length >= 10 &&
    (formData.previewUrl === '' || isValidUrl(formData.previewUrl));

  return (
    <div className='min-h-screen bg-[#0a090f] px-4 sm:px-6 lg:px-8 py-8'>
      <div className='max-w-2xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h1 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
            Create New Trade
          </h1>
          <p className='text-gray-300 text-lg'>
            Set up a secure escrow trade for your digital product
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className='mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3'>
            <HiCheckCircle className='w-5 h-5 text-green-400 flex-shrink-0' />
            <span className='text-green-300'>Trade created successfully! Contract will be deployed when both parties are ready.</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className='bg-black/30 backdrop-blur border border-blue-500 rounded-xl p-6 sm:p-8 space-y-6'>
          {/* Title */}
          <div>
            <label htmlFor='title' className='block text-sm font-medium text-white mb-2'>
              Trade Title *
            </label>
            <input
              type='text'
              id='title'
              name='title'
              value={formData.title}
              onChange={handleInputChange}
              placeholder='e.g., Premium Photoshop Action Pack'
              className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${
                errors.title 
                  ? 'border-red-500/50 focus:ring-red-500/50' 
                  : 'border-white/20 focus:ring-blue-500/50 focus:border-blue-500/50'
              }`}
            />
            {errors.title && (
              <p className='mt-2 text-sm text-red-400 flex items-center gap-2'>
                <HiExclamationTriangle className='w-4 h-4' />
                {errors.title}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label htmlFor='category' className='block text-sm font-medium text-white mb-2'>
              Category *
            </label>
            <select
              id='category'
              name='category'
              value={formData.category}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white focus:outline-none focus:ring-2 transition-colors ${
                errors.category 
                  ? 'border-red-500/50 focus:ring-red-500/50' 
                  : 'border-white/20 focus:ring-blue-500/50 focus:border-blue-500/50'
              }`}
            >
              <option value='' className='bg-black'>Select a category</option>
              {categories.map(category => (
                <option key={category} value={category} className='bg-black'>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className='mt-2 text-sm text-red-400 flex items-center gap-2'>
                <HiExclamationTriangle className='w-4 h-4' />
                {errors.category}
              </p>
            )}
          </div>

          {/* Price */}
          <div>
            <label htmlFor='price' className='block text-sm font-medium text-white mb-2'>
              Price (ETH) *
            </label>
            <input
              type='number'
              id='price'
              name='price'
              value={formData.price}
              onChange={handleInputChange}
              placeholder='0.05'
              step='0.001'
              min='0'
              className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${
                errors.price 
                  ? 'border-red-500/50 focus:ring-red-500/50' 
                  : 'border-white/20 focus:ring-blue-500/50 focus:border-blue-500/50'
              }`}
            />
            {errors.price && (
              <p className='mt-2 text-sm text-red-400 flex items-center gap-2'>
                <HiExclamationTriangle className='w-4 h-4' />
                {errors.price}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label htmlFor='description' className='block text-sm font-medium text-white mb-2'>
              Description *
            </label>
            <textarea
              id='description'
              name='description'
              value={formData.description}
              onChange={handleInputChange}
              placeholder='Describe your digital product, what the buyer will receive, and any important details...'
              rows={5}
              className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors resize-vertical ${
                errors.description 
                  ? 'border-red-500/50 focus:ring-red-500/50' 
                  : 'border-white/20 focus:ring-blue-500/50 focus:border-blue-500/50'
              }`}
            />
            <div className='mt-1 flex justify-between text-sm text-gray-400'>
              <span>{formData.description.length}/1000 characters</span>
              <span>Minimum 10 characters</span>
            </div>
            {errors.description && (
              <p className='mt-2 text-sm text-red-400 flex items-center gap-2'>
                <HiExclamationTriangle className='w-4 h-4' />
                {errors.description}
              </p>
            )}
          </div>

          {/* Preview URL */}
          <div>
            <label htmlFor='previewUrl' className='block text-sm font-medium text-white mb-2'>
              Preview URL (Optional)
            </label>
            <input
              type='url'
              id='previewUrl'
              name='previewUrl'
              value={formData.previewUrl}
              onChange={handleInputChange}
              placeholder='https://example.com/preview-image.jpg'
              className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors ${
                errors.previewUrl 
                  ? 'border-red-500/50 focus:ring-red-500/50' 
                  : 'border-white/20 focus:ring-blue-500/50 focus:border-blue-500/50'
              }`}
            />
            <p className='mt-1 text-sm text-gray-400'>
              Optional: Link to a preview image or demo of your product
            </p>
            {errors.previewUrl && (
              <p className='mt-2 text-sm text-red-400 flex items-center gap-2'>
                <HiExclamationTriangle className='w-4 h-4' />
                {errors.previewUrl}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className='pt-4'>
            <button
              type='submit'
              disabled={!isFormValid || isSubmitting}
              className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a090f] ${
                isFormValid && !isSubmitting
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-blue-600/20 hover:shadow-lg focus-visible:ring-blue-500/60'
                  : 'bg-gray-600 text-gray-300 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                  Creating Trade...
                </>
              ) : (
                <>
                  <HiPlus className='w-5 h-5' />
                  Create Trade
                </>
              )}
            </button>
          </div>

          {/* Info Message */}
          <div className='bg-blue-500/10 border border-blue-500/30 rounded-lg p-4'>
            <div className='flex items-start gap-3'>
              <HiExclamationTriangle className='w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5' />
              <div className='text-sm text-blue-300'>
                <p className='font-medium mb-1'>How it works:</p>
                <ul className='space-y-1 text-blue-300/80'>
                  <li>• Your trade will be created and shareable via link</li>
                  <li>• Buyer deposits payment into escrow contract</li>
                  <li>• You deliver the digital product</li>
                  <li>• Buyer confirms receipt and payment is released</li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
