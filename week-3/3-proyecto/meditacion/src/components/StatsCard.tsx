/**
 * Qué: Tarjeta que muestra múltiples métricas (3) independientes.
 * Para qué: Demostrar múltiples useEffect independientes, cada uno con su propio ciclo de vida.
 * Impacto: Cambios en cualquiera de los fetchers no afectan a los otros; evita efectos colaterales.
 */
import React, { useEffect, useState } from 'react'
import { fetchTotalSessions, fetchMinutesToday, fetchActiveStreak } from '../utils/api'

export default function StatsCard(): JSX.Element {
  const [total, setTotal] = useState<number | null>(null)
  const [minutes, setMinutes] = useState<number | null>(null)
  const [streak, setStreak] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    fetchTotalSessions()
      .then((v) => mounted && setTotal(v))
      .catch((e: any) => mounted && setError(e?.message || 'Error'))
    return () => {
      mounted = false
    }
  }, [])

  useEffect(() => {
    let mounted = true
    fetchMinutesToday()
      .then((v) => mounted && setMinutes(v))
      .catch((e: any) => mounted && setError(e?.message || 'Error'))
    return () => {
      mounted = false
    }
  }, [])

  useEffect(() => {
    let mounted = true
    fetchActiveStreak()
      .then((v) => mounted && setStreak(v))
      .catch((e: any) => mounted && setError(e?.message || 'Error'))
    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="card stats-card">
      <h2>Estadísticas</h2>
      {error && <p className="error">Error: {error}</p>}
      <div className="stats-grid">
        <div className="stat">
          <div className="value">{total ?? '—'}</div>
          <div className="label">Sesiones totales</div>
        </div>
        <div className="stat">
          <div className="value">{minutes ?? '—'}</div>
          <div className="label">Minutos hoy</div>
        </div>
        <div className="stat">
          <div className="value">{streak ?? '—'}</div>
          <div className="label">Racha (días)</div>
        </div>
      </div>
    </div>
  )
}
