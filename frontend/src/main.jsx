import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { JobContextProvider } from './context/JobContext.jsx'
import { UserContextProvider } from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <JobContextProvider>
        <App />
      </JobContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
