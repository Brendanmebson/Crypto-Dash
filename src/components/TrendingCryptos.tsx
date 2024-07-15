// components/TrendingCryptos.tsx
import React from 'react';

const trendingCryptos = [
  { name: 'Bitcoin', symbol: 'BTC', previousPrice: 45000, currentPrice: 46000 },
  { name: 'Ethereum', symbol: 'ETH', previousPrice: 3000, currentPrice: 2950 },
  { name: 'Cardano', symbol: 'ADA', previousPrice: 1.2, currentPrice: 1.25 },
];

const TrendingCryptos: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 ml-auto mr-auto">
      <h3 className="text-xl font-bold mb-4">Trending Cryptocurrencies</h3>
      <div className="space-y-4">
        {trendingCryptos.map((crypto) => (
          <div key={crypto.symbol} className="flex items-center justify-between border-b-2 pb-2">
            <div className="flex items-center">
              <img src={`/crypto-icons/${crypto.symbol.toLowerCase()}.svg`} alt={crypto.name} className="w-8 h-8 mr-2" />
              <div>
                <div className="font-medium">{crypto.name}</div>
                <div className="text-sm text-gray-500">{crypto.symbol}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">${crypto.currentPrice.toLocaleString()}</div>
              <div className={`text-sm ${crypto.currentPrice > crypto.previousPrice ? 'text-green-600' : 'text-red-600'}`}>
                {((crypto.currentPrice - crypto.previousPrice) / crypto.previousPrice * 100).toFixed(2)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCryptos;