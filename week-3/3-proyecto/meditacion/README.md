# Meditación & Mindfulness — Dashboard (Week 03 Project)

Proyecto de ejemplo para la semana 03 (useEffect y efectos secundarios).

Descripción: Dashboard simple que muestra sesiones de meditación, estadísticas y un indicador en tiempo real (datos simulados). El objetivo es demostrar uso de useEffect, cleanup, AbortController y polling.

Cómo ejecutar (PowerShell):

```powershell
# 1) Instalar dependencias (usar pnpm)
pnpm install

# 2) Iniciar servidor de desarrollo
pnpm run dev

# Abrir http://localhost:5173 en el navegador
```

Verificación rápida:
- Al montar: ItemList carga sesiones (ver mensaje "Cargando sesiones...")
- Polling: El indicador en tiempo real actualiza cada ~7s y muestra la hora de la última actualización
- Cleanup: Al detener la app, timers se limpian y las peticiones se abortan (simulado con AbortController)


