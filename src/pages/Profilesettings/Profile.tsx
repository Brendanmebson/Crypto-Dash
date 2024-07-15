import React, { useState } from 'react';
import { FaCamera, FaInfoCircle } from 'react-icons/fa';
import Securitysettings from './Securitysettings.tsx';
import Preference from './Preference.tsx';
import Others from './Others.tsx';
import ReferEarn from './ReferEarn.tsx';

const countries = [
  'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany',
  'France', 'Italy', 'Spain', 'Netherlands', 'Sweden',
  'Switzerland', 'Japan', 'China', 'India', 'Brazil',
  'Russia', 'Mexico', 'South Korea', 'Indonesia', 'Saudi Arabia',
  'Turkey', 'South Africa', 'Argentina', 'Norway', 'Denmark',
  'Finland', 'Ireland', 'Belgium', 'Austria', 'New Zealand',
  'Malaysia', 'Singapore', 'Philippines', 'Thailand', 'Vietnam',
  'United Arab Emirates', 'Israel', 'Chile', 'Colombia', 'Egypt',
  'Nigeria', 'Kenya', 'Pakistan', 'Bangladesh', 'Sri Lanka',
  'Portugal', 'Greece', 'Czech Republic', 'Poland', 'Hungary'
];

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [userID, setUserID] = useState('4A0EF');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState('');
  const [country, setCountry] = useState('');
  const [kycLevel, setKycLevel] = useState('Tier 1');

  const tabs = ['Profile', 'Security', 'Preference', 'Refer & Earn', 'Others'];

  return (
    <div className="container mx-auto p-6 overflow-hidden">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === tab
                  ? 'bg-green-400 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'Profile' && (
            <>
              <h2 className="text-2xl font-bold mb-6">My Profile</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full name</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Registration Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">UserID</label>
                    <input
                      type="text"
                      value={userID}
                      readOnly
                      className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Country</label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">KYC Level</label>
                    <input
                      type="text"
                      value={kycLevel}
                      readOnly
                      className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center relative">
                      <span className="text-3xl font-bold text-gray-500">CE</span>
                      <button className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2">
                        <FaCamera />
                      </button>
                    </div>
                    <button className="bg-white hover:bg-green-600 border-2 border-green-600  text-green-600 hover:text-white px-8 py-2 rounded-md ml-8 transition duration-300">
                      Save
                    </button>
                    <button className="bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-500 transition duration-300">
                      Upgrade to Tier 2
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-100 p-4 rounded-md flex items-start space-x-2">
                <FaInfoCircle className="text-green-500 mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  You can only edit your profile picture here. If you need to change your other information, please contact support.
                </p>
              </div>
            </>
          )}

          {activeTab === 'Security' && <Securitysettings />}
          {activeTab === 'Preference' && <Preference />}
          {activeTab === 'Refer & Earn' && <ReferEarn />}
          {activeTab === 'Others' && <Others />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
