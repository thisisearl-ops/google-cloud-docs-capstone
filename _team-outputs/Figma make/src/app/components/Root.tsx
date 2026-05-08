import React from 'react';
import { Header } from './Header';
import { Outlet } from 'react-router';

export function Root() {
  return (
    <div className="flex flex-col h-screen bg-white font-sans text-slate-900 overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <div className="flex flex-1 overflow-hidden relative">
        <Outlet />
      </div>
    </div>
  );
}