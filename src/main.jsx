import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './ContextApi/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
    </BrowserRouter>
  
)
