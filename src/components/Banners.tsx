// components/Banners.tsx
import React from 'react';

const Banners: React.FC = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div className="group bg-white border rounded-xl shadow-lg p-6 w-3/4 ml-auto text-green-600 hover:bg-green-600  ">
        <h3 className="text-xl font-bold mb-2t text-green-600 group-hover:text-white">Leaderboard</h3>
        <p className="text-green-600 group-hover:text-white">You're in the top 10% of traders this week!</p>
      </div>
      <div className="group bg-white border rounded-xl shadow-lg p-6 w-3/4 text-green-600 hover:bg-green-600">
        <h3 className="text-xl font-bold mb-2 text-green-600  group-hover:text-white">KYC Level: 1</h3>
        <p className="group-hover:text-white">Upgrade to Level 2 for higher limits. <a href="#" className="text-blue-600">Learn more</a></p>
      </div>
    </div>
  );
};

export default Banners;