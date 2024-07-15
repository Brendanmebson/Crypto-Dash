// src/pages/Dashboard.tsx
import React, { useState } from 'react';
import Balance from '../components/Balance';
import Banners from '../components/Banners';
import ActionButtons from '../components/ActionButtons';
import TrendingCryptos from '../components/TrendingCryptos';
import Transactions from '../components/Transactions';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'trending' | 'transactions'>('trending');

  return (
    <div className="container mx-auto px-4 py-8">
      <Balance />
      <Banners />
      <ActionButtons />
      <div className="mt-8 w-3/4 ml-auto mr-auto">
        <div className="flex border-b border-gray-200">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'trending' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('trending')}
          >
            Trending
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === 'transactions' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('transactions')}
          >
            Transactions
          </button>
        </div>
        <div className="mt-4">
          {activeTab === 'trending' ? <TrendingCryptos /> : <Transactions />}
        </div>
      </div>
      </div>
  );
};


export default Dashboard;