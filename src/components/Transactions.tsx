// components/Transactions.tsx
import React from 'react';
import { FaArrowRight, FaArrowLeft, FaExchangeAlt } from 'react-icons/fa';

const transactions = [
  { id: 1, type: 'buy', crypto: 'Bitcoin', amount: 0.5, price: 45000, date: '2023-07-10' },
  { id: 2, type: 'sell', crypto: 'Ethereum', amount: 2, price: 3000, date: '2023-07-09' },
  { id: 3, type: 'swap', from: 'Litecoin', to: 'Cardano', amount: 10, date: '2023-07-08' },
];

const Transactions: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 ml-auto mr-auto">
      <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between border-b-2 pb-2">
            <div className="flex items-center">
              {transaction.type === 'buy' && <FaArrowRight className="text-green-500 mr-2" />}
              {transaction.type === 'sell' && <FaArrowLeft className="text-red-500 mr-2" />}
              {transaction.type === 'swap' && <FaExchangeAlt className="text-blue-500 mr-2" />}
              <div>
                <div className="font-medium">
                  {transaction.type === 'swap'
                    ? `Swap ${transaction.from} to ${transaction.to}`
                    : `${transaction.type === 'buy' ? 'Bought' : 'Sold'} ${transaction.crypto}`}
                </div>
                <div className="text-sm text-gray-500">{transaction.date}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">
                {transaction.type !== 'swap' && `${transaction.amount} ${transaction.crypto}`}
              </div>
              <div className="text-sm text-gray-500">
                {transaction.type !== 'swap' && `$${(transaction.amount * transaction.price).toLocaleString()}`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;