/**
 * Qué: Indicador que muestra un valor que se actualiza periódicamente (polling).
 * Para qué: Demostrar uso de setInterval con cleanup y evitar memory leaks al desmontar.
 * Impacto: Si no se limpia el interval, puede seguir ejecutándose y causar fugas de memoria o actualizaciones en componentes desmontados.
 */
import React, { useEffect, useState } from 'react'
import { fetchRealTimeData } from '../utils/api'

export default function RealTimeIndicator(): JSX.Element {
  const [value, setValue] = useState<number | null>(null)
  const [lastUpdated, setLastUpdated] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    const update = async () => {
      try {
        const res = await fetchRealTimeData()
        if (!mounted) return
        setValue(res.value)
        setLastUpdated(res.lastUpdated)
        setError(null)
      } catch (e: any) {
        if (!mounted) return
        setError(e?.message || 'Error')
      }
    }

    update()
    const id = setInterval(update, 7000)

    return () => {
      mounted = false
      clearInterval(id)
    }
  }, [])

  return (
    <div className="card realtime">
      <h2>Indicador en Tiempo Real</h2>
      {error && <p className="error">Error: {error}</p>}
      <div className="realtime-value">Usuarios activos: {value ?? '—'}</div>
      <div className="timestamp">Última actualización: {lastUpdated ?? '—'}</div>
    </div>
  )
}
