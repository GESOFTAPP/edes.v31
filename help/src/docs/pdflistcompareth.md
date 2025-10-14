# PDFListCompare

## Sintaxis

```
[PDFListCompare] TH, TH, TH, ...
```

## Descripción

Define los títulos de las columnas para la comparación de listados al generar la salida en formato PDF o XLS. Esta etiqueta solo está activa si se utiliza la etiqueta `[ListCompare]`.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| **TH** | String | Título de la columna (separados por comas) |

### Valores especiales para TH

| Valor | Comportamiento |
|-------|----------------|
| Vacío (`""`) | No muestra título para esa columna |
| `"="` | Utiliza el texto que aparece en el formulario |
| Texto personalizado | Muestra el texto especificado como título |

### Dependencias

Esta etiqueta requiere que esté presente la etiqueta `[ListCompare]` para funcionar correctamente.

## Ejemplos

### Ejemplo básico con títulos personalizados
```
[ListCompare]
[PDFListCompare] Código, Descripción, Precio, Stock
```

### Ejemplo usando títulos del formulario
```
[ListCompare]
[PDFListCompare] =, =, =, =
```

### Ejemplo mixto con títulos personalizados y del formulario
```
[ListCompare]
[PDFListCompare] ID, =, Precio Actual, , Total
```

### Ejemplo sin mostrar algunos títulos
```
[ListCompare]
[PDFListCompare] Producto, , Precio, Stock Disponible
```

### Ejemplo en contexto completo
```sql
SELECT codigo, nombre, precio, stock
FROM productos
WHERE categoria = 'electronica'
ORDER BY nombre
```
```
[ListCompare]
[PDFListCompare] Código Producto, Nombre del Artículo, Precio €, Unidades
[PDFList]
```