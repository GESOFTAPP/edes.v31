# S.colapse

## SINTAXIS
```javascript
S.colapse(txt, ini, end, x)
```

## DESCRIPCIÓN
Colapsa o comprime una porción de texto entre posiciones específicas, útil para acortar cadenas largas o crear versiones resumidas de contenido.

## PARÁMETROS
- **txt** (String): Texto original a colapsar
- **ini** (Number): Posición inicial desde donde comenzar el colapso
- **end** (Number): Posición final donde terminar el colapso
- **x** (String): Texto de reemplazo para la sección colapsada (ej: '...', '[...]', etc.)

## EJEMPLO
```javascript
// Colapsar texto largo con puntos suspensivos
const textoLargo = 'Este es un texto muy largo que necesita ser resumido';
const resumido = S.colapse(textoLargo, 10, 35, '...'); 
// Resultado: 'Este es un... resumido'

// Colapsar código para mostrar solo partes relevantes
const codigo = 'function ejemplo() { /* código largo */ return valor; }';
const colapsado = S.colapse(codigo, 18, 35, '[...]');
// Resultado: 'function ejemplo() [...]return valor; }'

// Crear resumen de contenido
const descripcion = 'Producto con muchas características detalladas y especificaciones técnicas';
const corto = S.colapse(descripcion, 20, 45, ' [ver más] ');
```