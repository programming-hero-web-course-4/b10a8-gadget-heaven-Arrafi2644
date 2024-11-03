import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";
import MainTemplate from './pages/MainTemplate.jsx';
import { router } from './routes/Routes.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
