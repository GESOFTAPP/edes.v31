# .rule()

## SINTAXIS
```javascript
S().rule(txt, nmStyle)
```

## DESCRIPCIÓN
Crea y aplica reglas CSS dinámicamente al documento, permitiendo añadir estilos globales en tiempo de ejecución.

## PARÁMETROS
- **txt** (string): Regla CSS completa a añadir
- **nmStyle** (string, opcional): Nombre identificador para la regla (para poder eliminarla después)

## EJEMPLO
```javascript
// Añadir regla CSS simple
S().rule(".nueva-clase { color: red; font-size: 16px; }");

// Añadir regla con nombre para referencia
S().rule(".destacado { background: yellow; }", "reglaDestacado");

// Regla para hover
S().rule(".boton:hover { background: blue; color: white; }");

// Regla para media queries
S().rule("@media (max-width: 600px) { .responsive { display: none; } }");

// Regla para pseudo-elementos
S().rule(".texto::before { content: '★'; color: gold; }");
```