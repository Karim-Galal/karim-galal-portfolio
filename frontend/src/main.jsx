import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'


// document.documentElement.dataset.theme = "amber";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />

  </StrictMode>,
)
