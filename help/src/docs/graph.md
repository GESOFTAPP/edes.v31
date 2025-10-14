# Graph

## Sintaxis

```
[Graph] [R/C/A] | ROW(y) | COL(x) | TERRITORIO(x) | ALL COL(x) | LegendTitle | Variable=Valor, ...
```

## Descripción

Genera gráficas partiendo del listado. Se pueden utilizar variables globales como `$_GRAPHHIDECOL[5] = true;` y `$_GRAPHPERCENTAGE['C'] = 1;` para controlar el comportamiento de las gráficas.

Si existe la función `eGraphUser()` se llamará para modificar las variables por cada tipo de gráfica. Esta función se define de la siguiente forma:

```php
function eGraphUser($TipoGrafica, &$_Form, &$_COLSOP, &$TituloGrafica, &$TituloColumna, &$TituloFila, &$TituloLeyenda) {
    // ... código personalizado
}
```

También se puede llamar a la función `eGraphUserData` en los tipos Columns y Pie:

```php
function eGraphUserData($TIPO, $_Form, $DatosCol) {
    // ... código personalizado
}
```

## Parámetros

| Parámetro | Descripción |
|-----------|-------------|
| **Type** | Tipo de gráfica a generar |
| **ROW(y)** | Título de las Filas |
| **COL(x)** | Título de las Columnas en Col |
| **TERRITORIO(x)** | Título de las Columnas en Row |
| **ALL COL(x)** | Col x Row |
| **LegendTitle** | Título de la Leyenda |
| **Variable=Valor** | Lista de variables con su valor para cambiar la configuración |

### Tipos de gráfica (Type)

| Tipo | Descripción |
|------|-------------|
| **C** | Gráfica de las columnas (Columns) |
| **R** | Gráfica de las filas (Rows) |
| **G** | Gráfica del cruce de columnas por filas (Grid) |
| **P** | Tarta (Pie) |
| ***** | Genera las tres gráficas (C, R, G) |
| *(vacío)* | Genera las tres gráficas por defecto |

### Variables de configuración

Las siguientes variables pueden ser modificadas mediante el parámetro `Variable=Valor`:

#### Configuración de colores
- `BarColorGradient` - Gradiente de color de las barras
- `BarBorderColor` - Color del borde de las barras
- `BarAxisColor` - Color de los ejes
- `BarLightPosition` - Posición de la luz en las barras
- `GraphBorderColor` - Color del borde del gráfico
- `GraphLayerColor` - Color de la capa del gráfico

#### Configuración de títulos
- `TitleColor` - Color del título principal
- `TitleRowColor` - Color del título de filas
- `TitleColColor` - Color del título de columnas

#### Configuración de datos y grilla
- `DataColor` - Color de los datos
- `GrillColorOne` - Primer color de la grilla
- `GrillColorTwo` - Segundo color de la grilla

#### Configuración de fuentes
- `TitleFontType` - Tipo de fuente para títulos
- `FontType` - Tipo de fuente general

#### Configuración numérica
- `Decimals` - Número de decimales a mostrar

> **Nota**: Todas las variables excepto `Decimals` se encuentran en el fichero de configuración `/_datos/config/graph.ini`

## Ejemplo

```
[Graph] * | VOTOS | CANDIDATOS | TERRITORIO | CANDIDATOS x TERRITORIO | CANDIDATOS | BarColorGradient='#FFFFFF', BarColor0='#00FF00'
```

Este ejemplo genera todas las gráficas con:
- Título de filas: "VOTOS"
- Título de columnas: "CANDIDATOS"
- Territorio: "TERRITORIO"
- Cruce: "CANDIDATOS x TERRITORIO"
- Leyenda: "CANDIDATOS"
- Configuración personalizada: gradiente blanco y color verde para la primera barra