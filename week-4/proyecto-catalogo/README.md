# 🧘 Catálogo Interactivo de Meditación y Mindfulness

## 📌 Proyecto Semana 04 – React + TypeScript

Este proyecto consiste en una **aplicación web de un catálogo interactivo** orientado al área de **Salud y Bienestar**, específicamente a una **app de meditación y mindfulness**.  
El objetivo es permitir al usuario **visualizar, buscar, filtrar y ordenar** distintas sesiones de meditación de forma dinámica.

El desarrollo se realizó utilizando **React 18**, **TypeScript** y **Vite**, aplicando buenas prácticas de programación y los conceptos vistos durante la semana.

---

## 🎯 Objetivo del Proyecto

Crear un catálogo interactivo que implemente:

- Renderizado condicional
- Listas con keys únicas
- Filtrado de datos
- Ordenamiento sin mutar el arreglo original
- Búsqueda en tiempo real
- Tipado fuerte con TypeScript

---

## 🧠 Dominio del Proyecto

**Salud y Bienestar – App de Meditación y Mindfulness**

### 🧘 Entidad Principal: Meditación

Cada meditación cuenta con las siguientes propiedades:

- **id**: Identificador único
- **title**: Nombre de la meditación
- **category**: Tipo de meditación
- **duration**: Duración en minutos
- **level**: Nivel (Principiante, Intermedio, Avanzado)
- **guided**: Si es guiada o no
- **available**: Disponibilidad
- **instructor**: Nombre del instructor

---


---

## ⚙️ Tecnologías Utilizadas

- React 18
- TypeScript
- Vite
- PNPM
- HTML5 y CSS básico

---

## ✅ Funcionalidades Implementadas

### 🔹 Renderizado Condicional
- Mensaje cuando no hay resultados
- Contador dinámico de resultados
- Etiquetas condicionales de disponibilidad

### 🔹 Listas con Keys
- Renderizado de listas con `.map()`
- Uso de `id` único como `key`
- Componentes reutilizables

### 🔹 Filtrado
- Filtro booleano para mostrar solo meditaciones disponibles
- Botón de activación/desactivación del filtro

### 🔹 Ordenamiento
- Orden por título
- Orden por duración
- Orden por nivel
- No se muta el arreglo original de datos

### 🔹 Búsqueda
- Búsqueda en tiempo real
- Case-insensitive
- Búsqueda por múltiples campos (título, categoría, instructor)

---

## 🧩 Tipado con TypeScript

El proyecto utiliza **interfaces y tipos personalizados**, centralizados en el archivo:


Esto garantiza:
- Código más seguro
- Mejor mantenimiento
- Prevención de errores comunes

---

## 🚀 Instalación y Ejecución

### 1️⃣ Clonar o copiar el proyecto
```bash
git clone <url-del-repositorio>


pnpm install

pnpm dev

http://localhost:5173
