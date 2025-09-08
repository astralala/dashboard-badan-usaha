import React, { useState } from 'react';
import { FileText, Download, Eye, Upload, Calendar, Filter } from 'lucide-react';

const Dokumen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const documents = [
    {
      id: 1,
      name: 'Laporan Kinerja Q1 2025.pdf',
      type: 'PDF',
      size: '2.4 MB',
      uploadedBy: 'John Doe',
      uploadDate: '2025-01-15',
      status: 'approved',
      category: 'Laporan Kinerja'
    },
    {
      id: 2,
      name: 'Rekap Izin Januari.xlsx',
      type: 'Excel',
      size: '1.8 MB',
      uploadedBy: 'Jane Smith',
      uploadDate: '2025-01-14',
      status: 'pending',
      category: 'Rekap Izin'
    },
    {
      id: 3,
      name: 'Surat Permohonan Sarana.docx',
      type: 'Word',
      size: '0.5 MB',
      uploadedBy: 'Mike Johnson',
      uploadDate: '2025-01-13',
      status: 'approved',
      category: 'Simpan Berkas'
    },
    {
      id: 4,
      name: 'Data Prasarana 2025.pdf',
      type: 'PDF',
      size: '3.2 MB',
      uploadedBy: 'Sarah Wilson',
      uploadDate: '2025-01-12',
      status: 'rejected',
      category: 'Simpan Berkas'
    },
    {
      id: 5,
      name: 'Budget Analysis.xlsx',
      type: 'Excel',
      size: '2.1 MB',
      uploadedBy: 'Tom Brown',
      uploadDate: '2025-01-11',
      status: 'approved',
      category: 'Laporan Kinerja'
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || doc.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getFileIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FileText className="w-5 h-5 text-red-500" />;
      case 'excel':
        return <FileText className="w-5 h-5 text-green-500" />;
      case 'word':
        return <FileText className="w-5 h-5 text-blue-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dokumen Management</h1>
          <p className="text-gray-600">Manage and organize your documents</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
          <Upload className="w-4 h-4 mr-2" />
          Upload Document
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Total Documents</p>
              <p className="text-2xl font-semibold text-gray-900">{documents.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Approved</p>
              <p className="text-2xl font-semibold text-gray-900">
                {documents.filter(d => d.status === 'approved').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <FileText className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-semibold text-gray-900">
                {documents.filter(d => d.status === 'pending').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <FileText className="w-6 h-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600">Rejected</p>
              <p className="text-2xl font-semibold text-gray-900">
                {documents.filter(d => d.status === 'rejected').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="lg:w-48">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Categories</option>
              <option value="Rekap Izin">Rekap Izin</option>
              <option value="Simpan Berkas">Simpan Berkas</option>
              <option value="Laporan Kinerja">Laporan Kinerja</option>
            </select>
          </div>
          <div className="lg:w-48">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocuments.map((doc) => (
          <div key={doc.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                {getFileIcon(doc.type)}
                <span className="ml-2 text-sm text-gray-500">{doc.type}</span>
              </div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(doc.status)}`}>
                {doc.status}
              </span>
            </div>
            
            <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{doc.name}</h3>
            
            <div className="text-sm text-gray-500 space-y-1 mb-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{doc.uploadDate}</span>
              </div>
              <div>Size: {doc.size}</div>
              <div>By: {doc.uploadedBy}</div>
              <div>Category: {doc.category}</div>
            </div>
            
            <div className="flex items-center space-x-2 pt-4 border-t border-gray-100">
              <button className="flex items-center px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded">
                <Eye className="w-4 h-4 mr-1" />
                View
              </button>
              <button className="flex items-center px-3 py-1 text-sm text-green-600 hover:bg-green-50 rounded">
                <Download className="w-4 h-4 mr-1" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDocuments.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No documents found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default Dokumen;