# eFormat

## Descripción
Hace lo mismo que la etiqueta [Format] pero dinámicamente con PHP. En los listados, formatea las columnas de datos que se deseen. Esta etiqueta también es multilínea de código PHP donde se puede escribir código para modificar la fila a imprimir.

## Sintaxis
```php
eFormat($FormatDefinicion)
```

## Parámetros
- **$FormatDefinicion**: Definición del formato para cada columna separada por comas. Se puede poner una función PHP en la cual se sustituirá el código ASCII '#' por el valor del campo a formatear en esa columna.

## Funcionalidad
Formatea las columnas de datos en los listados. Los valores de la fila a pintar vienen en la matriz `$_vF`. Se puede utilizar código PHP para modificar la fila, accediendo a las matrices `$_CellsStyle`, `$_CellsClass`, `$_RowStyle`, `$_RowClass`, `$_RowDisabled` y la variable `$RowNumber`.

## Ejemplos
```php
// Ejemplo 1: Formato básico
eFormat("MB,MB,,MB"); // Formato monetario en columnas 1,2 y 4

// Ejemplo 2: Formato con función PHP
eFormat("date('d/m/Y', strtotime('#')),MB,#"); // Fecha formateada, dinero, sin formato

// Ejemplo 3: Formato dinámico según tipo de campo
$format = "";
for($n=0; $n<count($_Form); $n++){
    if(substr($_Form[$n][1], 0, 3)=="nm_"){
        $format .= ",";
    }else{
        $format .= "MB,";
    }
}
eFormat($format);
```