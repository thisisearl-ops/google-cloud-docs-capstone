import { Header } from './Header';
import { Outlet } from 'react-router';

export function Root() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <div className="relative min-h-[calc(100vh-65px)]">
        <Outlet />
      </div>
    </div>
  );
}