// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbarsettings: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/">
              <img src="/src/assets/react.svg" alt="Logo" className="h-8 w-auto" />
            </Link>
          </div>
          <div className="relative">
            <button
              className="flex items-center space-x-2"
              onClick={() => setShowDropdown(!showDropdown)}
            >
                <FaUser className="text-gray-700" />
                <span className="text-gray-700">Hello, John Doe</span>
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 ml-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <Link to="/Profilesettings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Profile Settings
                </Link>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbarsettings;