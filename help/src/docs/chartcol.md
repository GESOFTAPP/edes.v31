# ChartCol

## Sintaxis

```
[ChartCol] NumCol | AnchoGráfica | TítuloCol | NomGráficoPositivo | NomGráficoNegativo [| AltoGráfico]
```

## Descripción

Añade una columna al final del listado mostrando una gráfica de barras representando los valores de la columna especificada.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| NumCol | number | Número de la columna a representar, empezando por la cero. Si se deja vacío este parámetro tomará la última columna | Opcional |
| AnchoGráfica | number | Ancho máximo de la gráfica en píxeles | Requerido |
| TítuloCol | string | Título en el TH del listado. Si se deja en blanco en la columna anterior se hará "colspan" | Opcional |
| NomGráficoPositivo | string | Nombre del archivo de imagen para valores positivos. Por defecto "chart_p.jpg" | Opcional |
| NomGráficoNegativo | string | Nombre del archivo de imagen para valores negativos. Por defecto "chart_n.jpg" | Opcional |
| AltoGráfico | number | Alto del gráfico en píxeles. Por defecto es 12 | Opcional |

## Ejemplos

### Ejemplo básico

```
[ChartCol] 1 | 100
```

Representa el valor de la columna uno con un ancho de gráfico de 100 px.

### Ejemplo con título personalizado

```
[ChartCol] 2 | 150 | Progreso
```

Representa la columna 2 con ancho de 150px y título "Progreso".

### Ejemplo completo

```
[ChartCol] 3 | 200 | Ventas | grafico_verde.jpg | grafico_rojo.jpg | 15
```

Representa la columna 3 con ancho de 200px, título "Ventas", usando imágenes personalizadas para valores positivos y negativos, y altura de 15px.

## Notas

- La gráfica se añade como una columna adicional al final del listado
- Si no se especifica el número de columna, tomará automáticamente la última
- Los archivos de imagen por defecto son "chart_p.jpg" (positivos) y "chart_n.jpg" (negativos)
- La altura por defecto del gráfico es de 12 píxeles
- Si se deja el título vacío, se aplicará "colspan" en la columna anterior