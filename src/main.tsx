
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// O ponto de exclamação (!) no final garante ao TS que o elemento 'root' existe no HTML
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)