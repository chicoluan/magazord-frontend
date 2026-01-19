import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import Providers from './providers/index.tsx'

const root = document.getElementById('root')

if (!root) throw new Error('Missing root')

createRoot(root).render(
  <StrictMode>
    <Providers />
  </StrictMode>,
)
