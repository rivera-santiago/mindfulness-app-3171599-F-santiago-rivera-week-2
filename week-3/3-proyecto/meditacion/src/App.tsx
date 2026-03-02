/**
 
 * Qué: Componente raíz de la aplicación.
 * Para qué: Proveer el layout general y montar el `Dashboard`.
 * Impacto: Punto central para estilos y estructura; cambiar aquí afectará todo el layout.
 * Notas: Identifiers remain in English; explanations in Spanish to meet course requirements.
 */
import React from 'react'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Meditación & Mindfulness — Dashboard</h1>
        <p className="subtitle">Salud y Bienestar — Datos en Tiempo Real (simulados)</p>
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  )
}
