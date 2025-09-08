import React, { useState } from 'react';
import { 
  Menu, 
  Search, 
  Bell, 
  Mail, 
  Moon, 
  ChevronDown,
  User,
  Settings,
  LogOut,
  X,
  PanelLeftClose
} from 'lucide-react';

const Header = ({ toggleSidebar = () => {}, isSidebarOpen }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="h-16 bg-blue-200 border-b border-gray-200 flex items-center justify-between px-4 lg:px-6">
      {/* Left section */}
      <div className="flex items-center">
        {/* Sidebar toggle button - always visible */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 mr-4"
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="w-5 h-5 text-gray-600" />
          ) : (
            <Menu className="w-5 h-5 text-gray-600" />
          )}
        </button>
        
        {/* Search */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-2">
        {/* Notification buttons */}
        
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative">
          <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1 right-1"></div>
          <Mail className="w-5 h-5 text-gray-600" />
        </button>
        
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative">
          <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1 right-1"></div>
          <Bell className="w-5 h-5 text-gray-600" />
        </button>

        {/* User menu */}
        <div className="relative ml-4">
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">NS</span>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </button>

          {/* Dropdown menu */}
          {isUserMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">Nama Saya</p>
                <p className="text-xs text-gray-500">NamaSaya@example.com</p>
              </div>
              
              <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <User className="w-4 h-4 mr-3" />
                Profile
              </button>
              
              <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                <Settings className="w-4 h-4 mr-3" />
                Settings
              </button>
              
              <div className="border-t border-gray-100 mt-1 pt-1">
                <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                  <LogOut className="w-4 h-4 mr-3" />
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;