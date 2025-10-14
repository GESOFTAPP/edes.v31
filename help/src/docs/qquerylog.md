# qQueryLog

## Descripción
Ejecuta una sentencia SQL (solo INSERT o UPDATE) grabando en la tabla gs_log para guardar el historial de modificaciones.

## Sintaxis
```php
qQueryLog($Sql, $Tabla, $Where [, $Clave='' [, $User=$_User]])
```

## Parámetros
- **$Sql** (string): Sentencia completa a ejecutar (INSERT o UPDATE)
- **$Tabla** (string): Nombre de la tabla a guardar en gs_log
- **$Where** (string): Condición WHERE del SQL
- **$Clave** (string, opcional): Clave a guardar en gs_log. Para claves primarias compuestas, concatenar los valores. En inserciones con serial, enviar cadena vacía o no enviar
- **$User** (string, opcional): Usuario que ejecuta la operación. Por defecto es el usuario actual

## Funcionalidad
La función ejecuta la sentencia SQL proporcionada y simultáneamente registra la operación en la tabla de auditoría gs_log, permitiendo mantener un historial completo de todas las modificaciones realizadas en la base de datos.

## Ejemplos

### Ejemplo 1: UPDATE con log
```php
qQueryLog(
    "UPDATE persona SET nombre='NOMBRE', apellidos='APELLIDOS' WHERE cd_persona=1",
    'persona',
    'cd_persona=1',
    '1'
);
```

### Ejemplo 2: INSERT con log
```php
qQueryLog(
    "INSERT INTO productos (nombre, precio) VALUES ('Producto A', 100.50)",
    'productos',
    '',
    '', // Clave vacía para INSERT con serial
    'admin'
);
```

### Ejemplo 3: UPDATE con clave compuesta
```php
qQueryLog(
    "UPDATE ventas SET cantidad=5 WHERE cliente_id=10 AND producto_id=25",
    'ventas',
    'cliente_id=10 AND producto_id=25',
    '10_25' // Clave compuesta concatenada
);
```