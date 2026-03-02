/**
 * main.tsx
 * Qué: Punto de entrada de la aplicación React + Vite.
 * Para qué: Montar el componente raíz (`App`) en el DOM.
 * Impacto: Inicializa el árbol de componentes; aquí corre React.StrictMode en desarrollo.
 * Notas: Mantener identificadores en inglés; los comentarios explican el propósito en español.
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

// Get the root DOM node and render the React app
const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
