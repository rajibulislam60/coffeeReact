import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Navbar.jsx'
import Bannar from './Bannar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div className="nbArea">
      <Navbar/>
      <Bannar/>
    </div>
    
  </React.StrictMode>,
)
