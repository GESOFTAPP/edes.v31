# .visible()

## SINTAXIS
```javascript
S().visible(tipo)
```

## DESCRIPCIÓN
Controla la visibilidad del elemento estableciendo la propiedad visibility o display según el tipo especificado.

## PARÁMETROS
- **tipo** (opcional): Tipo de visibilidad a aplicar
  - `true` o `1`: Hace visible el elemento (`visibility: visible`)
  - `false` o `0`: Oculta el elemento (`visibility: hidden`)
  - `"show"`: Muestra el elemento (`display: block`)
  - `"hide"`: Oculta el elemento (`display: none`)
  - Sin parámetro: Alterna entre visible/hidden

## EJEMPLO
```javascript
// Hacer visible
S("#elemento").visible(true);

// Ocultar (mantiene espacio)
S("#elemento").visible(false);

// Mostrar (display block)
S("#div").visible("show");

// Ocultar (display none)
S("#div").visible("hide");

// Alternar visibilidad
S("#toggle").visible();
```