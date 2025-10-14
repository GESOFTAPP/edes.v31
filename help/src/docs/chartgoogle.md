# ChartGoogle

## Sintaxis

```
[ChartGoogle] chart|TipoGrafica|fields|Campos|parametro|valor|...
```

## Descripción

Genera gráficas utilizando Google Charts con diferentes tipos de visualización y configuraciones personalizables.

## Parámetros

| Parámetro | Tipo | Descripción | Valores |
|-----------|------|-------------|---------|
| chart | String | Tipo de gráfica a generar | BarChart, PieChart, LineChart, etc. |
| fields | String | Campos de datos separados por comas | nombres_campos,campo1,campo2 |
| width | Number | Ancho de la gráfica en píxeles | Valor numérico (ej: 600) |
| height | Number | Alto de la gráfica en píxeles | Valor numérico |
| title | String | Título de la gráfica | Texto descriptivo |
| hAxis | String | Título del eje horizontal (X) | Texto descriptivo |
| vAxis | String | Título del eje vertical (Y) | Texto descriptivo |
| list_width | Boolean | Ajustar ancho automáticamente | true/false |
| isStacked | Boolean | Apilar elementos en gráficas de barras | true/false |
| curveType | Boolean/String | Tipo de curva para líneas | false/function |
| is3D | Boolean | Renderizar en 3D | true/false |
| pieHole | Boolean/Number | Agujero central en gráficas de tarta | false o valor 0-1 |
| _MD5 | String | Hash MD5 para cache | Valor hash |

## Ejemplos

### Gráfica de barras básica
```
[ChartGoogle] chart|BarChart|fields|Organizacion,e,g|width|600|list_width|false|isStacked|false|curveType|false|is3D|false|pieHole|false
```

### Gráfica de tarta con relación de tablas
```
[ChartGoogle] chart|PieChart|fields|cd_empre{empre,cd_empre,nm_empre},base|list_width|true|title|Distribución por Empresa|hAxis|Empresas|vAxis|Cantidad|isStacked|true|curveType|false|is3D|false
```

### Gráfica de barras con títulos personalizados
```
[ChartGoogle] chart|BarChart|fields|a,b|width|600|list_width|false|title|Estadísticas de envío|isStacked|false|curveType|false|is3D|false|pieHole|false
```

### Gráfica de líneas con curvas
```
[ChartGoogle] chart|LineChart|fields|fecha,ventas,objetivo|width|800|height|400|title|Evolución de Ventas|hAxis|Tiempo|vAxis|Importe|curveType|function|isStacked|false
```

### Gráfica de tarta 3D con agujero
```
[ChartGoogle] chart|PieChart|fields|categoria,importe|width|500|height|400|title|Distribución de Gastos|is3D|true|pieHole|0.4
```