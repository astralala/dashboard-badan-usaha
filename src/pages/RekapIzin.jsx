import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded mb-2 bg-gray-50">
      <button
        className="w-full flex justify-between items-center px-4 py-3 font-medium text-left focus:outline-none"
        onClick={() => setOpen((v) => !v)}
      >
        <span>{title}</span>
        <span>{open ? '-' : '+'}</span>
      </button>
      {open && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
};

const Card = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow p-4 mb-4">
    <h4 className="font-semibold text-lg mb-2">{title}</h4>
    {children}
  </div>
);

const RekapIzin = () => {
  const [activeTab, setActiveTab] = useState('izin-aktif');
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow space-y-8">
      {/* Title & Heading */}
      <div>
        <h1 className="text-3xl font-extrabold mb-1">Rekap Izin</h1>
        <h2 className="text-xl font-bold mb-4 text-blue-700">Demo UI/UX Tailwind Components</h2>
        <p className="text-gray-500 mb-2">Halaman ini menampilkan berbagai contoh komponen UI/UX.</p>
      </div>

      {/* Tabs */}
      <div>
        <div className="flex border-b mb-4">
          <button
            className={`px-4 py-2 -mb-px border-b-2 font-medium transition ${
              activeTab === 'izin-aktif'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-blue-600'
            }`}
            onClick={() => setActiveTab('izin-aktif')}
          >
            Izin Aktif
          </button>
          <button
            className={`px-4 py-2 -mb-px border-b-2 font-medium transition ${
              activeTab === 'izin-expired'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-blue-600'
            }`}
            onClick={() => setActiveTab('izin-expired')}
          >
            Izin Expired
          </button>
        </div>
        <div>
          {activeTab === 'izin-aktif' ? (
            <div className="p-4 bg-blue-50 rounded">Daftar izin yang masih aktif.</div>
          ) : (
            <div className="p-4 bg-red-50 rounded">Daftar izin yang sudah expired.</div>
          )}
        </div>
      </div>

      {/* Accordion Demo */}
      <div>
        <h3 className="font-bold text-lg mb-2">Accordion Demo</h3>
        <Accordion title="Apa itu Izin Aktif?">
          Izin aktif adalah izin yang masih berlaku dan belum kadaluarsa.
        </Accordion>
        <Accordion title="Bagaimana cara memperpanjang izin?">
          Anda dapat memperpanjang izin melalui menu pengajuan perpanjangan di aplikasi.
        </Accordion>
        <Accordion title="Siapa yang dapat mengakses data izin?">
          Hanya user dengan hak akses tertentu yang dapat melihat data izin.
        </Accordion>
      </div>

      {/* Card Demo */}
      <div>
        <h3 className="font-bold text-lg mb-2">Card Demo</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card title="Total Izin Aktif">
            <div className="text-2xl font-bold text-blue-600">12</div>
            <div className="text-gray-500 text-sm">Per 2025</div>
          </Card>
          <Card title="Total Izin Expired">
            <div className="text-2xl font-bold text-red-600">3</div>
            <div className="text-gray-500 text-sm">Per 2025</div>
          </Card>
        </div>
      </div>

      {/* Alert */}
      <div>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          onClick={() => setShowAlert(true)}
        >
          Tampilkan Alert
        </button>
        {showAlert && (
          <div className="mt-4 flex items-center bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded" role="alert">
            <span className="flex-1">Ini adalah contoh alert!</span>
            <button
              className="ml-4 text-yellow-700 hover:text-yellow-900"
              onClick={() => setShowAlert(false)}
            >
              Tutup
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setShowModal(true)}
        >
          Tampilkan Modal
        </button>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
              <h3 className="text-lg font-bold mb-2">Ini Modal</h3>
              <p className="mb-4">Ini adalah contoh modal sederhana dengan Tailwind CSS.</p>
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => setShowModal(false)}
              >
                Tutup Modal
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Button Demo */}
      <div className="space-x-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Primary</button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">Secondary</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Success</button>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Danger</button>
      </div>
    </div>
  );
};

export default RekapIzin;