import React from 'react';
import { createBrowserRouter } from 'react-router';
import { Root } from './components/Root';
import { MainContent } from './components/MainContent';
import { SkillsPage } from './components/SkillsPage';
import { FixPermissionErrorPage } from './components/FixPermissionErrorPage';
import { GetStartedPage } from './components/GetStartedPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: MainContent },
      { path: 'skills', Component: SkillsPage },
      { path: 'fix-permission-error', Component: FixPermissionErrorPage },
      { path: 'get-started', Component: GetStartedPage },
    ],
  },
]);