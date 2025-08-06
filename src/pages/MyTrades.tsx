import { useState } from 'react';
import { 
  HiClock, 
  HiCheckCircle, 
  HiExclamationTriangle, 
  HiEye, 
  HiChatBubbleLeftRight,
  HiArrowTopRightOnSquare,
  HiShieldCheck
} from 'react-icons/hi2';
import { mockTrades } from '@/data/mockTrades';
import type { Trade } from '@/data/mockTrades';

const getStatusColor = (status: Trade['status']) => {
  switch (status) {
    case 'pending':
      return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
    case 'in_progress':
      return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
    case 'completed':
      return 'text-green-400 bg-green-500/10 border-green-500/30';
    case 'disputed':
      return 'text-red-400 bg-red-500/10 border-red-500/30';
    default:
      return 'text-gray-400 bg-gray-500/10 border-gray-500/30';
  }
};

const getStatusIcon = (status: Trade['status']) => {
  switch (status) {
    case 'pending':
      return <HiClock className='w-4 h-4' />;
    case 'in_progress':
      return <HiShieldCheck className='w-4 h-4' />;
    case 'completed':
      return <HiCheckCircle className='w-4 h-4' />;
    case 'disputed':
      return <HiExclamationTriangle className='w-4 h-4' />;
    default:
      return <HiClock className='w-4 h-4' />;
  }
};

const getStatusText = (status: Trade['status']) => {
  switch (status) {
    case 'pending':
      return 'Pending';
    case 'in_progress':
      return 'In Progress';
    case 'completed':
      return 'Completed';
    case 'disputed':
      return 'Disputed';
    default:
      return 'Unknown';
  }
};

export default function MyTrades() {
  const [selectedTab, setSelectedTab] = useState<'all' | 'buying' | 'selling'>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | Trade['status']>('all');

  const filteredTrades = mockTrades.filter(trade => {
    const roleMatch = selectedTab === 'all' || 
      (selectedTab === 'buying' && trade.role === 'buyer') || 
      (selectedTab === 'selling' && trade.role === 'seller');
    
    const statusMatch = selectedStatus === 'all' || trade.status === selectedStatus;
    
    return roleMatch && statusMatch;
  });

  return (
    <div className='min-h-screen bg-[#0a090f] px-4 sm:px-6 lg:px-8 py-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
            My Active Trades
          </h1>
          <p className='text-gray-300 text-lg'>
            Manage your ongoing trades and view transaction history
          </p>
        </div>

        {/* Filters */}
        <div className='mb-8 space-y-4'>
          {/* Role Tabs */}
          <div className='flex flex-wrap gap-2'>
            <button
              onClick={() => setSelectedTab('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedTab === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-black/30 text-gray-300 hover:bg-blue-600/20 hover:text-blue-300'
              }`}
            >
              All Trades
            </button>
            <button
              onClick={() => setSelectedTab('buying')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedTab === 'buying'
                  ? 'bg-blue-600 text-white'
                  : 'bg-black/30 text-gray-300 hover:bg-blue-600/20 hover:text-blue-300'
              }`}
            >
              Buying
            </button>
            <button
              onClick={() => setSelectedTab('selling')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedTab === 'selling'
                  ? 'bg-blue-600 text-white'
                  : 'bg-black/30 text-gray-300 hover:bg-blue-600/20 hover:text-blue-300'
              }`}
            >
              Selling
            </button>
          </div>

          {/* Status Filter */}
          <div className='flex flex-wrap gap-2'>
            <button
              onClick={() => setSelectedStatus('all')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedStatus === 'all'
                  ? 'bg-gray-600 text-white'
                  : 'bg-black/30 text-gray-400 hover:bg-gray-600/20 hover:text-gray-300'
              }`}
            >
              All Status
            </button>
            <button
              onClick={() => setSelectedStatus('pending')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedStatus === 'pending'
                  ? 'bg-yellow-600 text-white'
                  : 'bg-black/30 text-gray-400 hover:bg-yellow-600/20 hover:text-yellow-300'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setSelectedStatus('in_progress')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedStatus === 'in_progress'
                  ? 'bg-blue-600 text-white'
                  : 'bg-black/30 text-gray-400 hover:bg-blue-600/20 hover:text-blue-300'
              }`}
            >
              In Progress
            </button>
            <button
              onClick={() => setSelectedStatus('completed')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedStatus === 'completed'
                  ? 'bg-green-600 text-white'
                  : 'bg-black/30 text-gray-400 hover:bg-green-600/20 hover:text-green-300'
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setSelectedStatus('disputed')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedStatus === 'disputed'
                  ? 'bg-red-600 text-white'
                  : 'bg-black/30 text-gray-400 hover:bg-red-600/20 hover:text-red-300'
              }`}
            >
              Disputed
            </button>
          </div>
        </div>

        {/* Trades List */}
        {filteredTrades.length === 0 ? (
          <div className='text-center py-12'>
            <div className='max-w-md mx-auto'>
              <HiShieldCheck className='w-16 h-16 text-gray-500 mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-white mb-2'>No Trades Found</h3>
              <p className='text-gray-400 mb-6'>
                {selectedTab === 'all' 
                  ? "You don't have any trades yet. Create your first trade to get started!"
                  : `No ${selectedTab} trades found with the selected filters.`
                }
              </p>
            </div>
          </div>
        ) : (
          <div className='space-y-4'>
            {filteredTrades.map((trade) => (
              <div 
                key={trade.id} 
                className='bg-black/30 backdrop-blur border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-200'
              >
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
                  {/* Trade Info */}
                  <div className='flex-1'>
                    <div className='flex items-start gap-3 mb-3'>
                      <div className='flex-1'>
                        <h3 className='text-lg font-semibold text-white mb-1'>
                          {trade.title}
                        </h3>
                        <div className='flex items-center gap-2 text-sm text-gray-400 mb-2'>
                          <span className='capitalize font-medium text-blue-400'>
                            {trade.role === 'buyer' ? 'Buying' : 'Selling'}
                          </span>
                          <span>•</span>
                          <span>{trade.category}</span>
                          <span>•</span>
                          <span>{trade.price} ETH</span>
                        </div>
                        <p className='text-gray-300 text-sm line-clamp-2'>
                          {trade.description}
                        </p>
                      </div>
                      
                      {/* Status Badge */}
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-md border text-xs font-medium ${getStatusColor(trade.status)}`}>
                        {getStatusIcon(trade.status)}
                        {getStatusText(trade.status)}
                      </div>
                    </div>

                    {/* Counterparty & Date */}
                    <div className='flex items-center gap-4 text-sm text-gray-400'>
                      <span>
                        {trade.role === 'buyer' ? 'Seller' : 'Buyer'}: {trade.counterparty}
                      </span>
                      <span>•</span>
                      <span>Created: {new Date(trade.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className='flex items-center gap-2'>
                    {trade.previewUrl && (
                      <button className='flex items-center gap-2 px-3 py-2 bg-gray-600/20 hover:bg-gray-600/30 text-gray-300 hover:text-white rounded-lg transition-all duration-200 text-sm'>
                        <HiEye className='w-4 h-4' />
                        Preview
                      </button>
                    )}
                    
                    <button className='flex items-center gap-2 px-3 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 hover:text-blue-200 rounded-lg transition-all duration-200 text-sm'>
                      <HiChatBubbleLeftRight className='w-4 h-4' />
                      Chat
                    </button>
                    
                    <button className='flex items-center gap-2 px-3 py-2 bg-green-600/20 hover:bg-green-600/30 text-green-300 hover:text-green-200 rounded-lg transition-all duration-200 text-sm'>
                      <HiArrowTopRightOnSquare className='w-4 h-4' />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats Summary */}
        {filteredTrades.length > 0 && (
          <div className='mt-8 grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='bg-black/30 backdrop-blur border border-white/10 rounded-lg p-4 text-center'>
              <div className='text-2xl font-bold text-blue-400'>
                {mockTrades.filter(t => t.status === 'in_progress').length}
              </div>
              <div className='text-sm text-gray-400'>Active</div>
            </div>
            <div className='bg-black/30 backdrop-blur border border-white/10 rounded-lg p-4 text-center'>
              <div className='text-2xl font-bold text-green-400'>
                {mockTrades.filter(t => t.status === 'completed').length}
              </div>
              <div className='text-sm text-gray-400'>Completed</div>
            </div>
            <div className='bg-black/30 backdrop-blur border border-white/10 rounded-lg p-4 text-center'>
              <div className='text-2xl font-bold text-yellow-400'>
                {mockTrades.filter(t => t.status === 'pending').length}
              </div>
              <div className='text-sm text-gray-400'>Pending</div>
            </div>
            <div className='bg-black/30 backdrop-blur border border-white/10 rounded-lg p-4 text-center'>
              <div className='text-2xl font-bold text-white'>
                {mockTrades.reduce((acc, t) => acc + parseFloat(t.price), 0).toFixed(3)}
              </div>
              <div className='text-sm text-gray-400'>Total ETH</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
