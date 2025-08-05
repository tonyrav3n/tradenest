export default function ProductSkeleton() {
  return (
    <div className='bg-black/30 border border-gray-600/30 rounded-xl overflow-hidden animate-pulse'>
      {/* Image Skeleton */}
      <div className='aspect-video w-full bg-gray-700/30'></div>

      {/* Content Skeleton */}
      <div className='p-4 sm:p-6 space-y-3'>
        {/* Badge Skeleton */}
        <div className='w-20 h-5 bg-gray-700/40 rounded-full'></div>

        {/* Title Skeleton */}
        <div className='space-y-2'>
          <div className='w-3/4 h-5 bg-gray-700/40 rounded'></div>
          <div className='w-1/2 h-4 bg-gray-700/30 rounded'></div>
        </div>

        {/* Description Skeleton */}
        <div className='space-y-2 pt-1'>
          <div className='w-full h-3 bg-gray-700/30 rounded'></div>
          <div className='w-2/3 h-3 bg-gray-700/30 rounded'></div>
        </div>

        {/* Price Skeleton */}
        <div className='pt-2 space-y-1'>
          <div className='w-24 h-5 bg-gray-700/40 rounded'></div>
          <div className='w-20 h-4 bg-gray-700/30 rounded'></div>
        </div>

        {/* Seller & Date Skeleton */}
        <div className='flex justify-between pt-2'>
          <div className='w-16 h-3 bg-gray-700/30 rounded'></div>
          <div className='w-12 h-3 bg-gray-700/30 rounded'></div>
        </div>

        {/* Buttons Skeleton */}
        <div className='flex gap-2 pt-2'>
          <div className='flex-1 h-8 bg-gray-700/40 rounded-lg'></div>
          <div className='w-20 h-8 bg-gray-700/30 rounded-lg'></div>
        </div>
      </div>
    </div>
  );
}
