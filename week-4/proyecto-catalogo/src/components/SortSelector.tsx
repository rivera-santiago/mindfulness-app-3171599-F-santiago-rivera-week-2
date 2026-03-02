import type { SortOption } from "../types";

interface Props {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export function SortSelector({ value, onChange }: Props) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value as SortOption)}>
      <option value="title">Título</option>
      <option value="duration">Duración</option>
      <option value="level">Nivel</option>
    </select>
  );
}