# eBacktrace

## Descripción
Limpia la salida y muestra el rastro de las llamadas a funciones y archivos, con posibilidad de hacer un print_r() de cada variable pasada a la función y termina la ejecución.

## Sintaxis
```php
eBacktrace([$Variable1 [, $Variable2 [, ...]]])
```

## Parámetros
- `$Variable1`: Variable opcional para mostrar con print_r()
- `$Variable2`: Variable opcional adicional para mostrar con print_r()
- `...`: Variables adicionales opcionales

## Funcionalidad
Esta función es útil para depuración, ya que proporciona información detallada sobre el flujo de ejecución del programa. Muestra el rastro de llamadas (backtrace) y opcionalmente el contenido de variables especificadas. Termina la ejecución del script después de mostrar la información.

## Ejemplos

### Ejemplo 1: Backtrace básico sin variables
```php
function miFuncion() {
    eBacktrace();
}

function otraFuncion() {
    miFuncion();
}

otraFuncion();
```

### Ejemplo 2: Backtrace con una variable
```php
function procesarDatos($datos) {
    $resultado = array("procesado" => true, "total" => count($datos));
    eBacktrace($resultado);
}

$misDatos = array("item1", "item2", "item3");
procesarDatos($misDatos);
```

### Ejemplo 3: Backtrace con múltiples variables
```php
function depurarProblema($usuario, $configuracion, $error) {
    eBacktrace($usuario, $configuracion, $error);
}

$usuario = array("id" => 123, "nombre" => "Juan");
$config = array("debug" => true, "nivel" => 2);
$error = "Error en procesamiento";
depurarProblema($usuario, $config, $error);
```