import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import router from './Component/Routes.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from '../src/Component/Provider/AuthContext.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} theme="dark"/>
    </AuthProvider>
  </StrictMode>
);
