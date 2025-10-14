# ChartGrid

## Sintaxis

```
[ChartGrid] NumCol, NumCol,,,
```

## Descripción

Las gráficas las coloca en una tabla al final del listado. Los parámetros de la etiqueta son las celdas que tiene cada fila de la tabla de gráficas.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| NumCol | number | Número de columnas en cada fila, separadas por comas. Si una fila tiene menos columnas que la mayor hará colspan en la última celda | Requerido |

## Ejemplos

### Ejemplo básico

```
[ChartGrid] 2,1
```

En el ejemplo se define una tabla con tres gráficas: dos en la primera fila y una en la segunda.

### Ejemplo con múltiples filas

```
[ChartGrid] 3,2,1
```

Define una tabla con seis gráficas distribuidas en tres filas:
- Primera fila: 3 gráficas
- Segunda fila: 2 gráficas  
- Tercera fila: 1 gráfica

### Ejemplo con filas iguales

```
[ChartGrid] 2,2,2
```

Define una tabla con seis gráficas distribuidas en tres filas de 2 columnas cada una.

## Notas

- Se debe usar junto con múltiples etiquetas `[Chart]` para definir las gráficas individuales
- Si una fila tiene menos columnas que la fila con más columnas, la última celda se expandirá usando colspan
- Las gráficas se muestran al final del listado en formato de tabla
- El orden de las gráficas corresponde al orden de las etiquetas `[Chart]` en el código