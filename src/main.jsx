import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/custom/Header.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'sonner'
import Resulttrip from './result-trip/[tripId]/index.jsx'

const router =  createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path:'/create-trip',
    element: <CreateTrip />
  },
  
  {
    path:'/result-trip/:tripId',
    element: <Resulttrip />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Header/>
      <Toaster />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>,
)
