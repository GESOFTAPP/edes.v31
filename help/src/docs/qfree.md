# qFree

## Descripción
Libera la memoria utilizada por el cursor especificado.

## Sintaxis
```php
qFree([$Cursor])
```

## Parámetros
- **$Cursor**: (Opcional) Cursor específico que se desea liberar. Si se omite, se libera el cursor actual.

## Funcionalidad
Libera los recursos de memoria ocupados por un cursor específico. Es una buena práctica liberar cursores cuando ya no se necesitan para optimizar el uso de memoria, especialmente en aplicaciones que manejan grandes volúmenes de datos.

## Ejemplos

### Ejemplo 1: Liberar cursor actual
```php
$resultado = qOpen("SELECT * FROM usuarios");
// ... procesamiento ...
qFree(); // Libera el cursor actual
```

### Ejemplo 2: Liberar cursor específico
```php
$cursor1 = qOpen("SELECT * FROM empleados");
$cursor2 = qOpen("SELECT * FROM departamentos");
// ... procesamiento ...
qFree($cursor1); // Libera cursor específico
qFree($cursor2); // Libera otro cursor
```

### Ejemplo 3: Uso en bucles con múltiples consultas
```php
foreach ($departamentos as $dept) {
    $cursor = qOpen("SELECT * FROM empleados WHERE dept = '$dept'");
    // ... procesamiento ...
    qFree($cursor); // Libera memoria en cada iteración
}
```