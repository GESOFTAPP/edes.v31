# eUnSet

## Descripción
Elimina una variable, la ventaja con la función `unset()` es que la elimina también de las matrices públicas `$_POST`, `$_GET`, `$_SERVER` y `$_REQUEST`.

## Sintaxis
```php
eUnSet($NomVar)
```

## Parámetros
- **$NomVar**: 
  1. Nombre de la variable a eliminar
  2. Una única cadena con nombres de variables separadas por coma

## Funcionalidad
Elimina completamente una variable del entorno PHP, incluyendo su eliminación de las matrices superglobales `$_POST`, `$_GET`, `$_SERVER` y `$_REQUEST`. Útil cuando queremos visualizar un campo en modificación pero no queremos que el usuario lo pueda grabar porque solo lo pueden hacer operaciones del sistema.

## Ejemplos
```php
// Ejemplo 1: Eliminar una variable
eUnSet('num_devoluciones');

// Ejemplo 2: Eliminar múltiples variables
eUnSet('variable1,variable2,variable3');

// Ejemplo 3: Caso práctico - campo de solo lectura
// Mostrar campo en formulario pero evitar que se procese
eUnSet('campo_sistema');
```