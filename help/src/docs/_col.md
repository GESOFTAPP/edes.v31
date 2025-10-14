# .col

## SINTAXIS
```javascript
S().col(n [, ver])
```

## DESCRIPCION
Gestiona la visibilidad de columnas en un listado o tabla.

## PARAMETROS
- `n`: Puede ser un número, una matriz de números o el nombre de un campo
- `ver`: (opcional) Parámetro para indicar si la columna del listado se hace visible o se oculta

## EJEMPLO
```javascript
S().col(2, true);  // Hace visible la tercera columna
S().col([1,3], false); // Oculta las columnas 1 y 3
```