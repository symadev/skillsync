import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import router from './Component/Routes.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from '../src/Component/Provider/AuthContext.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Step 1: Import React Query client
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//  Step 2: Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*  Step 3: Wrap everything inside QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer position="top-right" autoClose={3000} theme="dark"/>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
