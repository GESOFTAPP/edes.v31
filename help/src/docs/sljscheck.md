# slJSCheck

## Sintaxis

```
{slJSCheck} Mode ...
```

## Descripción

La función `slJSCheck` se comporta de manera similar a la etiqueta `[JSCheck]` pero está específicamente diseñada para aplicarse al formulario incrustado de las sublistas tipo "FormOnLine". Permite ejecutar validaciones JavaScript personalizadas antes de realizar operaciones en las sublistas.

### Globalización de Variables

Al entrar en esta etiqueta, todos los campos se globalizan automáticamente como variables JavaScript con el nombre del campo precedido de "$". Si estas variables se modifican, su valor actuará como si se usara la función `ePE()`.

### Formato de Mensajes de Error

Si el texto de error tiene una única zona entre comillas dobles, este texto se mostrará en **negrita**.

## Parámetros de la Función de Usuario

La función de usuario definida en `slJSCheck` recibe automáticamente los siguientes parámetros:

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `slID` | string | ID único de la sublista |
| `slMODE` | string | Modo de operación:<br>• `I` = Insert (Insertar)<br>• `U` = Update (Actualizar)<br>• `D` = Delete (Eliminar) |
| `slROW` | number | Número de fila implicada en la operación<br>• `0` si es una inserción (alta) |
| `slROWS` | object | Objeto que contiene todas las filas de la tabla de la sublista |
| `slCol` | object | Matriz hash con el índice del nombre del campo (y alias si lo tiene) que devuelve la posición en el listado |

## Iteración sobre las Filas

Para procesar las filas válidas de la sublista, utilice el siguiente patrón:

```javascript
for( var n=1; n<slROWS.length; n++ ){
    if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
        // Procesar fila válida
        // slROWS[n] contiene los datos de la fila
    }
}
```

### Condiciones de Filtrado

- **`slROWS[n].LIBRE==undefined`**: Excluye filas marcadas como libres/vacías
- **`slROWS[n].id!='PieLista'`**: Excluye la fila de pie de lista (totales/resumen)

## Uso de Variables Globalizadas

### Acceso a Campos

```javascript
// Los campos se acceden con $ seguido del nombre del campo
var precio = $precio;
var cantidad = $cantidad;
var total = $total;

// Modificar valores (equivale a usar ePE())
$total = $precio * $cantidad;
```

### Uso del Parámetro slCol

```javascript
// slCol permite obtener la posición de un campo en el listado
var posicionPrecio = slCol['precio'];
var posicionCantidad = slCol['cantidad'];

// Acceder a datos usando la posición
var precioFila = slROWS[slROW].cells[posicionPrecio].innerHTML;
```

## Ejemplo de Implementación

### Definición Básica

```ini
[SubList]
{slJSCheck} I validarSubLista
```

### Función de Validación

```javascript
function validarSubLista(slID, slMODE, slROW, slROWS, slCol) {
    // Acceso directo a variables globalizadas
    if(slMODE === 'I' || slMODE === 'U') {
        // Validar precio
        if($precio <= 0) {
            return 'El "precio" debe ser mayor que cero';
        }
        
        // Calcular total automáticamente
        $total = $precio * $cantidad;
        
        // Validar cantidad mínima
        if($cantidad < 1) {
            return 'La cantidad mínima es 1';
        }
    }
    
    // Validación específica según el modo
    switch(slMODE) {
        case 'I':
            return validarInsercion(slID, slROW, slROWS, slCol);
        case 'U':
            return validarActualizacion(slID, slROW, slROWS, slCol);
        case 'D':
            return validarEliminacion(slID, slROW, slROWS, slCol);
        default:
            return true;
    }
}

function validarInsercion(slID, slROW, slROWS, slCol) {
    // Usar slCol para obtener posiciones
    var posTotal = slCol['total'];
    var cantidadTotal = 0;
    
    for( var n=1; n<slROWS.length; n++ ){
        if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
            cantidadTotal += parseFloat(slROWS[n].cells[posTotal].innerHTML) || 0;
        }
    }
    
    if(cantidadTotal > 1000) {
        return 'La "cantidad total" no puede exceder 1000 unidades';
    }
    
    return true;
}
```

## Casos de Uso Comunes

### Validación con Variables Globalizadas

```javascript
function validarProducto(slID, slMODE, slROW, slROWS, slCol) {
    if(slMODE === 'I' || slMODE === 'U') {
        // Validación directa con variables globalizadas
        if(!$codigo || $codigo.trim() === '') {
            return 'El "código" es obligatorio';
        }
        
        if($precio <= 0) {
            return 'El "precio" debe ser positivo';
        }
        
        // Cálculo automático
        $subtotal = $precio * $cantidad;
        $total = $subtotal * (1 + $impuesto/100);
        
        // Validación de límites
        if($total > 10000) {
            return 'El "total" no puede exceder 10,000';
        }
    }
    return true;
}
```

### Validación de Duplicados con slCol

```javascript
function validarDuplicados(slID, slMODE, slROW, slROWS, slCol) {
    if(slMODE === 'I') {
        var posCodigo = slCol['codigo'];
        var codigoNuevo = $codigo;
        
        for( var n=1; n<slROWS.length; n++ ){
            if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
                var codigoExistente = slROWS[n].cells[posCodigo].innerHTML;
                if(codigoExistente === codigoNuevo) {
                    return 'El código "' + codigoNuevo + '" ya existe';
                }
            }
        }
    }
    return true;
}
```

### Validación Condicional

```javascript
function validarCondicional(slID, slMODE, slROW, slROWS, slCol) {
    // Validación condicional basada en otro campo
    if($tipo === 'ESPECIAL') {
        if(!$observaciones || $observaciones.trim() === '') {
            return 'Las "observaciones" son obligatorias para tipo ESPECIAL';
        }
        
        if($precio < 100) {
            return 'El "precio mínimo" para tipo ESPECIAL es 100';
        }
    }
    
    // Auto-cálculo condicional
    if($aplicar_descuento) {
        $precio_final = $precio * (1 - $descuento/100);
    } else {
        $precio_final = $precio;
    }
    
    return true;
}
```

## Validaciones Avanzadas

### Cálculos Dinámicos

```javascript
function validarCalculos(slID, slMODE, slROW, slROWS) {
    var total = 0;
    var limite = 5000;
    
    for( var n=1; n<slROWS.length; n++ ){
        if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
            var cantidad = parseFloat(slROWS[n].cells[2].innerHTML) || 0;
            var precio = parseFloat(slROWS[n].cells[3].innerHTML) || 0;
            total += cantidad * precio;
        }
    }
    
    if(total > limite) {
        alert('El total (' + total + ') excede el límite permitido (' + limite + ')');
        return false;
    }
    
    return true;
}
```

### Validación Condicional

```javascript
function validarCondicional(slID, slMODE, slROW, slROWS) {
    // Solo validar en inserción y actualización
    if(slMODE === 'I' || slMODE === 'U') {
        var tieneElementosEspeciales = false;
        
        for( var n=1; n<slROWS.length; n++ ){
            if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
                var tipo = slROWS[n].cells[4].innerHTML;
                if(tipo === 'ESPECIAL') {
                    tieneElementosEspeciales = true;
                    break;
                }
            }
        }
        
        if(tieneElementosEspeciales) {
            return confirm('La lista contiene elementos especiales. ¿Desea continuar?');
        }
    }
    
    return true;
}
```

## Valores de Retorno

- **`true`**: La validación es exitosa, permite continuar con la operación
- **`false`**: La validación falla, cancela la operación  
- **`string`**: Mensaje de error que se mostrará al usuario
  - Si contiene texto entre comillas dobles, se mostrará en **negrita**
  - Ejemplo: `'El "precio" debe ser mayor que cero'` → El **precio** debe ser mayor que cero

## Ejemplos de Mensajes de Error

```javascript
// Mensaje simple
return 'Error de validación';

// Mensaje con texto en negrita
return 'El campo "cantidad" es obligatorio';

// Mensaje con múltiples términos en negrita  
return 'Los campos "precio" y "cantidad" son obligatorios';
```

## Ventajas de slJSCheck

- **Validación en tiempo real**: Verifica datos antes de enviarlos al servidor
- **Variables globalizadas**: Acceso directo a campos con prefijo `# slJSCheck

## Sintaxis

```
{slJSCheck} Mode ...
```

## Descripción

La función `slJSCheck` se comporta de manera similar a la etiqueta `[JSCheck]` pero está específicamente diseñada para aplicarse al formulario incrustado de las sublistas tipo "FormOnLine". Permite ejecutar validaciones JavaScript personalizadas antes de realizar operaciones en las sublistas.

### Globalización de Variables

Al entrar en esta etiqueta, todos los campos se globalizan automáticamente como variables JavaScript con el nombre del campo precedido de "$". Si estas variables se modifican, su valor actuará como si se usara la función `ePE()`.

### Formato de Mensajes de Error

Si el texto de error tiene una única zona entre comillas dobles, este texto se mostrará en **negrita**.

## Parámetros de la Función de Usuario

La función de usuario definida en `slJSCheck` recibe automáticamente los siguientes parámetros:

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `slID` | string | ID único de la sublista |
| `slMODE` | string | Modo de operación:<br>• `I` = Insert (Insertar)<br>• `U` = Update (Actualizar)<br>• `D` = Delete (Eliminar) |
| `slROW` | number | Número de fila implicada en la operación<br>• `0` si es una inserción (alta) |
| `slROWS` | object | Objeto que contiene todas las filas de la tabla de la sublista |
| `slCol` | object | Matriz hash con el índice del nombre del campo (y alias si lo tiene) que devuelve la posición en el listado |

## Iteración sobre las Filas

Para procesar las filas válidas de la sublista, utilice el siguiente patrón:

```javascript
for( var n=1; n<slROWS.length; n++ ){
    if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
        // Procesar fila válida
        // slROWS[n] contiene los datos de la fila
    }
}
```

### Condiciones de Filtrado

- **`slROWS[n].LIBRE==undefined`**: Excluye filas marcadas como libres/vacías
- **`slROWS[n].id!='PieLista'`**: Excluye la fila de pie de lista (totales/resumen)

## Uso de Variables Globalizadas

### Acceso a Campos

```javascript
// Los campos se acceden con $ seguido del nombre del campo
var precio = $precio;
var cantidad = $cantidad;
var total = $total;

// Modificar valores (equivale a usar ePE())
$total = $precio * $cantidad;
```

### Uso del Parámetro slCol

```javascript
// slCol permite obtener la posición de un campo en el listado
var posicionPrecio = slCol['precio'];
var posicionCantidad = slCol['cantidad'];

// Acceder a datos usando la posición
var precioFila = slROWS[slROW].cells[posicionPrecio].innerHTML;
```

## Ejemplo de Implementación

### Definición Básica

```ini
[SubList]
{slJSCheck} I validarSubLista
```

### Función de Validación

```javascript
function validarSubLista(slID, slMODE, slROW, slROWS, slCol) {
    // Acceso directo a variables globalizadas
    if(slMODE === 'I' || slMODE === 'U') {
        // Validar precio
        if($precio <= 0) {
            return 'El "precio" debe ser mayor que cero';
        }
        
        // Calcular total automáticamente
        $total = $precio * $cantidad;
        
        // Validar cantidad mínima
        if($cantidad < 1) {
            return 'La cantidad mínima es 1';
        }
    }
    
    // Validación específica según el modo
    switch(slMODE) {
        case 'I':
            return validarInsercion(slID, slROW, slROWS, slCol);
        case 'U':
            return validarActualizacion(slID, slROW, slROWS, slCol);
        case 'D':
            return validarEliminacion(slID, slROW, slROWS, slCol);
        default:
            return true;
    }
}

function validarInsercion(slID, slROW, slROWS, slCol) {
    // Usar slCol para obtener posiciones
    var posTotal = slCol['total'];
    var cantidadTotal = 0;
    
    for( var n=1; n<slROWS.length; n++ ){
        if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
            cantidadTotal += parseFloat(slROWS[n].cells[posTotal].innerHTML) || 0;
        }
    }
    
    if(cantidadTotal > 1000) {
        return 'La "cantidad total" no puede exceder 1000 unidades';
    }
    
    return true;
}
```

## Casos de Uso Comunes

### Validación con Variables Globalizadas

```javascript
function validarProducto(slID, slMODE, slROW, slROWS, slCol) {
    if(slMODE === 'I' || slMODE === 'U') {
        // Validación directa con variables globalizadas
        if(!$codigo || $codigo.trim() === '') {
            return 'El "código" es obligatorio';
        }
        
        if($precio <= 0) {
            return 'El "precio" debe ser positivo';
        }
        
        // Cálculo automático
        $subtotal = $precio * $cantidad;
        $total = $subtotal * (1 + $impuesto/100);
        
        // Validación de límites
        if($total > 10000) {
            return 'El "total" no puede exceder 10,000';
        }
    }
    return true;
}
```

### Validación de Duplicados con slCol

```javascript
function validarDuplicados(slID, slMODE, slROW, slROWS, slCol) {
    if(slMODE === 'I') {
        var posCodigo = slCol['codigo'];
        var codigoNuevo = $codigo;
        
        for( var n=1; n<slROWS.length; n++ ){
            if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
                var codigoExistente = slROWS[n].cells[posCodigo].innerHTML;
                if(codigoExistente === codigoNuevo) {
                    return 'El código "' + codigoNuevo + '" ya existe';
                }
            }
        }
    }
    return true;
}
```

### Validación Condicional

```javascript
function validarCondicional(slID, slMODE, slROW, slROWS, slCol) {
    // Validación condicional basada en otro campo
    if($tipo === 'ESPECIAL') {
        if(!$observaciones || $observaciones.trim() === '') {
            return 'Las "observaciones" son obligatorias para tipo ESPECIAL';
        }
        
        if($precio < 100) {
            return 'El "precio mínimo" para tipo ESPECIAL es 100';
        }
    }
    
    // Auto-cálculo condicional
    if($aplicar_descuento) {
        $precio_final = $precio * (1 - $descuento/100);
    } else {
        $precio_final = $precio;
    }
    
    return true;
}
```

## Validaciones Avanzadas

### Cálculos Dinámicos

```javascript
function validarCalculos(slID, slMODE, slROW, slROWS) {
    var total = 0;
    var limite = 5000;
    
    for( var n=1; n<slROWS.length; n++ ){
        if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
            var cantidad = parseFloat(slROWS[n].cells[2].innerHTML) || 0;
            var precio = parseFloat(slROWS[n].cells[3].innerHTML) || 0;
            total += cantidad * precio;
        }
    }
    
    if(total > limite) {
        alert('El total (' + total + ') excede el límite permitido (' + limite + ')');
        return false;
    }
    
    return true;
}
```

### Validación Condicional

```javascript
function validarCondicional(slID, slMODE, slROW, slROWS) {
    // Solo validar en inserción y actualización
    if(slMODE === 'I' || slMODE === 'U') {
        var tieneElementosEspeciales = false;
        
        for( var n=1; n<slROWS.length; n++ ){
            if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
                var tipo = slROWS[n].cells[4].innerHTML;
                if(tipo === 'ESPECIAL') {
                    tieneElementosEspeciales = true;
                    break;
                }
            }
        }
        
        if(tieneElementosEspeciales) {
            return confirm('La lista contiene elementos especiales. ¿Desea continuar?');
        }
    }
    
    return true;
}
```

## Valores de Retorno

- **`true`**: La validación es exitosa, permite continuar con la operación
- **`false`**: La validación falla, cancela la operación  
- **`string`**: Mensaje de error que se mostrará al usuario
  - Si contiene texto entre comillas dobles, se mostrará en **negrita**
  - Ejemplo: `'El "precio" debe ser mayor que cero'` → El **precio** debe ser mayor que cero

## Ejemplos de Mensajes de Error

```javascript
// Mensaje simple
return 'Error de validación';

// Mensaje con texto en negrita
return 'El campo "cantidad" es obligatorio';

// Mensaje con múltiples términos en negrita  
return 'Los campos "precio" y "cantidad" son obligatorios';
```


- **Modificación automática**: Cambios en variables `# slJSCheck

## Sintaxis

```
{slJSCheck} Mode ...
```

## Descripción

La función `slJSCheck` se comporta de manera similar a la etiqueta `[JSCheck]` pero está específicamente diseñada para aplicarse al formulario incrustado de las sublistas tipo "FormOnLine". Permite ejecutar validaciones JavaScript personalizadas antes de realizar operaciones en las sublistas.

### Globalización de Variables

Al entrar en esta etiqueta, todos los campos se globalizan automáticamente como variables JavaScript con el nombre del campo precedido de "$". Si estas variables se modifican, su valor actuará como si se usara la función `ePE()`.

### Formato de Mensajes de Error

Si el texto de error tiene una única zona entre comillas dobles, este texto se mostrará en **negrita**.

## Parámetros de la Función de Usuario

La función de usuario definida en `slJSCheck` recibe automáticamente los siguientes parámetros:

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `slID` | string | ID único de la sublista |
| `slMODE` | string | Modo de operación:<br>• `I` = Insert (Insertar)<br>• `U` = Update (Actualizar)<br>• `D` = Delete (Eliminar) |
| `slROW` | number | Número de fila implicada en la operación<br>• `0` si es una inserción (alta) |
| `slROWS` | object | Objeto que contiene todas las filas de la tabla de la sublista |
| `slCol` | object | Matriz hash con el índice del nombre del campo (y alias si lo tiene) que devuelve la posición en el listado |

## Iteración sobre las Filas

Para procesar las filas válidas de la sublista, utilice el siguiente patrón:

```javascript
for( var n=1; n<slROWS.length; n++ ){
    if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
        // Procesar fila válida
        // slROWS[n] contiene los datos de la fila
    }
}
```

### Condiciones de Filtrado

- **`slROWS[n].LIBRE==undefined`**: Excluye filas marcadas como libres/vacías
- **`slROWS[n].id!='PieLista'`**: Excluye la fila de pie de lista (totales/resumen)

## Uso de Variables Globalizadas

### Acceso a Campos

```javascript
// Los campos se acceden con $ seguido del nombre del campo
var precio = $precio;
var cantidad = $cantidad;
var total = $total;

// Modificar valores (equivale a usar ePE())
$total = $precio * $cantidad;
```

### Uso del Parámetro slCol

```javascript
// slCol permite obtener la posición de un campo en el listado
var posicionPrecio = slCol['precio'];
var posicionCantidad = slCol['cantidad'];

// Acceder a datos usando la posición
var precioFila = slROWS[slROW].cells[posicionPrecio].innerHTML;
```

## Ejemplo de Implementación

### Definición Básica

```ini
[SubList]
{slJSCheck} I validarSubLista
```

### Función de Validación

```javascript
function validarSubLista(slID, slMODE, slROW, slROWS, slCol) {
    // Acceso directo a variables globalizadas
    if(slMODE === 'I' || slMODE === 'U') {
        // Validar precio
        if($precio <= 0) {
            return 'El "precio" debe ser mayor que cero';
        }
        
        // Calcular total automáticamente
        $total = $precio * $cantidad;
        
        // Validar cantidad mínima
        if($cantidad < 1) {
            return 'La cantidad mínima es 1';
        }
    }
    
    // Validación específica según el modo
    switch(slMODE) {
        case 'I':
            return validarInsercion(slID, slROW, slROWS, slCol);
        case 'U':
            return validarActualizacion(slID, slROW, slROWS, slCol);
        case 'D':
            return validarEliminacion(slID, slROW, slROWS, slCol);
        default:
            return true;
    }
}

function validarInsercion(slID, slROW, slROWS, slCol) {
    // Usar slCol para obtener posiciones
    var posTotal = slCol['total'];
    var cantidadTotal = 0;
    
    for( var n=1; n<slROWS.length; n++ ){
        if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
            cantidadTotal += parseFloat(slROWS[n].cells[posTotal].innerHTML) || 0;
        }
    }
    
    if(cantidadTotal > 1000) {
        return 'La "cantidad total" no puede exceder 1000 unidades';
    }
    
    return true;
}
```

## Casos de Uso Comunes

### Validación con Variables Globalizadas

```javascript
function validarProducto(slID, slMODE, slROW, slROWS, slCol) {
    if(slMODE === 'I' || slMODE === 'U') {
        // Validación directa con variables globalizadas
        if(!$codigo || $codigo.trim() === '') {
            return 'El "código" es obligatorio';
        }
        
        if($precio <= 0) {
            return 'El "precio" debe ser positivo';
        }
        
        // Cálculo automático
        $subtotal = $precio * $cantidad;
        $total = $subtotal * (1 + $impuesto/100);
        
        // Validación de límites
        if($total > 10000) {
            return 'El "total" no puede exceder 10,000';
        }
    }
    return true;
}
```

### Validación de Duplicados con slCol

```javascript
function validarDuplicados(slID, slMODE, slROW, slROWS, slCol) {
    if(slMODE === 'I') {
        var posCodigo = slCol['codigo'];
        var codigoNuevo = $codigo;
        
        for( var n=1; n<slROWS.length; n++ ){
            if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
                var codigoExistente = slROWS[n].cells[posCodigo].innerHTML;
                if(codigoExistente === codigoNuevo) {
                    return 'El código "' + codigoNuevo + '" ya existe';
                }
            }
        }
    }
    return true;
}
```

### Validación Condicional

```javascript
function validarCondicional(slID, slMODE, slROW, slROWS, slCol) {
    // Validación condicional basada en otro campo
    if($tipo === 'ESPECIAL') {
        if(!$observaciones || $observaciones.trim() === '') {
            return 'Las "observaciones" son obligatorias para tipo ESPECIAL';
        }
        
        if($precio < 100) {
            return 'El "precio mínimo" para tipo ESPECIAL es 100';
        }
    }
    
    // Auto-cálculo condicional
    if($aplicar_descuento) {
        $precio_final = $precio * (1 - $descuento/100);
    } else {
        $precio_final = $precio;
    }
    
    return true;
}
```

## Validaciones Avanzadas

### Cálculos Dinámicos

```javascript
function validarCalculos(slID, slMODE, slROW, slROWS) {
    var total = 0;
    var limite = 5000;
    
    for( var n=1; n<slROWS.length; n++ ){
        if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
            var cantidad = parseFloat(slROWS[n].cells[2].innerHTML) || 0;
            var precio = parseFloat(slROWS[n].cells[3].innerHTML) || 0;
            total += cantidad * precio;
        }
    }
    
    if(total > limite) {
        alert('El total (' + total + ') excede el límite permitido (' + limite + ')');
        return false;
    }
    
    return true;
}
```

### Validación Condicional

```javascript
function validarCondicional(slID, slMODE, slROW, slROWS) {
    // Solo validar en inserción y actualización
    if(slMODE === 'I' || slMODE === 'U') {
        var tieneElementosEspeciales = false;
        
        for( var n=1; n<slROWS.length; n++ ){
            if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
                var tipo = slROWS[n].cells[4].innerHTML;
                if(tipo === 'ESPECIAL') {
                    tieneElementosEspeciales = true;
                    break;
                }
            }
        }
        
        if(tieneElementosEspeciales) {
            return confirm('La lista contiene elementos especiales. ¿Desea continuar?');
        }
    }
    
    return true;
}
```

## Valores de Retorno

- **`true`**: La validación es exitosa, permite continuar con la operación
- **`false`**: La validación falla, cancela la operación  
- **`string`**: Mensaje de error que se mostrará al usuario
  - Si contiene texto entre comillas dobles, se mostrará en **negrita**
  - Ejemplo: `'El "precio" debe ser mayor que cero'` → El **precio** debe ser mayor que cero

## Ejemplos de Mensajes de Error

```javascript
// Mensaje simple
return 'Error de validación';

// Mensaje con texto en negrita
return 'El campo "cantidad" es obligatorio';

// Mensaje con múltiples términos en negrita  
return 'Los campos "precio" y "cantidad" son obligatorios';
```

 equivalen a usar `ePE()`
- **Localización de campos**: `slCol` proporciona posiciones exactas de campos
- **Mensajes formateados**: Soporte para texto en negrita en mensajes de error
- **Flexibilidad**: Permite validaciones complejas y cálculos automáticos
- **Integración nativa**: Funciona específicamente con sublistas FormOnLine
- **Control granular**: Diferentes validaciones según el modo de operación

## Notas Importantes

- La función debe retornar `true`, `false` o un `string` con el mensaje de error
- Las variables globalizadas usan el prefijo `# slJSCheck

## Sintaxis

```
{slJSCheck} Mode ...
```

## Descripción

La función `slJSCheck` se comporta de manera similar a la etiqueta `[JSCheck]` pero está específicamente diseñada para aplicarse al formulario incrustado de las sublistas tipo "FormOnLine". Permite ejecutar validaciones JavaScript personalizadas antes de realizar operaciones en las sublistas.

### Globalización de Variables

Al entrar en esta etiqueta, todos los campos se globalizan automáticamente como variables JavaScript con el nombre del campo precedido de "$". Si estas variables se modifican, su valor actuará como si se usara la función `ePE()`.

### Formato de Mensajes de Error

Si el texto de error tiene una única zona entre comillas dobles, este texto se mostrará en **negrita**.

## Parámetros de la Función de Usuario

La función de usuario definida en `slJSCheck` recibe automáticamente los siguientes parámetros:

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `slID` | string | ID único de la sublista |
| `slMODE` | string | Modo de operación:<br>• `I` = Insert (Insertar)<br>• `U` = Update (Actualizar)<br>• `D` = Delete (Eliminar) |
| `slROW` | number | Número de fila implicada en la operación<br>• `0` si es una inserción (alta) |
| `slROWS` | object | Objeto que contiene todas las filas de la tabla de la sublista |
| `slCol` | object | Matriz hash con el índice del nombre del campo (y alias si lo tiene) que devuelve la posición en el listado |

## Iteración sobre las Filas

Para procesar las filas válidas de la sublista, utilice el siguiente patrón:

```javascript
for( var n=1; n<slROWS.length; n++ ){
    if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
        // Procesar fila válida
        // slROWS[n] contiene los datos de la fila
    }
}
```

### Condiciones de Filtrado

- **`slROWS[n].LIBRE==undefined`**: Excluye filas marcadas como libres/vacías
- **`slROWS[n].id!='PieLista'`**: Excluye la fila de pie de lista (totales/resumen)

## Uso de Variables Globalizadas

### Acceso a Campos

```javascript
// Los campos se acceden con $ seguido del nombre del campo
var precio = $precio;
var cantidad = $cantidad;
var total = $total;

// Modificar valores (equivale a usar ePE())
$total = $precio * $cantidad;
```

### Uso del Parámetro slCol

```javascript
// slCol permite obtener la posición de un campo en el listado
var posicionPrecio = slCol['precio'];
var posicionCantidad = slCol['cantidad'];

// Acceder a datos usando la posición
var precioFila = slROWS[slROW].cells[posicionPrecio].innerHTML;
```

## Ejemplo de Implementación

### Definición Básica

```ini
[SubList]
{slJSCheck} I validarSubLista
```

### Función de Validación

```javascript
function validarSubLista(slID, slMODE, slROW, slROWS, slCol) {
    // Acceso directo a variables globalizadas
    if(slMODE === 'I' || slMODE === 'U') {
        // Validar precio
        if($precio <= 0) {
            return 'El "precio" debe ser mayor que cero';
        }
        
        // Calcular total automáticamente
        $total = $precio * $cantidad;
        
        // Validar cantidad mínima
        if($cantidad < 1) {
            return 'La cantidad mínima es 1';
        }
    }
    
    // Validación específica según el modo
    switch(slMODE) {
        case 'I':
            return validarInsercion(slID, slROW, slROWS, slCol);
        case 'U':
            return validarActualizacion(slID, slROW, slROWS, slCol);
        case 'D':
            return validarEliminacion(slID, slROW, slROWS, slCol);
        default:
            return true;
    }
}

function validarInsercion(slID, slROW, slROWS, slCol) {
    // Usar slCol para obtener posiciones
    var posTotal = slCol['total'];
    var cantidadTotal = 0;
    
    for( var n=1; n<slROWS.length; n++ ){
        if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
            cantidadTotal += parseFloat(slROWS[n].cells[posTotal].innerHTML) || 0;
        }
    }
    
    if(cantidadTotal > 1000) {
        return 'La "cantidad total" no puede exceder 1000 unidades';
    }
    
    return true;
}
```

## Casos de Uso Comunes

### Validación con Variables Globalizadas

```javascript
function validarProducto(slID, slMODE, slROW, slROWS, slCol) {
    if(slMODE === 'I' || slMODE === 'U') {
        // Validación directa con variables globalizadas
        if(!$codigo || $codigo.trim() === '') {
            return 'El "código" es obligatorio';
        }
        
        if($precio <= 0) {
            return 'El "precio" debe ser positivo';
        }
        
        // Cálculo automático
        $subtotal = $precio * $cantidad;
        $total = $subtotal * (1 + $impuesto/100);
        
        // Validación de límites
        if($total > 10000) {
            return 'El "total" no puede exceder 10,000';
        }
    }
    return true;
}
```

### Validación de Duplicados con slCol

```javascript
function validarDuplicados(slID, slMODE, slROW, slROWS, slCol) {
    if(slMODE === 'I') {
        var posCodigo = slCol['codigo'];
        var codigoNuevo = $codigo;
        
        for( var n=1; n<slROWS.length; n++ ){
            if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
                var codigoExistente = slROWS[n].cells[posCodigo].innerHTML;
                if(codigoExistente === codigoNuevo) {
                    return 'El código "' + codigoNuevo + '" ya existe';
                }
            }
        }
    }
    return true;
}
```

### Validación Condicional

```javascript
function validarCondicional(slID, slMODE, slROW, slROWS, slCol) {
    // Validación condicional basada en otro campo
    if($tipo === 'ESPECIAL') {
        if(!$observaciones || $observaciones.trim() === '') {
            return 'Las "observaciones" son obligatorias para tipo ESPECIAL';
        }
        
        if($precio < 100) {
            return 'El "precio mínimo" para tipo ESPECIAL es 100';
        }
    }
    
    // Auto-cálculo condicional
    if($aplicar_descuento) {
        $precio_final = $precio * (1 - $descuento/100);
    } else {
        $precio_final = $precio;
    }
    
    return true;
}
```

## Validaciones Avanzadas

### Cálculos Dinámicos

```javascript
function validarCalculos(slID, slMODE, slROW, slROWS) {
    var total = 0;
    var limite = 5000;
    
    for( var n=1; n<slROWS.length; n++ ){
        if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
            var cantidad = parseFloat(slROWS[n].cells[2].innerHTML) || 0;
            var precio = parseFloat(slROWS[n].cells[3].innerHTML) || 0;
            total += cantidad * precio;
        }
    }
    
    if(total > limite) {
        alert('El total (' + total + ') excede el límite permitido (' + limite + ')');
        return false;
    }
    
    return true;
}
```

### Validación Condicional

```javascript
function validarCondicional(slID, slMODE, slROW, slROWS) {
    // Solo validar en inserción y actualización
    if(slMODE === 'I' || slMODE === 'U') {
        var tieneElementosEspeciales = false;
        
        for( var n=1; n<slROWS.length; n++ ){
            if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
                var tipo = slROWS[n].cells[4].innerHTML;
                if(tipo === 'ESPECIAL') {
                    tieneElementosEspeciales = true;
                    break;
                }
            }
        }
        
        if(tieneElementosEspeciales) {
            return confirm('La lista contiene elementos especiales. ¿Desea continuar?');
        }
    }
    
    return true;
}
```

## Valores de Retorno

- **`true`**: La validación es exitosa, permite continuar con la operación
- **`false`**: La validación falla, cancela la operación  
- **`string`**: Mensaje de error que se mostrará al usuario
  - Si contiene texto entre comillas dobles, se mostrará en **negrita**
  - Ejemplo: `'El "precio" debe ser mayor que cero'` → El **precio** debe ser mayor que cero

## Ejemplos de Mensajes de Error

```javascript
// Mensaje simple
return 'Error de validación';

// Mensaje con texto en negrita
return 'El campo "cantidad" es obligatorio';

// Mensaje con múltiples términos en negrita  
return 'Los campos "precio" y "cantidad" son obligatorios';
```

 seguido del nombre del campo
- Modificar variables `# slJSCheck

## Sintaxis

```
{slJSCheck} Mode ...
```

## Descripción

La función `slJSCheck` se comporta de manera similar a la etiqueta `[JSCheck]` pero está específicamente diseñada para aplicarse al formulario incrustado de las sublistas tipo "FormOnLine". Permite ejecutar validaciones JavaScript personalizadas antes de realizar operaciones en las sublistas.

### Globalización de Variables

Al entrar en esta etiqueta, todos los campos se globalizan automáticamente como variables JavaScript con el nombre del campo precedido de "$". Si estas variables se modifican, su valor actuará como si se usara la función `ePE()`.

### Formato de Mensajes de Error

Si el texto de error tiene una única zona entre comillas dobles, este texto se mostrará en **negrita**.

## Parámetros de la Función de Usuario

La función de usuario definida en `slJSCheck` recibe automáticamente los siguientes parámetros:

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `slID` | string | ID único de la sublista |
| `slMODE` | string | Modo de operación:<br>• `I` = Insert (Insertar)<br>• `U` = Update (Actualizar)<br>• `D` = Delete (Eliminar) |
| `slROW` | number | Número de fila implicada en la operación<br>• `0` si es una inserción (alta) |
| `slROWS` | object | Objeto que contiene todas las filas de la tabla de la sublista |
| `slCol` | object | Matriz hash con el índice del nombre del campo (y alias si lo tiene) que devuelve la posición en el listado |

## Iteración sobre las Filas

Para procesar las filas válidas de la sublista, utilice el siguiente patrón:

```javascript
for( var n=1; n<slROWS.length; n++ ){
    if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
        // Procesar fila válida
        // slROWS[n] contiene los datos de la fila
    }
}
```

### Condiciones de Filtrado

- **`slROWS[n].LIBRE==undefined`**: Excluye filas marcadas como libres/vacías
- **`slROWS[n].id!='PieLista'`**: Excluye la fila de pie de lista (totales/resumen)

## Uso de Variables Globalizadas

### Acceso a Campos

```javascript
// Los campos se acceden con $ seguido del nombre del campo
var precio = $precio;
var cantidad = $cantidad;
var total = $total;

// Modificar valores (equivale a usar ePE())
$total = $precio * $cantidad;
```

### Uso del Parámetro slCol

```javascript
// slCol permite obtener la posición de un campo en el listado
var posicionPrecio = slCol['precio'];
var posicionCantidad = slCol['cantidad'];

// Acceder a datos usando la posición
var precioFila = slROWS[slROW].cells[posicionPrecio].innerHTML;
```

## Ejemplo de Implementación

### Definición Básica

```ini
[SubList]
{slJSCheck} I validarSubLista
```

### Función de Validación

```javascript
function validarSubLista(slID, slMODE, slROW, slROWS, slCol) {
    // Acceso directo a variables globalizadas
    if(slMODE === 'I' || slMODE === 'U') {
        // Validar precio
        if($precio <= 0) {
            return 'El "precio" debe ser mayor que cero';
        }
        
        // Calcular total automáticamente
        $total = $precio * $cantidad;
        
        // Validar cantidad mínima
        if($cantidad < 1) {
            return 'La cantidad mínima es 1';
        }
    }
    
    // Validación específica según el modo
    switch(slMODE) {
        case 'I':
            return validarInsercion(slID, slROW, slROWS, slCol);
        case 'U':
            return validarActualizacion(slID, slROW, slROWS, slCol);
        case 'D':
            return validarEliminacion(slID, slROW, slROWS, slCol);
        default:
            return true;
    }
}

function validarInsercion(slID, slROW, slROWS, slCol) {
    // Usar slCol para obtener posiciones
    var posTotal = slCol['total'];
    var cantidadTotal = 0;
    
    for( var n=1; n<slROWS.length; n++ ){
        if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
            cantidadTotal += parseFloat(slROWS[n].cells[posTotal].innerHTML) || 0;
        }
    }
    
    if(cantidadTotal > 1000) {
        return 'La "cantidad total" no puede exceder 1000 unidades';
    }
    
    return true;
}
```

## Casos de Uso Comunes

### Validación con Variables Globalizadas

```javascript
function validarProducto(slID, slMODE, slROW, slROWS, slCol) {
    if(slMODE === 'I' || slMODE === 'U') {
        // Validación directa con variables globalizadas
        if(!$codigo || $codigo.trim() === '') {
            return 'El "código" es obligatorio';
        }
        
        if($precio <= 0) {
            return 'El "precio" debe ser positivo';
        }
        
        // Cálculo automático
        $subtotal = $precio * $cantidad;
        $total = $subtotal * (1 + $impuesto/100);
        
        // Validación de límites
        if($total > 10000) {
            return 'El "total" no puede exceder 10,000';
        }
    }
    return true;
}
```

### Validación de Duplicados con slCol

```javascript
function validarDuplicados(slID, slMODE, slROW, slROWS, slCol) {
    if(slMODE === 'I') {
        var posCodigo = slCol['codigo'];
        var codigoNuevo = $codigo;
        
        for( var n=1; n<slROWS.length; n++ ){
            if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
                var codigoExistente = slROWS[n].cells[posCodigo].innerHTML;
                if(codigoExistente === codigoNuevo) {
                    return 'El código "' + codigoNuevo + '" ya existe';
                }
            }
        }
    }
    return true;
}
```

### Validación Condicional

```javascript
function validarCondicional(slID, slMODE, slROW, slROWS, slCol) {
    // Validación condicional basada en otro campo
    if($tipo === 'ESPECIAL') {
        if(!$observaciones || $observaciones.trim() === '') {
            return 'Las "observaciones" son obligatorias para tipo ESPECIAL';
        }
        
        if($precio < 100) {
            return 'El "precio mínimo" para tipo ESPECIAL es 100';
        }
    }
    
    // Auto-cálculo condicional
    if($aplicar_descuento) {
        $precio_final = $precio * (1 - $descuento/100);
    } else {
        $precio_final = $precio;
    }
    
    return true;
}
```

## Validaciones Avanzadas

### Cálculos Dinámicos

```javascript
function validarCalculos(slID, slMODE, slROW, slROWS) {
    var total = 0;
    var limite = 5000;
    
    for( var n=1; n<slROWS.length; n++ ){
        if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
            var cantidad = parseFloat(slROWS[n].cells[2].innerHTML) || 0;
            var precio = parseFloat(slROWS[n].cells[3].innerHTML) || 0;
            total += cantidad * precio;
        }
    }
    
    if(total > limite) {
        alert('El total (' + total + ') excede el límite permitido (' + limite + ')');
        return false;
    }
    
    return true;
}
```

### Validación Condicional

```javascript
function validarCondicional(slID, slMODE, slROW, slROWS) {
    // Solo validar en inserción y actualización
    if(slMODE === 'I' || slMODE === 'U') {
        var tieneElementosEspeciales = false;
        
        for( var n=1; n<slROWS.length; n++ ){
            if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
                var tipo = slROWS[n].cells[4].innerHTML;
                if(tipo === 'ESPECIAL') {
                    tieneElementosEspeciales = true;
                    break;
                }
            }
        }
        
        if(tieneElementosEspeciales) {
            return confirm('La lista contiene elementos especiales. ¿Desea continuar?');
        }
    }
    
    return true;
}
```

## Valores de Retorno

- **`true`**: La validación es exitosa, permite continuar con la operación
- **`false`**: La validación falla, cancela la operación  
- **`string`**: Mensaje de error que se mostrará al usuario
  - Si contiene texto entre comillas dobles, se mostrará en **negrita**
  - Ejemplo: `'El "precio" debe ser mayor que cero'` → El **precio** debe ser mayor que cero

## Ejemplos de Mensajes de Error

```javascript
// Mensaje simple
return 'Error de validación';

// Mensaje con texto en negrita
return 'El campo "cantidad" es obligatorio';

// Mensaje con múltiples términos en negrita  
return 'Los campos "precio" y "cantidad" son obligatorios';
```

 actualiza automáticamente los campos (como `ePE()`)
- El parámetro `slCol` es una matriz hash que mapea nombres de campo a posiciones
- El parámetro `slROW` es `0` para operaciones de inserción
- Use el patrón de iteración recomendado para evitar procesar filas inválidas
- Los mensajes de error con texto entre comillas dobles muestran ese texto en negrita
- Compatible con formularios FormOnLine en sublistas

## Diferencias con JSCheck

- **Ámbito**: `slJSCheck` es específico para sublistas, `JSCheck` para formularios principales
- **Variables globalizadas**: `slJSCheck` proporciona acceso directo con prefijo `# slJSCheck

## Sintaxis

```
{slJSCheck} Mode ...
```

## Descripción

La función `slJSCheck` se comporta de manera similar a la etiqueta `[JSCheck]` pero está específicamente diseñada para aplicarse al formulario incrustado de las sublistas tipo "FormOnLine". Permite ejecutar validaciones JavaScript personalizadas antes de realizar operaciones en las sublistas.

### Globalización de Variables

Al entrar en esta etiqueta, todos los campos se globalizan automáticamente como variables JavaScript con el nombre del campo precedido de "$". Si estas variables se modifican, su valor actuará como si se usara la función `ePE()`.

### Formato de Mensajes de Error

Si el texto de error tiene una única zona entre comillas dobles, este texto se mostrará en **negrita**.

## Parámetros de la Función de Usuario

La función de usuario definida en `slJSCheck` recibe automáticamente los siguientes parámetros:

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `slID` | string | ID único de la sublista |
| `slMODE` | string | Modo de operación:<br>• `I` = Insert (Insertar)<br>• `U` = Update (Actualizar)<br>• `D` = Delete (Eliminar) |
| `slROW` | number | Número de fila implicada en la operación<br>• `0` si es una inserción (alta) |
| `slROWS` | object | Objeto que contiene todas las filas de la tabla de la sublista |
| `slCol` | object | Matriz hash con el índice del nombre del campo (y alias si lo tiene) que devuelve la posición en el listado |

## Iteración sobre las Filas

Para procesar las filas válidas de la sublista, utilice el siguiente patrón:

```javascript
for( var n=1; n<slROWS.length; n++ ){
    if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
        // Procesar fila válida
        // slROWS[n] contiene los datos de la fila
    }
}
```

### Condiciones de Filtrado

- **`slROWS[n].LIBRE==undefined`**: Excluye filas marcadas como libres/vacías
- **`slROWS[n].id!='PieLista'`**: Excluye la fila de pie de lista (totales/resumen)

## Uso de Variables Globalizadas

### Acceso a Campos

```javascript
// Los campos se acceden con $ seguido del nombre del campo
var precio = $precio;
var cantidad = $cantidad;
var total = $total;

// Modificar valores (equivale a usar ePE())
$total = $precio * $cantidad;
```

### Uso del Parámetro slCol

```javascript
// slCol permite obtener la posición de un campo en el listado
var posicionPrecio = slCol['precio'];
var posicionCantidad = slCol['cantidad'];

// Acceder a datos usando la posición
var precioFila = slROWS[slROW].cells[posicionPrecio].innerHTML;
```

## Ejemplo de Implementación

### Definición Básica

```ini
[SubList]
{slJSCheck} I validarSubLista
```

### Función de Validación

```javascript
function validarSubLista(slID, slMODE, slROW, slROWS, slCol) {
    // Acceso directo a variables globalizadas
    if(slMODE === 'I' || slMODE === 'U') {
        // Validar precio
        if($precio <= 0) {
            return 'El "precio" debe ser mayor que cero';
        }
        
        // Calcular total automáticamente
        $total = $precio * $cantidad;
        
        // Validar cantidad mínima
        if($cantidad < 1) {
            return 'La cantidad mínima es 1';
        }
    }
    
    // Validación específica según el modo
    switch(slMODE) {
        case 'I':
            return validarInsercion(slID, slROW, slROWS, slCol);
        case 'U':
            return validarActualizacion(slID, slROW, slROWS, slCol);
        case 'D':
            return validarEliminacion(slID, slROW, slROWS, slCol);
        default:
            return true;
    }
}

function validarInsercion(slID, slROW, slROWS, slCol) {
    // Usar slCol para obtener posiciones
    var posTotal = slCol['total'];
    var cantidadTotal = 0;
    
    for( var n=1; n<slROWS.length; n++ ){
        if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
            cantidadTotal += parseFloat(slROWS[n].cells[posTotal].innerHTML) || 0;
        }
    }
    
    if(cantidadTotal > 1000) {
        return 'La "cantidad total" no puede exceder 1000 unidades';
    }
    
    return true;
}
```

## Casos de Uso Comunes

### Validación con Variables Globalizadas

```javascript
function validarProducto(slID, slMODE, slROW, slROWS, slCol) {
    if(slMODE === 'I' || slMODE === 'U') {
        // Validación directa con variables globalizadas
        if(!$codigo || $codigo.trim() === '') {
            return 'El "código" es obligatorio';
        }
        
        if($precio <= 0) {
            return 'El "precio" debe ser positivo';
        }
        
        // Cálculo automático
        $subtotal = $precio * $cantidad;
        $total = $subtotal * (1 + $impuesto/100);
        
        // Validación de límites
        if($total > 10000) {
            return 'El "total" no puede exceder 10,000';
        }
    }
    return true;
}
```

### Validación de Duplicados con slCol

```javascript
function validarDuplicados(slID, slMODE, slROW, slROWS, slCol) {
    if(slMODE === 'I') {
        var posCodigo = slCol['codigo'];
        var codigoNuevo = $codigo;
        
        for( var n=1; n<slROWS.length; n++ ){
            if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
                var codigoExistente = slROWS[n].cells[posCodigo].innerHTML;
                if(codigoExistente === codigoNuevo) {
                    return 'El código "' + codigoNuevo + '" ya existe';
                }
            }
        }
    }
    return true;
}
```

### Validación Condicional

```javascript
function validarCondicional(slID, slMODE, slROW, slROWS, slCol) {
    // Validación condicional basada en otro campo
    if($tipo === 'ESPECIAL') {
        if(!$observaciones || $observaciones.trim() === '') {
            return 'Las "observaciones" son obligatorias para tipo ESPECIAL';
        }
        
        if($precio < 100) {
            return 'El "precio mínimo" para tipo ESPECIAL es 100';
        }
    }
    
    // Auto-cálculo condicional
    if($aplicar_descuento) {
        $precio_final = $precio * (1 - $descuento/100);
    } else {
        $precio_final = $precio;
    }
    
    return true;
}
```

## Validaciones Avanzadas

### Cálculos Dinámicos

```javascript
function validarCalculos(slID, slMODE, slROW, slROWS) {
    var total = 0;
    var limite = 5000;
    
    for( var n=1; n<slROWS.length; n++ ){
        if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
            var cantidad = parseFloat(slROWS[n].cells[2].innerHTML) || 0;
            var precio = parseFloat(slROWS[n].cells[3].innerHTML) || 0;
            total += cantidad * precio;
        }
    }
    
    if(total > limite) {
        alert('El total (' + total + ') excede el límite permitido (' + limite + ')');
        return false;
    }
    
    return true;
}
```

### Validación Condicional

```javascript
function validarCondicional(slID, slMODE, slROW, slROWS) {
    // Solo validar en inserción y actualización
    if(slMODE === 'I' || slMODE === 'U') {
        var tieneElementosEspeciales = false;
        
        for( var n=1; n<slROWS.length; n++ ){
            if( slROWS[n].LIBRE==undefined && slROWS[n].id!='PieLista' ){
                var tipo = slROWS[n].cells[4].innerHTML;
                if(tipo === 'ESPECIAL') {
                    tieneElementosEspeciales = true;
                    break;
                }
            }
        }
        
        if(tieneElementosEspeciales) {
            return confirm('La lista contiene elementos especiales. ¿Desea continuar?');
        }
    }
    
    return true;
}
```

## Valores de Retorno

- **`true`**: La validación es exitosa, permite continuar con la operación
- **`false`**: La validación falla, cancela la operación  
- **`string`**: Mensaje de error que se mostrará al usuario
  - Si contiene texto entre comillas dobles, se mostrará en **negrita**
  - Ejemplo: `'El "precio" debe ser mayor que cero'` → El **precio** debe ser mayor que cero

## Ejemplos de Mensajes de Error

```javascript
// Mensaje simple
return 'Error de validación';

// Mensaje con texto en negrita
return 'El campo "cantidad" es obligatorio';

// Mensaje con múltiples términos en negrita  
return 'Los campos "precio" y "cantidad" son obligatorios';
```


- **Parámetros adicionales**: `slJSCheck` recibe `slCol` para mapeo de campos
- **Mensajes formateados**: Soporte específico para texto en negrita
- **Contexto**: Acceso directo al objeto de filas de la sublista
- **Aplicación**: Solo funciona con sublistas tipo FormOnLine