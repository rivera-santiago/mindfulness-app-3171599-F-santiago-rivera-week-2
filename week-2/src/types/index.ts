// ============================================
// MODELO DE DATOS PRINCIPAL
// Dominio: App de Meditación y Mindfulness
// ============================================

// QUÉ: Interface que representa una sesión de meditación
// PARA: Definir la estructura tipada de cada objeto en el sistema
// IMPACTO: Garantiza tipado fuerte, autocompletado y cero uso de "any"

export interface Session {
  id: number; // Identificador único
  title: string; // Nombre de la sesión
  instructor: string; // Instructor que guía la sesión
  duration: number; // Duración en minutos
  level: 'beginner' | 'intermediate' | 'advanced'; // Nivel de dificultad
  completed: boolean; // Estado de la sesión
}
