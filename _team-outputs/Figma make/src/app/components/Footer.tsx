import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-24 px-8 mt-20 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Products and pricing</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">See all products</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Google Cloud pricing</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Google Cloud Marketplace</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact sales</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Community forums</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Release Notes</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">System status</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Tools</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">GitHub</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Getting Started with Google Cloud</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Code samples</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Cloud Architecture Center</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Training and Certification</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Engage</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Events</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">X (Twitter)</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Google Cloud on YouTube</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Google Cloud Tech on YouTube</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
