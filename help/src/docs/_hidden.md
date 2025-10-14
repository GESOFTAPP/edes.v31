# .hidden()

## SINTAXIS
```javascript
S().hidden(tipo)
```

## DESCRIPCIÓN
Oculta el elemento manteniendo su espacio en el layout usando `visibility: hidden`, a diferencia de `.none()` que lo elimina completamente del flujo.

## PARÁMETROS
- **tipo** (opcional): Modificador del comportamiento
  - Sin parámetro: Establece `visibility: hidden`
  - `true` o `1`: Establece `visibility: hidden`
  - `false` o `0`: Establece `visibility: visible`
  - `"toggle"`: Alterna entre hidden y visible

## EJEMPLO
```javascript
// Ocultar elemento (mantiene espacio)
S("#elemento").hidden();

// Ocultar elemento explícitamente
S("#secreto").hidden(true);

// Mostrar elemento
S("#secreto").hidden(false);

// Alternar visibilidad
S("#intermitente").hidden("toggle");

// Ocultar temporalmente sin afectar layout
S(".placeholder").hidden();
```