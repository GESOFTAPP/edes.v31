# ListMultiSelect

## Sintaxis
```
[ListMultiSelect] Label | script.php / functionJavascript() [ | CheckRow [ | row ] ]
```

## Descripción
Mostrará un listado pudiendo seleccionar cualquier número de filas, ejecutando después un script PHP o una función JavaScript.

- Si se ejecuta un script PHP le llegará un array en el campo `$_POST["_PK_MULTISELECT_"]`
- Si se ejecuta una función JavaScript recibirá una matriz en el primer argumento

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| Label | String | Label del botón a ejecutar al terminar la selección |
| script.php / functionJavascript() | String | Script PHP o nombre de función JavaScript (permite incrustar variables PHP) |
| CheckRow | String | Función JavaScript para confirmar/denegar que se pueda seleccionar la fila (opcional) |
| row | String | Constante para indicar que se enviarán los rowIndex y no el campo índice. Por defecto enviará el campo índice de la tabla (opcional) |

## Marcar filas en la carga
Para marcar filas automáticamente durante la carga se utiliza la etiqueta [Format]:

```php
[Format]
if( $_vF[...HayQueMarcar...] ){
    $_vF[..ColumnaDeLaMarca...] = true; // la última mas uno
    $_RowClass = "MarkedRow";
}
```

## Ejemplos

### Ejemplo 1: Llamada a script PHP
```php
[ListMultiSelect] Terminar selección | prueba.php
```

**Fichero "prueba.php":**
```php
<?php
// array: $_POST["_PK_MULTISELECT_"]
?>
```

### Ejemplo 2: Llamada a función JavaScript
```javascript
[ListMultiSelect] Terminar selección | pruebaJS | uCheckUser

[JSIni] mR
function pruebaJS(dim){
    // dim: matriz con los valores seleccionados
    ...
}

function uCheckUser(oTR, oTD, Op, Action){
    //Op: [C]heck / [U]nCheck / [I]nvest
    //Action: [I]ndividual / [M]asiva
    return true/false;
}
```

## Parámetros de la función CheckRow
Cuando se define una función CheckRow, esta recibe los siguientes parámetros:

- **oTR**: Objeto TR (fila de la tabla)
- **oTD**: Objeto TD (celda de la tabla)
- **Op**: Operación - [C]heck / [U]nCheck / [I]nvest
- **Action**: Tipo de acción - [I]ndividual / [M]asiva

La función debe retornar `true` para permitir la selección o `false` para denegarla.