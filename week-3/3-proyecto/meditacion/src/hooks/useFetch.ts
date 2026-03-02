/**
 * Qué: Hook reutilizable para realizar peticiones con soporte de AbortController.
 * Para qué: Proveer { data, loading, error, refetch } para cualquier fetcher que acepte un AbortSignal.
 * Impacto: Centraliza lógica de cancelación y estados, evita duplicar patrones en componentes.
 */
import { useEffect, useRef, useState } from 'react'

export function useFetch<T>(fetcher: (signal: AbortSignal) => Promise<T>, deps: any[] = []) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const controllerRef = useRef<AbortController | null>(null)
  const [trigger, setTrigger] = useState(0)

  useEffect(() => {
    controllerRef.current?.abort()
    const controller = new AbortController()
    controllerRef.current = controller

    const load = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetcher(controller.signal)
        setData(res)
      } catch (err: any) {
        if (err?.name === 'AbortError') return
        setError(err?.message || 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    load()

    return () => controller.abort()
  }, [...deps, trigger])

  return {
    data,
    loading,
    error,
    refetch: () => setTrigger((t: number) => t + 1),
  }
}
