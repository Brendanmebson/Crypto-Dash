import React from 'react';
import { FaCheckCircle, FaDollarSign, FaWallet, FaGlobe, FaBell, FaChevronRight } from 'react-icons/fa';

const Preferences: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Preference</h2>

          <div className="space-y-6">
            <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-green-500 hover:text-white">
              <div className="flex items-center space-x-4">
                <FaCheckCircle className="text-2xl text-gray-600 group-hover:text-white" />
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-white">Verification</h3>
                  <p className="text-sm text-gray-500 group-hover:text-white">Verify your identity to increase limits</p>
                </div>
              </div>
              <FaChevronRight className="text-gray-400 group-hover:text-white" />
            </div>

            <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-green-500 hover:text-white">
              <div className="flex items-center space-x-4">
                <FaDollarSign className="text-2xl text-gray-600 group-hover:text-white" />
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-white">Currency</h3>
                  <p className="text-sm text-gray-500 group-hover:text-white">Change your primary currency from NGN</p>
                </div>
              </div>
              <FaChevronRight className="text-gray-400 group-hover:text-white" />
            </div>

            <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-green-500 hover:text-white">
              <div className="flex items-center space-x-4">
                <FaWallet className="text-2xl text-gray-600 group-hover:text-white" />
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-white">Accounts</h3>
                  <p className="text-sm text-gray-500 group-hover:text-white">Add and remove bank accounts</p>
                </div>
              </div>
              <FaChevronRight className="text-gray-400 group-hover:text-white" />
            </div>

            <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-green-500 hover:text-white">
              <div className="flex items-center space-x-4">
                <FaGlobe className="text-2xl text-gray-600 group-hover:text-white" />
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-white">Language</h3>
                  <p className="text-sm text-gray-500 group-hover:text-white">Set your preferred language</p>
                </div>
              </div>
              <FaChevronRight className="text-gray-400 group-hover:text-white" />
            </div>

            <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-green-500 hover:text-white">
              <div className="flex items-center space-x-4">
                <FaBell className="text-2xl text-gray-600 group-hover:text-white" />
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-white">Notifications</h3>
                  <p className="text-sm text-gray-500 group-hover:text-white">Manage your notification settings</p>
                </div>
              </div>
              <FaChevronRight className="text-gray-400 group-hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
