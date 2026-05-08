import { Footer } from './Footer';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

export function GetStartedPage() {
  return (
    <main className="flex-1 bg-white relative overflow-y-auto">
      <div className="max-w-[1200px] mx-auto px-10 py-12 pb-24 min-h-[calc(100vh-65px)]">
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-0.5" />
                <span className="text-gray-900 font-medium">Get Started</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* Content */}
        <div className="max-w-[800px]">
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 tracking-tight">
            Get Started with Google Cloud
          </h1>
          <p className="text-[17px] text-gray-700 leading-relaxed max-w-2xl">
            Get $300 in free credits and free usage of 20+ products on signup to run, test, and deploy workloads.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}