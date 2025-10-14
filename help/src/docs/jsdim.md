# JSDim

## Sintaxis

```
[JSDim] Mode | MatrixName | SQLExpr [ | HASH ]
```

## Descripción

Manda una matriz de una o más dimensiones al cliente al final de la página en Javascript, antes de la etiqueta [JSEnd]. La matriz se genera automáticamente basándose en los resultados de la expresión SQL proporcionada.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido | Valor por defecto |
|-----------|------|-------------|-----------|-------------------|
| Mode | String | Modo de operación | Sí | - |
| MatrixName | String | Nombre de la matriz que se generará en Javascript | Sí | - |
| SQLExpr | String | Expresión SQL que define los datos de la matriz | Sí | - |
| HASH | Flag | Indica que la matriz será del tipo "hash" | No | Numérica |

## Ejemplos

### Ejemplo básico - Matriz numérica
```
[JSDim] mR | usuEstado | select cd_motivo, nm_motivo from motivo where sele='S'
```

**Resultado generado:**
```javascript
usuEstado[0][0] = cd_motivo;
usuEstado[0][1] = nm_motivo;
usuEstado[1][0] = cd_motivo;
usuEstado[1][1] = nm_motivo;
// ... para cada fila del resultado SQL
```

### Ejemplo con matriz tipo HASH
```
[JSDim] mR | productos | select id_producto, nombre, precio from productos where activo=1 | HASH
```

### Ejemplo con consulta más compleja
```
[JSDim] mR | clientesRegion | select c.id_cliente, c.nombre, r.nombre_region from clientes c inner join regiones r on c.id_region = r.id_region where c.estado = 'ACTIVO'
```

### Uso en contexto completo
```html
<!-- Otros elementos de la página -->
[JSDim] mR | usuEstado | select cd_motivo, nm_motivo from motivo where sele='S'
[JSEnd]
```

## Notas adicionales

- La matriz se genera automáticamente al final de la página, justo antes de la etiqueta `[JSEnd]`
- Por defecto, las matrices son numéricas con índices `[n][0]`, `[n][1]`, etc.
- Con el flag `HASH`, la matriz se convierte en un objeto asociativo
- Cada columna del resultado SQL corresponde a un índice en la matriz