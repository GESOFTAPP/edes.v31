# S.td

## SINTAXIS
```javascript
S.td(o, col)
```

## DESCRIPCIÓN
Obtiene una celda específica de una tabla.

## PARÁMETROS
- **o**: Elemento fila (TR) del DOM
- **col**: Número de columna (índice)

## EJEMPLO
```javascript
let fila = document.querySelector('tr');
let celda = S.td(fila, 2);
console.log(celda.innerHTML);
```