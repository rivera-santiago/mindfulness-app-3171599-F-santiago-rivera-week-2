import type { Meditation } from "../types";
import { ItemCard } from "./ItemCard";

interface Props {
  items: Meditation[];
}

export function ItemList({ items }: Props) {
  return (
    <>
      {items.map((meditation) => (
        <ItemCard key={meditation.id} meditation={meditation} />
      ))}
    </>
  );
}