# Chart

## Sintaxis

```
[Chart] ChartType | Cols | NColTitle [ | XAxisTitle | YAxisTitle | MaxRec | TitleColor | TitleAxisColor | Value | ... | Title | NomImg | Ancho | Alto ]
```

## Descripción

Muestra una o varias gráficas con los valores de las columnas que se indiquen. Para tener más de una gráfica se pondrá una definición por cada gráfica. Solamente tiene validez en listados.

En las gráficas de Microsoft se chequea al imprimir si existe la función `ChartPrint(true/false)` mandando el valor "true" antes de imprimir y "false" al terminar por si se quiere cambiar algo y restaurarlo en la impresión, normalmente el color de fondo.

Si se utilizan las gráficas de PHP/SWF hay que definir la licencia de uso de la librería en el fichero de configuración "sql.ini" en la variable `$_PHPSWFCharts = '...'`.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| ChartType | string/number | Tipo de gráfica que deseamos mostrar. Puede ser un número del 0 al 45, una lista de números del 0 al 45 separada por comas o un asterisco. Si es un literal se usarán las gráficas en Flash de PHP/SWF Charts | Requerido |
| Cols | string | Lista de columnas separadas por comas que deseamos ver en la gráfica, empezando por "0" | Requerido |
| NColTitle | number | Número de la columna del listado empezando por "0", indicando el título de los valores | Requerido |
| XAxisTitle | string | Texto que deseamos mostrar en el eje X | Opcional |
| YAxisTitle | string | Texto que deseamos mostrar en el eje Y | Opcional |
| MaxRec | number | Número máximo de registros a visualizar desde el inicio del listado. Si el valor es negativo significa que si hay más registros de los indicados no se mostrará el Chart | Opcional |
| TitleColor | string | Color del título (título del listado) | Opcional |
| TitleAxisColor | string | Color de los títulos de los ejes X e Y | Opcional |
| Value | string | Poniendo la constante "value" se mostrará el valor de cada dato en la gráfica | Opcional |
| Title | string | Título de la gráfica, por defecto es el título del listado. En el caso de haber más de una gráfica este título también se pondrá en el "title" del icono | Opcional |
| NomImg | string | Nombre del icono alternativo, para cuando se tiene más de una gráfica y se quieren diferenciar los iconos de acceso | Opcional |
| Ancho | number | Ancho de la gráfica | Opcional |
| Alto | number | Alto de la gráfica | Opcional |

## Ejemplos

### Ejemplo 1: Gráfica básica con Microsoft Charts

```
[Title] ESTADISTICA DE PROPIEDADES

[Chart] 3 | 1,2 | 0 | UNIDADES | PROPIEDADES

[TotalsRows]
[ColsColor] PieLista

[Fields]
  Propiedad | a | D | T | 30 || M |||
  Locales   | b | + | T |  5 || M |||
  Globales  | c | + | T |  5 || M |||
  Totales   | d | + | T |  5 || M |||
```

### Ejemplo 2: Múltiples gráficas con Flash/SWF

```
[ChartGrid] 2
[Chart] area | 4 | 0 | Gasto |Destinos|||||| DESTINOS MAS VOLADOS (GASTOS)   ||500|
[Chart] bar  | 4 | 0 | Gasto |Destinos|||||| DESTINOS MAS VOLADOS (GASTOS)   ||500|
```

**Personalización con matriz $Chart:**
```php
$Chart['draw'] = array ( array (
    'type'=>"text",
   'transition' => 'zoom',
   'delay'      => 1,
   'duration'   => 1,
   'color'=>"000000",
   'alpha'=>10,
   'font'=>"arial",
   'rotation'=>-90,
   'bold'=>true,
   'size'=>40,
   'x'=>20,
   'y'=>250,
   'width'=>300,
   'height'=>150,
   'text'=>"DESTINOS",
   'h_align'=>"left",
   'v_align'=>"top" ),

  array (
   'type'=>"text",
   'transition' => 'slide_down',
   'delay'      => 1,
   'duration'   => 1,
   'color'=>"2F8A4A",
   'alpha'=>10,
   'font'=>"arial",
   'rotation'=>0,
   'bold'=>true,
   'size'=>40,
   'x'=>200,
   'y'=>30,
   'width'=>300,
   'height'=>50,
   'text'=>"TOP 10",
   'h_align'=>"center",
   'v_align'=>"middle" )
 );
```

**Configuración de campos:**
```
[THColSpan] segmento,psegmento,SEGMENTOS | gasto,pgasto,GASTOS
[ColsColor]                     #FEF4E2,, , ,#FEF4E
[ColsOp]                               ,,+,%,+     ,%
[FormatTotals] '<b>TOTALES TOP 10:</b>',,b,b,b     ,b
[Format]                               ,,b,b,b     ,b

[Fields] l
    Código<br>Destino | cd_destino              | N  | T |  3   || A |||
    Destino           | cd_destino              | N  | S | 40   || A |||
    Nº                | sum(numper) as segmento  | +  | T |  9   || A |||
    %                 | sum(numper) as psegmento | +, | T |  3,2 || A |||
    Euros             | sum(i_total) as gasto    | +  | T |  9   || A |||
    %                 | sum(i_total) as pgasto   | +, | T |  3,2 || A |||
```

## Notas

- Las gráficas solamente funcionan en listados
- Para gráficas múltiples, definir una directiva `[Chart]` por cada gráfica
- En gráficas Flash/SWF, la matriz `$Chart` permite alterar el comportamiento por defecto definido en `/edesweb/a/chart/` con archivos "ini" por tipo de gráfica
- Los tipos de gráfica van del 0 al 45 para Microsoft Charts
- Para gráficas Flash se usan literales como "area", "bar", etc.