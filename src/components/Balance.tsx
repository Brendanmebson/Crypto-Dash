import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

const Balance: React.FC = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [currency, setCurrency] = useState('NGN');
  const [showBreakdown, setShowBreakdown] = useState(false);

  const cryptoBalances = [
    { name: 'Bitcoin', amount: 0.5, valueNGN: 9750000 },
    { name: 'Ethereum', amount: 3.2, valueNGN: 3840000 },
    { name: 'Litecoin', amount: 15, valueNGN: 675000 },
    { name: 'Solana', amount: 50, valueNGN: 1250000 },
  ];

  const totalBalanceNGN = cryptoBalances.reduce((sum, crypto) => sum + crypto.valueNGN, 0);

  const exchangeRates = {
    NGN: 1,
    USD: 1 / 1562.50,
    EUR: 1 / 1701.06,
    GBP: 1 / 2026.43,
  };

  const convertCurrency = (amountNGN: number, toCurrency: string) => {
    return (amountNGN * exchangeRates[toCurrency]).toFixed(2);
  };

  const [{ height }, heightApi] = useSpring(() => ({
    height: 192,
    config: { tension: 300, friction: 30 }
  }));

  const [mainContentProps, mainContentApi] = useSpring(() => ({
    opacity: 1,
    transform: 'translateY(0px) scale(1)'
  }));

  const [breakdownProps, breakdownApi] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(50px) scale(0.9)'
  }));

  useEffect(() => {
    if (showBreakdown) {
      heightApi.start({ height: 280 });
      mainContentApi.start({ opacity: 0, transform: 'translateY(-50px) scale(0.9)' });
      breakdownApi.start({ opacity: 1, transform: 'translateY(0px) scale(1)' });
    } else {
      heightApi.start({ height: 192 });
      mainContentApi.start({ opacity: 1, transform: 'translateY(0px) scale(1)' });
      breakdownApi.start({ opacity: 0, transform: 'translateY(50px) scale(0.9)' });
    }
  }, [showBreakdown, heightApi, mainContentApi, breakdownApi]);

  const toggleBreakdown = () => {
    setShowBreakdown(!showBreakdown);
  };

  return (
    <animated.div style={{ height }} className="bg-green-100 rounded-3xl shadow-lg p-6 mb-8 overflow-hidden w-3/4 ml-auto mr-auto relative transition-all duration-300 ease-in-out">
      {/* SVG Background */}
      <div className="absolute inset-0">
        <img src="/src/assets/Balanceshape.svg" alt="Logo" className="w-full h-full object-cover mt-14" />
      </div>

      <div className="flex justify-between items-center mb-4 relative z-10">
        <h2 className="text-2xl font-bold">{showBreakdown ? "Balance Breakdown" : "Total Balance"}</h2>
        <div className="flex items-center space-x-4 ">
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
          <button onClick={() => setShowBalance(!showBalance)}>
            {showBalance ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      </div>
      <div className="relative h-full z-10">
        <animated.div style={mainContentProps} className="absolute inset-0">
          <div className="text-4xl font-bold mb-4">
            {showBalance ? `${currency} ${Number(convertCurrency(totalBalanceNGN, currency)).toLocaleString()}` : '********'}
          </div>
          <button
            className="text-white flex items-center"
            onClick={toggleBreakdown}
          >
            View Balance <FaChevronRight className="ml-1" />
          </button>
        </animated.div>
        <animated.div style={breakdownProps} className="absolute inset-0 overflow-y-auto">
          <div className="space-y-2 mb-4">
            {cryptoBalances.map((crypto) => (
              <div key={crypto.name} className="flex justify-between">
                <span>{crypto.name}</span>
                <span>
                  {showBalance
                    ? `${crypto.amount} (${currency} ${Number(convertCurrency(crypto.valueNGN, currency)).toLocaleString()})`
                    : '********'}
                </span>
              </div>
            ))}
          </div>
          <button
            className="text-white flex items-center mt-4"
            onClick={toggleBreakdown}
          >
            <FaChevronLeft className="mr-1" /> Back to Total
          </button>
        </animated.div>
      </div>
    </animated.div>
  );
};

export default Balance;
