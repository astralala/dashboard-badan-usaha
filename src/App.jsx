import React, { useState } from 'react';
import AdminLayout from './components/Layout/AdminLayout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Dokumen from './pages/Dokumen';
import Settings from './pages/Settings';
import ContohTabel from './pages/ContohTabel';
import SimpanBerkas from './pages/SimpanBerkas';
import RekapIzin from './pages/RekapIzin';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
      case 'dashboard-sub1':
      case 'dashboard-sub2':
      case 'dashboard-sub3':
      case 'dashboard-sub4':
        return <Dashboard />;
      case 'users':
        return <Users />;
      case 'sarana':
      case 'prasarana':
      case 'khusus':
        return (
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {currentPage === 'sarana' ? 'Sarana' : 
               currentPage === 'prasarana' ? 'Prasarana' : 'Khusus'}
            </h1>
            <p className="text-gray-600">This page is under construction.</p>
          </div>
        );
      case 'rekap-izin':
        return <RekapIzin />;
      case 'simpan-berkas':
        return <SimpanBerkas />;
      case 'laporan-kinerja':
      case 'dokumen':
        return <Dokumen />;
      case 'contoh-tabel':
        return <ContohTabel />;
      default:
        return <Settings />;
    }
  };

  return (
    <AdminLayout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </AdminLayout>
  );
}

export default App;