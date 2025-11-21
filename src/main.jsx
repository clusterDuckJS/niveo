import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './stylesheet.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop offset={64} /> {/* offset = header height so content isn't hidden under sticky header */}
      <App />
    </HashRouter>
  </StrictMode>,
)
