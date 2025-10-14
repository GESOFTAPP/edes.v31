# .table()

## SINTAXIS
```javascript
S().table(tipo)
```

## DESCRIPCIÓN
Establece el display del elemento con valores relacionados a tablas para crear layouts tabulares.

## PARÁMETROS
- **tipo** (opcional): Tipo de display table a aplicar
  - Sin parámetro o `"table"`: Establece `display: table`
  - `"cell"`: Establece `display: table-cell`
  - `"row"`: Establece `display: table-row`
  - `"row-group"`: Establece `display: table-row-group`
  - `"header-group"`: Establece `display: table-header-group`
  - `"footer-group"`: Establece `display: table-footer-group`

## EJEMPLO
```javascript
// Convertir en tabla
S("#contenedor").table();
S("#contenedor").table("table");

// Convertir en celda
S(".columna").table("cell");

// Convertir en fila
S(".fila").table("row");

// Agrupar filas
S("#tbody").table("row-group");

// Cabecera de tabla
S("#thead").table("header-group");
```