// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to close the dropdown
  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" onClick={closeDropdown}>
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
              <div className="absolute right-0 mt-2 ml-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <Link 
                  to="/Dashboard" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/Profile" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Profile Settings
                </Link>
                <Link 
                  to="/Withdraw" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Withdraw
                </Link>
                <a 
                  href="#" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
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

export default Navbar;