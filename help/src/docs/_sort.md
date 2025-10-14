# .sort

## SINTAXIS
```javascript
S().sort(col, type, ad, add)
```

## DESCRIPCION
Ordena los elementos de una tabla o listado por una columna específica.

## PARAMETROS
- `col`: Columna por la que ordenar
- `type`: Tipo de ordenación (numérica, alfabética, etc.)
- `ad`: Dirección de ordenación (ascendente/descendente)
- `add`: Parámetro adicional para la ordenación

## EJEMPLO
```javascript
S().sort(1, 'numeric', 'asc', true); // Ordena por columna 1 numéricamente ascendente
```