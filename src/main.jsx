import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CryptoContex from './CryptoContex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
        <CryptoContex>
            <App/>
        </CryptoContex>
    </BrowserRouter>
    
)
