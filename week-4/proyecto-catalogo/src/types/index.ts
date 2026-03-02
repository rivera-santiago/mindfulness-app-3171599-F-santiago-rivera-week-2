export interface Meditation {
  id: number;
  title: string;
  category: string;
  duration: number;
  level: "Principiante" | "Intermedio" | "Avanzado";
  guided: boolean;
  available: boolean;
  instructor: string;
}

export type SortOption = "title" | "duration" | "level";