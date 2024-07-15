// components/CryptoActionModal.tsx
import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaExchangeAlt, FaTimes } from 'react-icons/fa';

interface CryptoActionModalProps {
  initialAction: 'buy' | 'sell' | 'swap';
  onClose: () => void;
}

interface CoinBalance {
  name: string;
  amount: number;
  valueNGN: number;
}

type Currency = 'NGN' | 'USD' | 'EUR' | 'GBP';

const CryptoActionModal: React.FC<CryptoActionModalProps> = ({ initialAction, onClose }) => {
  const [action, setAction] = useState(initialAction);
  const [coinType, setCoinType] = useState('');
  const [amount, setAmount] = useState('');
  const [showCoinList, setShowCoinList] = useState<boolean | string>(false);
  const [currency, setCurrency] = useState<Currency>('NGN');

  // Swap specific states
  const [fromCoin, setFromCoin] = useState<CoinBalance | null>(null);
  const [toCoin, setToCoin] = useState<CoinBalance | null>(null);
  const [swapAmount, setSwapAmount] = useState('');

  const availableCoins: CoinBalance[] = [
    { name: 'Bitcoin', amount: 0.5, valueNGN: 9750000 },
    { name: 'Ethereum', amount: 3.2, valueNGN: 3840000 },
    { name: 'Litecoin', amount: 15, valueNGN: 675000 },
    { name: 'Solana', amount: 50, valueNGN: 1250000 },
  ];

  const currencySymbols: Record<Currency, string> = {
    NGN: '₦',
    USD: '$',
    EUR: '€',
    GBP: '£'
  };

  const exchangeRates: Record<Currency, number> = {
    NGN: 1,
    USD: 1 / 1562.50,
    EUR: 1 / 1701.06,
    GBP: 1 / 2026.43
  };

  const isFormFilled = action === 'swap' 
    ? (fromCoin && toCoin && swapAmount)
    : (coinType && amount);

  const toggleCurrency = () => {
    const currencies: Currency[] = ['NGN', 'USD', 'EUR', 'GBP'];
    const currentIndex = currencies.indexOf(currency);
    const nextIndex = (currentIndex + 1) % currencies.length;
    setCurrency(currencies[nextIndex]);
  };

  useEffect(() => {
    // Reset form when changing actions
    setCoinType('');
    setAmount('');
    setFromCoin(null);
    setToCoin(null);
    setSwapAmount('');
  }, [action]);

  const calculateSwapResult = () => {
    if (fromCoin && toCoin && swapAmount) {
      const fromValue = parseFloat(swapAmount) * fromCoin.valueNGN;
      const toAmount = fromValue / toCoin.valueNGN;
      return toAmount.toFixed(6);
    }
    return '0';
  };

  const renderSwapInterface = () => (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
        <div className="relative">
          <button
            className="w-full text-left bg-white border border-gray-300 rounded-md py-2 px-3 flex items-center justify-between"
            onClick={() => setShowCoinList('from')}
          >
            {fromCoin ? `${fromCoin.name} (Balance: ${fromCoin.amount})` : 'Select coin'}
            <FaChevronDown />
          </button>
          {showCoinList === 'from' && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg max-h-48 overflow-y-auto">
              {availableCoins.map((coin) => (
                <li
                  key={coin.name}
                  className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setFromCoin(coin);
                    setShowCoinList(false);
                  }}
                >
                  {coin.name} (Balance: {coin.amount})
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
        <div className="relative">
          <button
            className="w-full text-left bg-white border border-gray-300 rounded-md py-2 px-3 flex items-center justify-between"
            onClick={() => setShowCoinList('to')}
          >
            {toCoin ? toCoin.name : 'Select coin'}
            <FaChevronDown />
          </button>
          {showCoinList === 'to' && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg max-h-48 overflow-y-auto">
              {availableCoins.filter(coin => coin.name !== fromCoin?.name).map((coin) => (
                <li
                  key={coin.name}
                  className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setToCoin(coin);
                    setShowCoinList(false);
                  }}
                >
                  {coin.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Amount to Swap</label>
        <input
          type="number"
          value={swapAmount}
          onChange={(e) => setSwapAmount(Math.max(0, Number(e.target.value)).toString())}
          max={fromCoin?.amount}
          className="w-full border border-gray-300 rounded-md py-2 px-3"
          placeholder="0"
          min="0"
        />
      </div>

      {fromCoin && toCoin && swapAmount && (
        <div className="mb-4 p-3 bg-gray-100 rounded-md">
          <p className="text-sm text-gray-700">
            Swapping {swapAmount} {fromCoin.name} (₦{(parseFloat(swapAmount) * fromCoin.valueNGN).toFixed(2)})
          </p>
          <p className="text-sm text-gray-700">
            You will receive approximately {calculateSwapResult()} {toCoin.name}
          </p>
        </div>
      )}
    </>
  );

  const renderBuySellInterface = () => (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Coin type</label>
        <div className="relative">
          <button
            className="w-full text-left bg-white border border-gray-300 rounded-md py-2 px-3 flex items-center justify-between"
            onClick={() => setShowCoinList(!showCoinList)}
          >
            {coinType || 'Select coin type'}
            <FaChevronDown />
          </button>
          {showCoinList && (
            <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg max-h-48 overflow-y-auto">
              {availableCoins.map((coin) => (
                <li
                  key={coin.name}
                  className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setCoinType(coin.name);
                    setShowCoinList(false);
                  }}
                >
                  {coin.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
        <div className="relative">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Math.max(0, Number(e.target.value)).toString())}
            className="w-full border border-gray-300 rounded-md py-2 px-3 pr-12"
            placeholder="0"
            min="0"
          />
          <span className="absolute right-3 top-2 text-gray-500">{currencySymbols[currency]}</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span>Amount in {currency === 'NGN' ? 'other currencies' : 'Naira'} ---</span>
        <button className="text-blue-500 flex items-center" onClick={toggleCurrency}>
          Set by {currency} <FaExchangeAlt className="ml-1" />
        </button>
      </div>

      <div className="mb-4">
        <span className="text-sm text-gray-500">
          {action === 'buy' ? 'Buying rate' : 'Selling rate'}
        </span>
        <span className="float-right font-medium">
          {currency === 'NGN'
            ? `1 ${currencySymbols[currency]} = ${(exchangeRates['USD']).toFixed(6)} USD`
            : `1 ${currencySymbols[currency]} = ${(1 / exchangeRates[currency]).toFixed(2)} NGN`}
        </span>
      </div>

      {coinType && amount && (
        <div className="mb-4 p-3 bg-gray-100 rounded-md">
          <p className="text-sm text-gray-700">
            {action === 'buy' ? 'Buying' : 'Selling'} {amount} {currencySymbols[currency]} worth of {coinType}
          </p>
          <p className="text-sm text-gray-700">
            Estimated {coinType} amount: {(parseFloat(amount) / (availableCoins.find(c => c.name === coinType)!.valueNGN * exchangeRates[currency])).toFixed(6)}
          </p>
        </div>
      )}
    </>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300"
        >
          <FaTimes size={24} />
        </button>
        
        <div className="flex mb-4 border-b">
          {['buy', 'sell', 'swap'].map((actionType) => (
            <button
              key={actionType}
              className={`flex-1 py-3 px-4 text-sm sm:text-base 
                ${action === actionType ? 'bg-gray-100 font-bold border-b-2 border-blue-500' : ''}
                ${action === actionType && isFormFilled ? 'bg-green-500 text-white' : ''}`}
              onClick={() => setAction(actionType as 'buy' | 'sell' | 'swap')}
            >
              {actionType.charAt(0).toUpperCase() + actionType.slice(1)}
            </button>
          ))}
        </div>

        <div className="p-6">
          {action === 'swap' ? renderSwapInterface() : renderBuySellInterface()}

          <button
            className={`w-full font-bold py-2 px-4 rounded-md transition duration-300
              ${isFormFilled 
                ? 'bg-green-500 hover:bg-green-600 text-white' 
                : 'bg-gray-300 text-gray-700 cursor-not-allowed'}`}
            disabled={!isFormFilled}
          >
            {action === 'buy' ? 'Buy Crypto' : action === 'sell' ? 'Sell Crypto' : 'Swap Crypto'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoActionModal;