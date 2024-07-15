import React from 'react';
import { FaUserLock, FaLock, FaShieldAlt, FaBell, FaMobileAlt, FaChevronRight } from 'react-icons/fa';

const Securitysettings: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Security</h2>

          <div className="space-y-6">
            <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-green-500 hover:text-white">
              <div className="flex items-center space-x-4">
                <FaUserLock className="text-2xl text-gray-600 group-hover:text-white" />
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-white">Change PIN</h3>
                  <p className="text-sm text-gray-500 group-hover:text-white">Create and change your PIN seamlessly</p>
                </div>
              </div>
              <FaChevronRight className="text-gray-400 group-hover:text-white" />
            </div>

            <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-green-500 hover:text-white">
              <div className="flex items-center space-x-4">
                <FaLock className="text-2xl text-gray-600 group-hover:text-white" />
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-white">Change Password</h3>
                  <p className="text-sm text-gray-500 group-hover:text-white">Create and change your password seamlessly</p>
                </div>
              </div>
              <FaChevronRight className="text-gray-400 group-hover:text-white" />
            </div>

            <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-green-500 hover:text-white">
              <div className="flex items-center space-x-4">
                <FaShieldAlt className="text-2xl text-gray-600 group-hover:text-white" />
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-white">2-Factor Authentication</h3>
                  <p className="text-sm text-gray-500 group-hover:text-white">Further secure your account and funds</p>
                </div>
              </div>
              <FaChevronRight className="text-gray-400 group-hover:text-white" />
            </div>

           

            <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-green-500 hover:text-white">
              <div className="flex items-center space-x-4">
                <FaMobileAlt className="text-2xl text-gray-600 group-hover:text-white" />
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-white">Device Management</h3>
                  <p className="text-sm text-gray-500 group-hover:text-white">Manage devices connected to your account</p>
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

export default Securitysettings;
