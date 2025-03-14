import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ activeTab }) => {
  const tabs = [
    { name: 'Playground', path: '/' },
    { name: 'Activity', path: '/activity' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Sources', path: '/sources' },
    { name: 'Actions', path: '/actions', badge: 'New' },
    { name: 'Contacts', path: '/contacts', badge: 'New' },
    { name: 'Connect', path: '/connect' },
    { name: 'Settings', path: '/settings' }
  ];

  return (
    <header className="border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <div className="flex items-center mr-6">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
            <div className="ml-2 flex items-center">
              <span className="text-sm font-medium">My team</span>
              <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-sm font-medium">nevayali.com</span>
            <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-sm mr-4">Docs</a>
          <a href="#" className="text-sm mr-4">Help</a>
          <a href="#" className="text-sm mr-4">Changelog</a>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>
      <nav className="flex px-4">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            to={tab.path}
            className={`px-4 py-3 text-sm font-medium relative ${
              activeTab === tab.name.toLowerCase() 
                ? 'text-indigo-600 border-b-2 border-indigo-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.name}
            {tab.badge && (
              <span className="ml-1 px-1.5 py-0.5 text-xs bg-indigo-100 text-indigo-600 rounded">
                {tab.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar; 