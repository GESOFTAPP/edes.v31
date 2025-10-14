# eTronSql

## Descripción
El rastro del tron lo deja en el log de SQL, es un sinónimo de la función eLogDebug().

## Sintaxis
```php
eTronSql($txt)
```

## Parámetros
- `$txt`: Texto a registrar en el log de SQL

## Funcionalidad
Esta función es idéntica a eLogDebug() y registra información de depuración en el log de SQL. Es útil para hacer seguimiento de la ejecución del código, especialmente cuando se trabaja con consultas SQL o procesos relacionados con base de datos.

## Ejemplos

### Ejemplo 1: Registrar consultas SQL
```php
$sql = "SELECT * FROM usuarios WHERE activo = 1";
eTronSql("Ejecutando consulta: " . $sql);
$resultado = ejecutarConsulta($sql);
eTronSql("Consulta ejecutada, registros obtenidos: " . count($resultado));
```

### Ejemplo 2: Depurar transacciones
```php
function actualizar