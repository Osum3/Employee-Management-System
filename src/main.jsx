import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Authprovider from './context/Authprovider.jsx'
// import Authcontext from './context/AuthContext.jsx'

// localStorage.clear();

createRoot(document.getElementById('root')).render(
    //
    <Authprovider>

        <App />
    </Authprovider>
    
    // <TaskListdes/>
  
)
