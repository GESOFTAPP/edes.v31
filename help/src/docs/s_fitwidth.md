# S.fitWidth

## SINTAXIS
```javascript
S.fitWidth(o)
```

## DESCRIPCIÓN
Ajusta automáticamente el ancho de un elemento para que se adapte al espacio disponible en su contenedor.

## PARÁMETROS
- `o` - Elemento DOM al que se le ajustará el ancho

## EJEMPLO
```javascript
// Ajustar ancho de un input
S.fitWidth(document.getElementById('miInput'));

// Ajustar ancho de un div
var elemento = document.querySelector('.mi-elemento');
S.fitWidth(elemento);
```