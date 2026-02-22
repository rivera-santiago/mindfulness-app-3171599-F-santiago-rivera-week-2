/**
 * Qué: Lista principal de sesiones de meditación.
 * Para qué: Hacer un fetch inicial de sesiones al montar y renderizar loading/error/data.
 * Impacto: Demuestra uso de useEffect con AbortController para evitar actualizaciones después de ununmount.
 */
import React, { useEffect, useState } from 'react'
import { Session } from '../types'
import { fetchSessions } from '../utils/api'

export default function ItemList(): JSX.Element {
  const [data, setData] = useState<Session[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    const load = async () => {
      setLoading(true)
      setError(null)
      try {
        const items = await fetchSessions(controller.signal)
        setData(items)
      } catch (err: any) {
        if (err?.name === 'AbortError') return
        setError(err?.message || 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    load()

    return () => controller.abort()
  }, [])

  return (
    <div className="card item-list">
      <h2>Sesiones de meditación</h2>
      {loading && <p>🕒 Cargando sesiones...</p>}
      {error && <p className="error">Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {data.map((s: Session) => (
            <li key={s.id}>
              <strong>{s.title}</strong> — {s.duration} min — Nivel: {s.level}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
