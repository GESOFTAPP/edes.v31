# JSSelRows

## Sintaxis
```
[JSSelRows] [FuncUser] | [NmIcon]
```

## Descripción
Te permite seleccionar un grupo amplio de registros desde un listado.

## Parámetros

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| FuncUser | String | Nombre de la función del usuario en la ventana padre, solo en el caso de que la selección sea desde una subventana. Si se pone el parámetro llamará a la función en la ventana desde donde se hace la llamada con dos parámetros: una matriz con el campo índice y otra matriz con la posición de la fila en el listado. Si se sale de la función con true cerrará la subventana. La función puede estar en la ventana actual. Si no se pone el parámetro se ejecutará el edf y se interceptará la llamada. |
| NmIcon | String | Nombre del icono alternativo. Al seleccionar la fila se mostrará un icono para marcar la fila, pudiendo definir el icono a visualizar. |

## Ejemplos

### Ejemplo 1: Con función de usuario
```javascript
// Script padre
[JSIni] a,mR
function MiFuncion( pk, pos ){
    //pk: matriz del pk de los registros seleccionados
    //pos: matriz de número de fila del listado
    return true;// Si todo correcto devolveremos "true" si no "false"
}

[AddButton] * | Seleccionar || top.eSWOpen( window, 'Ll:...edf', 'PRUEBA DE SELECCION' );

// Script de selección
[JSSelRows] MiFuncion
```

### Ejemplo 2: Sin función de usuario
```php
[JSSelRows]

[PHPIni] M
if( isset($_POST['_DATAJSSELROWS']) ){
    // Variable donde vendrá una lista de los valores del campo serial separados por coma.
    ...
    eEnd();
}
```

## Notas
- Desde un script se llama a una subventana para recoger los valores seleccionados
- El propio script puede recoger los valores usando la variable `$_POST['_DATAJSSELROWS']`