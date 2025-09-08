import React, { useState } from 'react';
import { 
  Home, ChevronDown, ChevronRight, Users, FileText, Settings, BarChart3, FolderOpen, BookOpen, Shield, Table
} from 'lucide-react';

const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: Home
  },
  {
    id: 'Sample Menu',
    label: 'Sample Menu',
    icon: FolderOpen,
    children: [
      { id: 'dashboard-sub1', label: 'Sub 1', icon: BarChart3 },
      { id: 'dashboard-sub2', label: 'Sub 2', icon: BarChart3 },
      { id: 'dashboard-sub3', label: 'Sub 3', icon: BarChart3 },
      { id: 'dashboard-sub4', label: 'Sub 4', icon: BarChart3 },
    ]
  },
  {
    id: 'perkeretapian',
    label: 'Perkeretapian',
    icon: Settings,
    children: [
      { id: 'sarana', label: 'Sarana', icon: FolderOpen },
      { id: 'prasarana', label: 'Prasarana', icon: Shield },
      { id: 'khusus', label: 'Khusus', icon: BookOpen },
    ]
  },
  {
    id: 'dokumen',
    label: 'Dokumen',
    icon: FileText,
    children: [
      { id: 'rekap-izin', label: 'Rekap Izin', icon: FileText },
      { id: 'simpan-berkas', label: 'Simpan Berkas', icon: FolderOpen },
      { id: 'laporan-kinerja', label: 'Laporan Kinerja', icon: BarChart3 },
    ]
  },
  {
    id: 'users',
    label: 'Users',
    icon: Users
  },
  {
    id: 'contoh-tabel',
    label: 'Contoh Tabel',
    icon: Table
  }
];

const Sidebar = ({ isOpen, currentPage, setCurrentPage }) => {
  const [expandedMenus, setExpandedMenus] = useState(['dashboard']);

  const toggleMenu = (menuId) => {
    setExpandedMenus(prev => 
      prev.includes(menuId) 
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };

  const renderMenuItem = (item, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedMenus.includes(item.id);
    const isActive = currentPage === item.id;
    const Icon = item.icon;

    return (
      <div key={item.id} className="w-full">
        <div
          className={`flex items-center w-full px-4 py-3 text-sm cursor-pointer transition-all duration-200 ${
            isActive 
              ? 'bg-blue-100 text-blue-600 border-r-3 border-blue-600' 
              : 'text-gray-600 hover:bg-gray-50'
          } ${depth > 0 ? 'pl-12' : ''}`}
          onClick={() => {
            if (hasChildren) {
              toggleMenu(item.id);
            } else {
              setCurrentPage(item.id);
            }
          }}
        >
          <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
          <span className="flex-1 truncate">{item.label}</span>
          {hasChildren && (
            <div className="ml-2">
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </div>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="bg-gray-50">
            {item.children?.map(child => renderMenuItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`
        h-full bg-white border-r border-gray-200 w-64
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        shadow overflow-y-auto
      `}
      style={{ minWidth: 256 }}
    >
      {/* Logo */}
      <div className="flex items-center h-16 px-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-800">ADMIN SITE</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <div className="space-y-1">
          {menuItems.map(item => renderMenuItem(item))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;