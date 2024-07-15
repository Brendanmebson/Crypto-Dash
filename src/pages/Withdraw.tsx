// src/components/Withdraw.tsx
import React, { useState } from 'react';

const Withdraw: React.FC = () => {
  const cryptoBalances = [
    { name: 'Bitcoin', amount: 0.5, valueNGN: 9750000 },
    { name: 'Ethereum', amount: 3.2, valueNGN: 3840000 },
    { name: 'Litecoin', amount: 15, valueNGN: 675000 },
    { name: 'Solana', amount: 50, valueNGN: 1250000 },
  ];

  const exchangeRates = {
    NGN: 1,
    USD: 1 / 1562.50,
    EUR: 1 / 1701.06,
    GBP: 1 / 2026.43,
  };

  const [selectedCrypto, setSelectedCrypto] = useState(cryptoBalances[0].name);
  const [currency, setCurrency] = useState('NGN');
  const [withdrawType, setWithdrawType] = useState('Crypto');
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');

  const selectedCryptoData = cryptoBalances.find(crypto => crypto.name === selectedCrypto);
  const selectedCurrencyRate = exchangeRates[currency];
  
  const getConvertedValue = (valueNGN: number) => (valueNGN * selectedCurrencyRate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = parseFloat(value);

    if (!isNaN(numericValue) && numericValue >= 0) {
      if (withdrawType === 'Crypto' && selectedCryptoData && numericValue <= selectedCryptoData.amount) {
        setAmount(value);
      } else if (withdrawType === 'Fiat' && selectedCryptoData && numericValue <= getConvertedValue(selectedCryptoData.valueNGN)) {
        setAmount(value);
      } else if (numericValue > selectedCryptoData.amount) {
        setAmount(selectedCryptoData.amount.toString());
      }
    } else if (value === '') {
      setAmount('');
    }
  };

  const handleWithdraw = () => {
    // Add withdrawal logic here
    alert(`Withdraw ${amount} ${withdrawType === 'Crypto' ? selectedCrypto : currency} to ${address} with note: ${note}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-green-600 mb-6">Withdraw Funds</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Select Cryptocurrency</label>
        <select
          value={selectedCrypto}
          onChange={(e) => setSelectedCrypto(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          {cryptoBalances.map(crypto => (
            <option key={crypto.name} value={crypto.name}>{crypto.name}</option>
          ))}
        </select>
      </div>
      {selectedCryptoData && (
        <div className="mb-4">
          <p className="text-gray-700 text-sm font-bold mb-2">
            Balance: {selectedCryptoData.amount} {selectedCrypto} ({getConvertedValue(selectedCryptoData.valueNGN)} {currency})
          </p>
        </div>
      )}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Currency</label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="rounded px-2 py-1 bg-green-100"
        >
          <option value="NGN">NGN</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Withdraw Type</label>
        <select
          value={withdrawType}
          onChange={(e) => setWithdrawType(e.target.value)}
          className="rounded px-2 py-1 bg-green-100"
        >
          <option value="Crypto">Crypto</option>
          <option value="Fiat">Fiat</option>
        </select>
      </div>
      <div className="mb-4 relative">
        <label className="block text-gray-700 text-sm font-bold mb-2">Amount</label>
        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter amount to withdraw"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
          {withdrawType === 'Crypto' ? `${amount} ${selectedCrypto}` : `${getConvertedValue(parseFloat(amount) || 0)} ${currency}`}
        </span>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Crypto Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your crypto address"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Note (optional)</label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter a note"
        />
      </div>
      <button
        onClick={handleWithdraw}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full transition duration-200"
      >
        Withdraw
      </button>
    </div>
  );
};

export default Withdraw;
