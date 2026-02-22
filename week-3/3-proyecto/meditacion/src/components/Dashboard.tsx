/**
 * Qué: Componente que orquesta las partes del dashboard.
 * Para qué: Componer `StatsCard`, `RealTimeIndicator` y `ItemList` en un layout.
 * Impacto: Cambios aquí afectan la disposición global; conservar nombres en inglés facilita lectura del código.
 */
import React from 'react'
import ItemList from './ItemList'
import StatsCard from './StatsCard'
import RealTimeIndicator from './RealTimeIndicator'

export default function Dashboard(): JSX.Element {

  return (
    <section className="dashboard">
      <div className="left-column">
        <StatsCard />
        <RealTimeIndicator />
      </div>
      <div className="right-column">
        <ItemList />
      </div>
    </section>
  )
}
