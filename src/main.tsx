import React from 'react'
import ReactDOM from 'react-dom/client'
import Graf1 from './Graf1.tsx'
import Graf2 from './Graf2.tsx'
import Graf3 from './Graf3.tsx'
import './index.css'

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {id === "1" && <Graf1 />}
    {id === '2' && <Graf2 />}
    {id === '3' && <Graf3 />}
  </React.StrictMode>,
)
