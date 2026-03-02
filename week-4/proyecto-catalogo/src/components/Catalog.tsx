import { useState } from "react";
import { meditations } from "../data/items";
import type { Meditation, SortOption } from "../types";

import { ItemList } from "./ItemList";
import { SearchBar } from "./SearchBar";
import { FilterPanel } from "./FilterPanel";
import { SortSelector } from "./SortSelector";
import { EmptyState } from "./EmptyState";

export function Catalog() {
  // 🔹 Estados
  const [search, setSearch] = useState<string>("");
  const [onlyAvailable, setOnlyAvailable] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<SortOption>("title");

  // 🔹 Copia del array original (NO mutar)
  let filteredMeditations: Meditation[] = [...meditations];

  // 🔹 Filtro booleano: solo disponibles
  if (onlyAvailable) {
    filteredMeditations = filteredMeditations.filter(
      (meditation) => meditation.available
    );
  }

  // 🔹 Búsqueda en tiempo real (case-insensitive, múltiples campos)
  if (search.trim() !== "") {
    filteredMeditations = filteredMeditations.filter((meditation) =>
      meditation.title.toLowerCase().includes(search.toLowerCase()) ||
      meditation.category.toLowerCase().includes(search.toLowerCase()) ||
      meditation.instructor.toLowerCase().includes(search.toLowerCase())
    );
  }

  // 🔹 Ordenamiento (sin mutar el original)
  filteredMeditations.sort((a, b) => {
    if (sortOption === "duration") {
      return a.duration - b.duration;
    }

    if (sortOption === "level") {
      return a.level.localeCompare(b.level);
    }

    return a.title.localeCompare(b.title);
  });

  return (
    <div>
      <h1>Catálogo de Meditaciones 🧘‍♂️</h1>

      {/* 🔍 Búsqueda */}
      <SearchBar value={search} onChange={setSearch} />

      {/* 🎛️ Filtros */}
      <FilterPanel
        onlyAvailable={onlyAvailable}
        onToggleAvailable={() => setOnlyAvailable(!onlyAvailable)}
      />

      {/* 🔃 Ordenamiento */}
      <SortSelector
        value={sortOption}
        onChange={setSortOption}
      />

      {/* 📊 Contador de resultados */}
      <p>Resultados encontrados: {filteredMeditations.length}</p>

      {/* 📦 Renderizado condicional */}
      {filteredMeditations.length === 0 ? (
        <EmptyState />
      ) : (
        <ItemList items={filteredMeditations} />
      )}
    </div>
  );
}