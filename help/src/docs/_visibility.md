# .visibility()

## SINTAXIS
```javascript
S().visibility(x)
```

## DESCRIPCIÓN
"x": puede ser 0/1/false/true/hidden/visible y sin parámetros pondrá al objeto al contrario de como esté.

## PARÁMETROS
- **x** (opcional): Controla la visibilidad del elemento
  - `0` o `false`: visibility: hidden
  - `1` o `true`: visibility: visible
  - `"hidden"`: Oculta el elemento (mantiene el espacio)
  - `"visible"`: Muestra el elemento
  - Sin parámetro: Alterna el estado actual

## EJEMPLO
```javascript
// Ocultar elemento (mantiene espacio)
S("#miDiv").visibility(0);
S("#miDiv").visibility("hidden");

// Mostrar elemento
S("#miDiv").visibility(1);
S("#miDiv").visibility("visible");

// Alternar visibilidad
S("#miDiv").visibility(); // Toggle
```