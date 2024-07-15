// components/ActionButtons.tsx
import React, { useState } from 'react';
import { FaShoppingCart, FaExchangeAlt, FaCoins } from 'react-icons/fa';
import CryptoActionModal from './CryptoActionModal';

const ActionButtons: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<'buy' | 'sell' | 'swap' | null>(null);

  const openModal = (action: 'buy' | 'sell' | 'swap') => {
    setSelectedAction(action);
    setModalOpen(true);
  };

  return (
    <>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => openModal('buy')}
          className="bg-white hover:bg-green-600 border-2 border-green-600  text-green-600 hover:text-white font-bold py-4 px-8 rounded-full flex items-center transition duration-300"
        >
          <FaShoppingCart className="mr-2" /> Buy
        </button>
        <button
          onClick={() => openModal('sell')}
          className="bg-white hover:bg-red-600 border-2 border-red-600  text-red-600 hover:text-white font-bold py-4 px-8 rounded-full flex items-center transition duration-300"
        >
          <FaCoins className="mr-2" /> Sell
        </button>
        <button
          onClick={() => openModal('swap')}
          className="bg-white hover:bg-blue-600 border-2 border-blue-600  text-blue-600 hover:text-white font-bold py-4 px-8 rounded-full flex items-center transition duration-300"
        >
          <FaExchangeAlt className="mr-2" /> Swap
        </button>
      </div>
      {modalOpen && selectedAction && (
        <CryptoActionModal
          initialAction={selectedAction}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

export default ActionButtons;