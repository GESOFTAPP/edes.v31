# eFormatTotals

## Descripción
Hace lo mismo que la etiqueta [FormatTotals] pero dinámicamente con PHP. Formatea las columnas de la línea de totales de un listado. Esta etiqueta es complementaria de TotalsRows, si TotalsRows no estuviese, esta etiqueta será ignorada.

## Sintaxis
```php
eFormatTotals($FormatDefinicion)
```

## Parámetros
- **$FormatDefinicion**: Definición del formato para cada columna separada por comas. Si no se desea formatear una columna determinada, se deja el parámetro vacío.

## Funcionalidad
Permite formatear las columnas de la línea de totales en los listados. También es multilínea de código PHP donde se puede escribir código para modificar la fila a imprimir, recibiendo una matriz por referencia llamada `$_vF` para modificar el cursor en curso.

## Ejemplos
```php
// Ejemplo 1: Formato básico
eFormatTotals("MB,MB,,MB"); // Formato monetario en columnas 1,2 y 4

// Ejemplo 2: Formato con código PHP
$formatTotals = "MB,MB,MB,MB";
eFormatTotals($formatTotals);

// Ejemplo 3: Formato dinámico según tipo de campo
for($n=0; $n<count($_Form); $n++){
    if(substr($_Form[$n][1], 0, 3)=="nm_"){
        $formatTotals .= ",";
    }else{
        $formatTotals .= "MB,";
    }
}
eFormatTotals($formatTotals);
```