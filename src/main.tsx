import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import { ToastCont } from './components/Toastify/style.ts';
import { CookiesProvider } from 'react-cookie';

createRoot(document.getElementById('root')!).render(
    <CookiesProvider>
      <Router>
        <App />
        <ToastCont />
      </Router>
    </CookiesProvider>
)
