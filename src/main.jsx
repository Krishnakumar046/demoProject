import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "Bootstrap/dist/css/bootstrap.min.css"
import "Bootstrap/dist/js/bootstrap.bundle.min.js"
import UseContext from './component/UseContext.jsx'

createRoot(document.getElementById('root')).render(
  <UseContext>
    <App />
  </UseContext>
)
