# DBGroupBy

## SINTAXIS

```
[DBGroupBy] Fields [, Fields, ...]
```

## DESCRIPCIÓN

Define la lista de campos para generar la cláusula `GROUP BY` en la consulta SQL. Permite agrupar registros por uno o varios campos para realizar operaciones de agregación.

## PARÁMETROS

| Parámetro | Descripción |
|-----------|-------------|
| **Fields** | Campo o lista de campos separados por comas para agrupar los registros |

## FUNCIONAMIENTO

Genera automáticamente la cláusula `GROUP BY` con los campos especificados, permitiendo el uso de funciones de agregación como:
- `COUNT()` - Contar registros
- `SUM()` - Sumar valores
- `AVG()` - Promedio
- `MAX()` - Valor máximo
- `MIN()` - Valor mínimo

## EJEMPLOS

### Ejemplo 1: Agrupación por un campo
```
[DBGroupBy] categoria
```
**SQL generado**: `GROUP BY categoria`

### Ejemplo 2: Agrupación por múltiples campos
```
[DBGroupBy] provincia, ciudad
```
**SQL generado**: `GROUP BY provincia, ciudad`

### Ejemplo 3: Agrupación con funciones de fecha
```
[DBGroupBy] YEAR(fecha_venta), MONTH(fecha_venta)
```
**SQL generado**: `GROUP BY YEAR(fecha_venta), MONTH(fecha_venta)`

### Ejemplo 4: Uso con campos calculados
```
[DBGroupBy] tipo_cliente, estado
```
**SQL generado**: `GROUP BY tipo_cliente, estado`

## CASOS DE USO COMUNES

### Resumen de ventas por mes
```
[DBGroupBy] YEAR(fecha), MONTH(fecha)
```

### Totales por categoría y provincia
```
[DBGroupBy] categoria, provincia
```

### Estadísticas por usuario
```
[DBGroupBy] cd_usuario
```

### Agrupación por rangos
```
[DBGroupBy] rango_edad, sexo
```

## COMBINACIÓN CON OTRAS ETIQUETAS

Se suele combinar con:
- **Fields**: Para definir campos de agregación
- **DBOrder**: Para ordenar los grupos
- **DBAddFilter**: Para filtrar antes de agrupar

### Ejemplo completo:
```
[DBGroupBy] categoria
[Fields] categoria, COUNT(*) as total, SUM(importe) as suma
[DBOrder] categoria
```

## NOTAS IMPORTANTES

- Los campos en SELECT deben estar en GROUP BY o ser funciones de agregación
- Se ejecuta después del WHERE pero antes del ORDER BY
- Útil para generar reportes y estadísticas
- Todos los campos no agregados deben aparecer en GROUP BY