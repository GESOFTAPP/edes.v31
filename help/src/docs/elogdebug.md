# eLogDebug

## Descripción
Es igual que la función eTron pero el rastro que deja se ve en la opción del editor "Ver / SQL".

## Sintaxis
```php
eLogDebug($text)
```

## Parámetros
- `$text`: Texto a registrar en el log de depuración

## Funcionalidad
Esta función registra información de depuración en el log de SQL del editor. Es útil para hacer seguimiento de la ejecución del código sin interrumpir el flujo normal del programa, permitiendo revisar los registros posteriormente en el editor.

## Ejemplos

### Ejemplo 1: Registrar información básica
```php
eLogDebug("Iniciando procesamiento de datos");
$datos = obtenerDatos();
eLogDebug("Datos obtenidos: " . count($datos) . " registros");
```

### Ejemplo 2: Depurar flujo de función
```php
function procesarPedido($pedido) {
    eLogDebug("Iniciando procesamiento del pedido ID: " . $pedido['id']);
    
    if (validarPedido($pedido)) {
        eLogDebug("Pedido validado correctamente");
        return true;
    } else {
        eLogDebug("Error en validación del pedido");
        return false;
    }
}
```

### Ejemplo 3: Registrar estados de variables
```php
$usuario = array("id" => 123, "nombre" => "Juan");
eLogDebug("Usuario inicial: " . print_r($usuario, true));

$usuario['activo'] = true;
eLogDebug("Usuario actualizado: " . print_r($usuario, true));

$resultado = procesarUsuario($usuario);
eLogDebug("Resultado del procesamiento: " . ($resultado ? "éxito" : "fallo"));
```