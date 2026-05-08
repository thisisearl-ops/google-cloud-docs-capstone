import React, { useState, useRef, useEffect } from 'react';
import { Search, Grid, HelpCircle, Bell, MoreVertical, Settings, ChevronDown, Globe, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import googleCloudLogo from 'figma:asset/1ac3fe2be02d90feebe160036f7151a5308dea6d.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false);
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const resourcesMenuRef = useRef<HTMLDivElement>(null);
  const solutionsMenuRef = useRef<HTMLDivElement>(null);
  const productsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (resourcesMenuRef.current && !resourcesMenuRef.current.contains(event.target as Node)) {
        setIsResourcesMenuOpen(false);
      }
      if (solutionsMenuRef.current && !solutionsMenuRef.current.contains(event.target as Node)) {
        setIsSolutionsMenuOpen(false);
      }
      if (productsMenuRef.current && !productsMenuRef.current.contains(event.target as Node)) {
        setIsProductsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center">
        <div className="w-[256px] flex items-center shrink-0">
          <Link to="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <img src={googleCloudLogo} alt="Google Cloud" className="h-[29px] object-contain" />
          </Link>
        </div>
        
        <nav className="hidden lg:flex items-center gap-6 text-sm text-gray-600 font-medium">
          <a href="#" className="hover:text-blue-600 transition-colors">Overview</a>
          
          <div className="relative" ref={solutionsMenuRef}>
            <button 
              className="flex items-center gap-1 hover:text-blue-600 transition-colors text-sm font-medium"
              onClick={() => setIsSolutionsMenuOpen(!isSolutionsMenuOpen)}
            >
              Solutions
              <ChevronDown className={`w-3 h-3 transition-transform ${isSolutionsMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isSolutionsMenuOpen && (
              <div className="absolute left-0 top-full mt-2 w-[280px] bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[70vh] overflow-y-auto">
                <div className="flex flex-col">
                  {[
                    'Featured products',
                    'AI and ML',
                    'Application development',
                    'Application hosting',
                    'Compute',
                    'Data analytics',
                    'Databases',
                    'Distributed, hybrid, and multicloud',
                    'Industry solutions',
                    'Migration',
                    'Networking',
                    'Observability and monitoring',
                    'Security',
                    'Storage',
                    'Cross-product'
                  ].map((item, index) => (
                    <a key={index} href="#" className="text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors font-medium">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative" ref={productsMenuRef}>
            <button 
              className="flex items-center gap-1 hover:text-blue-600 transition-colors text-sm font-medium"
              onClick={() => setIsProductsMenuOpen(!isProductsMenuOpen)}
            >
              Products
              <ChevronDown className={`w-3 h-3 transition-transform ${isProductsMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isProductsMenuOpen && (
              <div className="absolute left-0 top-full mt-2 w-[340px] bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[70vh] overflow-y-auto flex flex-col">
                <div className="flex flex-col">
                  {[
                    'Apigee',
                    'BigQuery',
                    'Cloud CDN',
                    'Cloud Run',
                    'Cloud SQL',
                    'Cloud Storage',
                    'Compute Engine',
                    'Gemini Enterprise',
                    'Google Kubernetes Engine documentation',
                    'Looker'
                  ].map((item, index) => (
                    <a key={index} href="#" className="text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors font-medium">
                      {item}
                    </a>
                  ))}
                </div>
                <div className="px-4 py-3 mt-1 border-t border-gray-100">
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium underline">
                    see more products
                  </a>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative" ref={resourcesMenuRef}>
            <button 
              className="flex items-center gap-1 hover:text-blue-600 transition-colors text-sm font-medium"
              onClick={() => setIsResourcesMenuOpen(!isResourcesMenuOpen)}
            >
              Resources
              <ChevronDown className={`w-3 h-3 transition-transform ${isResourcesMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isResourcesMenuOpen && (
              <div className="absolute left-0 top-full mt-2 w-[280px] bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex flex-col">
                  <a href="#" className="text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors font-medium">
                    Access and resources management
                  </a>
                  <a href="#" className="text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors font-medium">
                    Costs and usage management
                  </a>
                  <a href="#" className="text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors font-medium">
                    Infrastructure as code
                  </a>
                  <a href="#" className="text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors font-medium">
                    SDK, languages, frameworks, and tools
                  </a>
                </div>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-blue-600 transition-colors">Support</a>
        </nav>
      </div>

      <div className="flex items-center gap-4 text-gray-600">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
          <Search className="w-5 h-5" />
        </button>
        <button className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
          Console
          <ExternalLink className="w-4 h-4" />
        </button>
        
        <div className="h-4 w-px bg-gray-300 hidden sm:block mx-1"></div>
        
        <button className="hidden md:flex items-center gap-1.5 text-sm font-medium hover:text-blue-600 transition-colors">
          <Globe className="w-4 h-4" />
          <span>English</span>
        </button>
        
        <div className="relative" ref={menuRef}>
          <button 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MoreVertical className="w-5 h-5" />
          </button>
          
          {isMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-[280px] bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 pb-3 mb-2 border-b border-gray-100">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Google Developer Program
                </h3>
              </div>
              <div className="flex flex-col">
                <button className="text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors font-medium">
                  Dashboard
                </button>
                <button className="text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors font-medium">
                  Saved pages
                </button>
                <button className="text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors font-medium">
                  Communities and Programs
                </button>
              </div>
            </div>
          )}
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors hidden sm:block">
          Start free
        </button>
      </div>
    </header>
  );
}
