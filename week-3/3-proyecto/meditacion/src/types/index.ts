/**
 * Qué: Definición de tipos TypeScript para el dominio (Meditación).
 * Para qué: Tipar datos de sesiones y respuestas en tiempo real.
 * Impacto: Ayuda a prevenir errores y facilita autocompletado en editores.
 */
export interface Session {
  id: number
  title: string
  duration: number // minutos
  level: 'Beginner' | 'Intermediate' | 'Advanced'
}

export interface RealTimeData {
  value: number
  lastUpdated: string
}
