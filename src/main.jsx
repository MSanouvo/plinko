import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pachinko from './components/Pachinko'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pachinko />
  </StrictMode>,
)
