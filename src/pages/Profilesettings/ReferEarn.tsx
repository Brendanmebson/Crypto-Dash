// src/components/ReferEarn.tsx
import React, { useState } from 'react';
import { FaMoneyBillWave } from 'react-icons/fa';

const ReferEarn: React.FC = () => {
  const [referralCode] = useState('X6EG7');
  const [referralList] = useState<string[]>([]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-10">
      <div className="flex items-center mb-4">
        <FaMoneyBillWave className="text-green-500 w-12 h-12 mr-4" />
        <h2 className="text-xl font-semibold">Refer & Earn</h2>
      </div>
      <p className="text-gray-600 mb-4">
        When your friends join the FUREX App via your referral code, you gain points after their first trade, and stand a chance to win an amazing prize!
      </p>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Referral Code</label>
        <div className="flex">
          <input
            type="text"
            value={referralCode}
            readOnly
            className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            onClick={() => copyToClipboard(referralCode)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r"
          >
            Copy
          </button>
        </div>
      </div>
     
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">Referral List</label>
        <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          {referralList.length > 0 ? (
            referralList.map((referral, index) => <div key={index}>{referral}</div>)
          ) : (
            <p className="text-gray-500">No referral yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReferEarn;
