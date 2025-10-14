# ChartRow

## Sintaxis

```
[ChartRow] NCol [,NCol,... | AnchoGraf [ | AltoGraf=100 ]
```

## Descripción

Añade una fila al final del listado mostrando una gráfica de barras de las columnas indicadas.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| NCol | number/string | Número de cada columna a representar separado por coma. Si se quiere representar todas las columnas se pondrá "*" o se dejará vacío el parámetro. Si se quiere evitar solo las primeras columnas se definirán en negativo y a continuación se pondrá un "*" | Requerido |
| AnchoGraf | string/number | Ancho de las barras de la gráfica (puede ser en px, % u otras unidades CSS) | Opcional |
| AltoGraf | number | Alto de las barras de la gráfica, por defecto son 100px | Opcional |

## Ejemplos

### Ejemplo con columnas específicas

```
[ChartRow] 1,2,3 | 100%
```

La gráfica estará en las columnas 1, 2 y 3 y su ancho será de 100%.

### Ejemplo excluyendo columnas

```
[ChartRow] -0,* | 100%
```

La columna "cero" no se pinta la gráfica y el resto "*" sí, con un ancho de 100%.

### Ejemplo con todas las columnas

```
[ChartRow] * | 200 | 150
```

Muestra gráfica en todas las columnas con ancho de 200px y alto de 150px.

### Ejemplo con ancho y alto personalizados

```
[ChartRow] 2,4,6 | 50% | 80
```

Gráfica en columnas 2, 4 y 6 con ancho del 50% y alto de 80px.

## Notas

- La gráfica se añade como una fila adicional al final del listado
- Para representar todas las columnas usar "*" o dejar vacío el parámetro
- Para excluir columnas específicas, usar números negativos seguidos de "*"
- El ancho por defecto se ajusta automáticamente
- El alto por defecto es de 100 píxeles
- Las columnas se numeran empezando desde 0