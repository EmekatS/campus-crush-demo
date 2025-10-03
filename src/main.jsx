import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { SignupProvider } from './contexts/SignupContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SignupProvider>
        <App />
      </SignupProvider>
    </BrowserRouter>
  </StrictMode>,
)
