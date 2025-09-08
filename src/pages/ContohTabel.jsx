import React from 'react';

const data = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  nama: `Nama ${i + 1}`,
  jenis: i % 2 === 0 ? 'Sarana' : 'Prasarana',
  status: i % 3 === 0 ? 'Aktif' : 'Nonaktif',
}));

const ContohTabel = () => (
  <div className="">
    <table className="w-full text-sm text-left text-gray-700 border border-gray-200">
      <thead>
        <tr className="bg-gray-100 sticky top-0 z-20">
          <th className="px-4 py-3 border-b border-gray-200">No</th>
          <th className="px-4 py-3 border-b border-gray-200">Nama</th>
          <th className="px-4 py-3 border-b border-gray-200">Jenis</th>
          <th className="px-4 py-3 border-b border-gray-200">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={row.id} className="hover:bg-gray-50">
            <td className="px-4 py-2 border-b border-gray-100">{idx + 1}</td>
            <td className="px-4 py-2 border-b border-gray-100">{row.nama}</td>
            <td className="px-4 py-2 border-b border-gray-100">{row.jenis}</td>
            <td className="px-4 py-2 border-b border-gray-100">{row.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="mt-4 text-gray-500 text-sm">Scroll halaman ke bawah untuk melihat efek sticky header.</p>
  </div>
);

export default ContohTabel;