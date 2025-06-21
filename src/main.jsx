import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import router from './Component/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from '../src/Component/Provider/AuthContext.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* এখন সব রাউট ও কম্পোনেন্টকে AuthContext এ access দিবে */}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
