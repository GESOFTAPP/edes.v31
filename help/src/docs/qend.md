# qEnd

## Descripción
Cierra transacciones si están activas y cierra la conexión con la base de datos.

## Sintaxis
```php
qEnd()
```

## Parámetros
Esta función no requiere parámetros.

## Funcionalidad
Realiza una limpieza completa de las conexiones de base de datos, cerrando cualquier transacción activa y liberando los recursos de conexión. Es importante llamar a esta función al finalizar el procesamiento para evitar conexiones colgantes.

## Ejemplos

### Ejemplo 1: Cierre al final del script
```php
// Procesamiento de datos
$resultado = qOpen("SELECT * FROM usuarios");
// ... procesamiento ...
qEnd(); // Cierre al final
```

### Ejemplo 2: Cierre en caso de error
```php
try {
    $resultado = qOpen("SELECT * FROM tabla");
    // ... procesamiento ...
} catch (Exception $e) {
    qEnd(); // Cerrar conexión en caso de error
    throw $e;
}
qEnd(); // Cierre normal
```

### Ejemplo 3: Uso con transacciones
```php
qBegin(); // Iniciar transacción
try {
    qUpdate("tabla1", $datos1);
    qUpdate("tabla2", $datos2);
    qCommit(); // Confirmar transacción
} catch (Exception $e) {
    qRollback(); // Deshacer transacción
}
qEnd(); // Cerrar conexión
```