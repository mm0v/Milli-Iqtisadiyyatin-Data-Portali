import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './sass/style.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './i18n/i18next';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
