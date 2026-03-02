interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: Props) {
  return (
    <input
      placeholder="Buscar meditación..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}