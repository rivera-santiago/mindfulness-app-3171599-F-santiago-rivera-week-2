interface Props {
  onlyAvailable: boolean;
  onToggleAvailable: () => void;
}

export function FilterPanel({ onlyAvailable, onToggleAvailable }: Props) {
  return (
    <label>
      <input
        type="checkbox"
        checked={onlyAvailable}
        onChange={onToggleAvailable}
      />
      Solo disponibles
    </label>
  );
}