import type { Meditation } from "../types";

export const meditations: Meditation[] = [
  {
    id: 1,
    title: "Respiración consciente",
    category: "Relajación",
    duration: 10,
    level: "Principiante",
    guided: true,
    available: true,
    instructor: "Ana López",
  },
  {
    id: 2,
    title: "Escaneo corporal",
    category: "Mindfulness",
    duration: 20,
    level: "Intermedio",
    guided: true,
    available: false,
    instructor: "Carlos Ruiz",
  },
  {
    id: 3,
    title: "Meditación silenciosa",
    category: "Concentración",
    duration: 30,
    level: "Avanzado",
    guided: false,
    available: true,
    instructor: "Laura Gómez",
  },
];