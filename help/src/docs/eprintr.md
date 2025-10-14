# ePrintR

## Descripción
Limpia la salida y hace un print_r() de cada variable pasada a la función y termina la ejecución del script.

## Sintaxis
```php
ePrintR($Variable1 [, $Variable2 [, ...]])
```

## Parámetros
- `$Variable1` - Primera variable a mostrar (requerido)
- `$Variable2` - Segunda variable a mostrar (opcional)
- `...` - Variables adicionales (opcional)

## Funcionalidad
Esta función de depuración realiza las siguientes acciones:
1. Limpia el buffer de salida
2. Ejecuta `print_r()` para cada variable pasada como parámetro
3. Termina la ejecución del script

## Ejemplos

### Ejemplo 1: Mostrar una variable
```php
$datos = array('nombre' => 'Juan', 'edad' => 30);
ePrintR($datos);
```

### Ejemplo 2: Mostrar múltiples variables
```php
$usuario = 'admin';
$permisos = array('read', 'write', 'execute');
$activo = true;
ePrintR($usuario, $permisos, $activo);
```

### Ejemplo 3: Depuración rápida de objeto
```php
$objeto = new stdClass();
$objeto->propiedad1 = 'valor1';
$objeto->propiedad2 = 'valor2';
ePrintR($objeto);
```