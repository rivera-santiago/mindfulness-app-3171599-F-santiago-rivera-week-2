// ============================================
// COMPONENTE PRINCIPAL
// ============================================

// QUÉ: Componente raíz de la aplicación
// PARA: Centralizar el estado global y coordinar los componentes hijos
// IMPACTO: Permite arquitectura limpia, escalable y basada en composición

import { useState } from 'react';
import { Session } from './types';
import Header from './components/Header';
import SessionForm from './components/SessionForm';
import SessionList from './components/SessionList';

const App = () => {

  // ============================================
  // ESTADO PRINCIPAL
  // ============================================

  // QUÉ: Lista principal de sesiones
  // PARA: Almacenar todas las sesiones del sistema
  // IMPACTO: Fuente única de verdad (Single Source of Truth)
  const [sessions, setSessions] = useState<Session[]>([]);

  // QUÉ: ID de sesión en edición
  // PARA: Determinar si el formulario está en modo editar
  // IMPACTO: Permite actualización controlada
  const [editingId, setEditingId] = useState<number | null>(null);

  // ============================================
  // OPERACIONES CRUD
  // ============================================

  // CREATE
  const addSession = (session: Session) => {
    setSessions([...sessions, { ...session, id: Date.now() }]);
  };

  // DELETE
  const deleteSession = (id: number) => {
    setSessions(sessions.filter(s => s.id !== id));
  };

  // UPDATE
  const updateSession = (id: number, updated: Session) => {
    setSessions(
      sessions.map(s => (s.id === id ? { ...updated, id } : s))
    );
    setEditingId(null);
  };

  return (
    <>
      <Header />

      <SessionForm
        addSession={addSession}
        updateSession={updateSession}
        editingId={editingId}
        sessions={sessions}
      />

      <SessionList
        sessions={sessions}
        deleteSession={deleteSession}
        setEditingId={setEditingId}
      />
    </>
  );
};

export default App;
