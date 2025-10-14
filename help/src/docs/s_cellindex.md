# S.cellIndex

## SINTAXIS
```javascript
S.cellIndex(o)
```

## DESCRIPCIÓN
Obtiene el índice de la celda en una tabla.

## PARÁMETROS
- **o**: Elemento de celda (TD) del DOM

## EJEMPLO
```javascript
let celda = document.querySelector('td');
let indice = S.cellIndex(celda);
console.log(indice);
```