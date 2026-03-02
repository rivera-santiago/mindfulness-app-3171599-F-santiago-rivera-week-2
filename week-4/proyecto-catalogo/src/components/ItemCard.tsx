import type { Meditation } from "../types";

interface Props {
  meditation: Meditation;
}

export function ItemCard({ meditation }: Props) {
  return (
    <div>
      <h3>{meditation.title}</h3>

      <strong>
        {meditation.available ? "Disponible ✅" : "No disponible ❌"}
      </strong>

      <p>Categoría: {meditation.category}</p>
      <p>Duración: {meditation.duration} min</p>
      <p>Nivel: {meditation.level}</p>
      <p>Instructor: {meditation.instructor}</p>
    </div>
  );
}