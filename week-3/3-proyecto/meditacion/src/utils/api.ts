/**
 * Qué: Utilidades de API (mock) para el dominio de meditación.
 * Para qué: Proveer funciones que simulan peticiones de red y permiten practicar AbortController y delays.
 * Impacto: Servir como capa de datos local; reemplazable por llamadas reales a fetch/axios manteniendo la forma de los resultados.
 */
import { Session, RealTimeData } from '../types'

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms))

const MOCK_SESSIONS: Session[] = [
  { id: 1, title: 'Respiración consciente', duration: 10, level: 'Beginner' },
  { id: 2, title: 'Body scan', duration: 15, level: 'Beginner' },
  { id: 3, title: 'Meditación guiada para dormir', duration: 20, level: 'Intermediate' },
  { id: 4, title: 'Mindful walking', duration: 12, level: 'Intermediate' },
  { id: 5, title: 'Visualización positiva', duration: 25, level: 'Advanced' },
]

export async function fetchSessions(signal: AbortSignal): Promise<Session[]> {
  for (let i = 0; i < 10; i++) {
    if (signal.aborted) throw new DOMException('Aborted', 'AbortError')
    await delay(20)
  }
  return MOCK_SESSIONS
}

export async function fetchTotalSessions(): Promise<number> {
  await delay(500)
  return MOCK_SESSIONS.length
}

export async function fetchMinutesToday(): Promise<number> {
  await delay(400)
  // Valor simulado: minutos meditados hoy
  return 28
}

export async function fetchActiveStreak(): Promise<number> {
  await delay(300)
  // Racha de días consecutivos
  return 5
}

export async function fetchRealTimeData(): Promise<RealTimeData> {
  await delay(250)
  const value = Math.floor(5 + Math.random() * 20)
  return { value, lastUpdated: new Date().toLocaleTimeString() }
}
