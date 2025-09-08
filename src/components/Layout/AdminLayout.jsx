import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const AdminLayout = ({ children, currentPage, setCurrentPage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`
          transition-all duration-300
          ${isSidebarOpen ? 'w-64' : 'w-0'}
          overflow-hidden
        `}
        style={{ minWidth: isSidebarOpen ? 256 : 0 }}
      >
        <Sidebar
          isOpen={isSidebarOpen}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      {/* Main area, akan full jika sidebar hide */}
      <div className="flex-1 flex flex-col overflow-hidden transition-all duration-300">
        <Header
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;