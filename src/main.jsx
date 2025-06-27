import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import router from './Component/Routes.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from '../src/Component/Provider/AuthContext.jsx';
import ResumeProvider from './Component/Provider/ResumeContext.jsx'; 

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ResumeProvider> {/* 🆕 এই ResumeProvider দিয়ে wrap করো */}
          <RouterProvider router={router} />
          <ToastContainer position="top-right" autoClose={3000} theme="dark" />
        </ResumeProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
