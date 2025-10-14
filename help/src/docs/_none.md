# .none()

## SINTAXIS
```javascript
S().none(tipo)
```

## DESCRIPCIÓN
Oculta completamente el elemento estableciendo `display: none`, eliminándolo del flujo del documento.

## PARÁMETROS
- **tipo** (opcional): Modificador del comportamiento
  - Sin parámetro: Establece `display: none`
  - `true` o `1`: Establece `display: none`
  - `false` o `0`: Restaura el display anterior o establece `display: block`
  - `"toggle"`: Alterna entre none y el display anterior

## EJEMPLO
```javascript
// Ocultar elemento completamente
S("#elemento").none();

// Ocultar elemento
S("#modal").none(true);

// Mostrar elemento
S("#modal").none(false);

// Alternar visibilidad
S("#menu").none("toggle");

// Ocultar múltiples elementos
S(".temporal").none();
```