# qGetArray

## Descripción
Devuelve una matriz bidimensional con todos los campos de los registros devueltos por la sentencia SQL, siendo el índice de la matriz el primer campo de la sentencia SQL.

## Sintaxis
```php
qGetArray($Sql)
```

## Parámetros
- **$Sql** (string): Sentencia SQL SELECT a ejecutar

## Funcionalidad
La función ejecuta la consulta SQL proporcionada y organiza los resultados en una matriz bidimensional donde:
- El primer nivel de índices corresponde a los valores del primer campo de la consulta
- El segundo nivel contiene arrays numéricos con todos los campos del registro

## Ejemplos

### Ejemplo 1: Consulta básica de provincias
```php
$Prov = qGetArray('select cd_prov, nm_prov, cd_auto from provincias');
echo $Prov['01'][1]; // Pintará el valor del campo "nm_prov"
echo $Prov['01'][2]; // Pintará el valor del campo "cd_auto"
```

### Ejemplo 2: Consulta de usuarios
```php
$usuarios = qGetArray('select id_usuario, nombre, email from usuarios');
echo $usuarios['100'][1]; // Nombre del usuario con ID 100
echo $usuarios['100'][2]; // Email del usuario con ID 100
```

### Ejemplo 3: Consulta con JOIN
```php
$productos = qGetArray('select p.codigo, p.nombre, c.categoria from productos p JOIN categorias c ON p.id_categoria = c.id');
echo $productos['PROD001'][1]; // Nombre del producto
echo $productos['PROD001'][2]; // Nombre de la categoría
```