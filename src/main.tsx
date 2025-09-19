import { createRoot } from 'react-dom/client'
import './styles/globals/index.css'
import App from './pages/App.tsx'

createRoot(document.getElementById('root')!).render(
    <App />
)
