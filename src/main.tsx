import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <Router>
      <App />
      <ToastContainer limit={1}/>
    </Router>
)
