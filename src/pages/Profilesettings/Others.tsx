import React from 'react';
import { FaQuestionCircle, FaInfoCircle, FaSignOutAlt, FaTrashAlt, FaChevronRight } from 'react-icons/fa';

const Others: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Other Settings</h2>

          <div className="space-y-6">
            <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-green-500 hover:text-white">
              <div className="flex items-center space-x-4">
                <FaQuestionCircle className="text-2xl text-gray-600 group-hover:text-white" />
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-white">Help & Support</h3>
                  <p className="text-sm text-gray-500 group-hover:text-white">Get assistance with your account</p>
                </div>
              </div>
              <FaChevronRight className="text-gray-400 group-hover:text-white" />
            </div>

            <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-green-500 hover:text-white">
              <div className="flex items-center space-x-4">
                <FaInfoCircle className="text-2xl text-gray-600 group-hover:text-white" />
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-white">About DKoge</h3>
                  <p className="text-sm text-gray-500 group-hover:text-white">Learn more about DKoge</p>
                </div>
              </div>
              <FaChevronRight className="text-gray-400 group-hover:text-white" />
            </div>

            <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-green-500 hover:text-white">
              <div className="flex items-center space-x-4">
                <FaSignOutAlt className="text-2xl text-gray-600 group-hover:text-white" />
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-white">Logout</h3>
                  <p className="text-sm text-gray-500 group-hover:text-white">Sign out from your account</p>
                </div>
              </div>
              <FaChevronRight className="text-gray-400 group-hover:text-white" />
            </div>

            <div className="group flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-green-500 hover:text-white">
              <div className="flex items-center space-x-4">
                <FaTrashAlt className="text-2xl text-red-600 group-hover:text-white" />
                <div>
                  <h3 className="text-lg  text-red-600 font-semibold group-hover:text-white">Delete Account</h3>
                  <p className="text-sm text-red-600 group-hover:text-white">Permanently delete your account</p>
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

export default Others;
