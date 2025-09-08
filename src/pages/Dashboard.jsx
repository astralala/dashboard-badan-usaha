import React from 'react';
import { BarChart3, Users, FileText, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color, trend }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        {trend && <p className="text-sm text-green-600 mt-1">{trend}</p>}
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  </div>
);

const TaskItem = ({ name, progress, status, time, color }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-900">{name}</p>
    </div>
    <div className="flex items-center space-x-4">
      <div className="w-24">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${color}`} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <span className="text-sm font-medium text-gray-900 w-12">{status}</span>
      <span className="text-xs text-gray-500 w-16">{time}</span>
    </div>
  </div>
);

const Dashboard = () => {
  const stats = [
    { title: 'Total Users', value: '92,600', icon: Users, color: 'bg-blue-500', trend: '+12.5%' },
    { title: 'Active Projects', value: '37,515', icon: BarChart3, color: 'bg-green-500', trend: '+8.2%' },
    { title: 'Documents', value: '55,085', icon: FileText, color: 'bg-orange-500', trend: '+15.3%' },
    { title: 'Revenue', value: '$48,692', icon: TrendingUp, color: 'bg-purple-500', trend: '+23.1%' },
  ];

  const tasks = [
    { name: 'Gravida pellentesque ac tortor', progress: 40, status: '40%', time: '2 mins ago', color: 'bg-green-500' },
    { name: 'Sem in maecenas commodo', progress: 23, status: '23%', time: '4 hrs ago', color: 'bg-purple-500' },
    { name: 'Purus tellus ultrices diam', progress: 80, status: '80%', time: '1 min ago', color: 'bg-blue-500' },
    { name: 'Morbi mauris sed gravida', progress: 60, status: '60%', time: '2 weeks ago', color: 'bg-red-500' },
    { name: 'Hendrerit hendrerit magna blandit', progress: 40, status: '40%', time: '2 mins ago', color: 'bg-green-500' },
  ];

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500">
        <span>Users</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Profile</span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Block Card</h3>
            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
              <FileText className="w-4 h-4" />
            </button>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h4 className="text-lg font-medium text-blue-600 mb-2">Urna placerat venenatis nisl</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                <span>Web Developer</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Jan 20, 1989</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                <span className="text-blue-600">123@gmail.com</span>
              </div>
              <div className="flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                <span>+62 (123) 123-123</span>
              </div>
            </div>
            
            <div className="flex justify-center space-x-2 mt-4">
              <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                <Users className="w-4 h-4" />
              </button>
              <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                <Users className="w-4 h-4" />
              </button>
              <button className="p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800">
                <Users className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tasks Card */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Task</h3>
          
          <div className="space-y-1">
            {tasks.map((task, index) => (
              <TaskItem key={index} {...task} />
            ))}
          </div>
        </div>
      </div>

      {/* Additional Cards Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sample Block */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Sample Block</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg mr-3">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Enim aliquam urna scelerisque</p>
                  <p className="text-lg font-semibold">92,600</p>
                </div>
              </div>
              <span className="text-sm font-medium text-purple-600">90%</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Porttitor dignissim urna urna</p>
                  <p className="text-lg font-semibold">37,515</p>
                </div>
              </div>
              <span className="text-sm font-medium text-blue-600">65%</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg mr-3">
                  <FileText className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Sapien purus ac amet</p>
                  <p className="text-lg font-semibold">55,085</p>
                </div>
              </div>
              <span className="text-sm font-medium text-orange-600">80%</span>
            </div>
          </div>
        </div>

        {/* Sample Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Sample Block</h3>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
              Button New
            </button>
          </div>
          
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span className="text-gray-600">Monthly Visitors</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span className="text-gray-600">Unlimited Reports</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span className="text-gray-600">Data Storage</span>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">5 Days Left</span>
              <span className="text-sm text-gray-600">25 / Page</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;