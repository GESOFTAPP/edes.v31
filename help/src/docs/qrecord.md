# qRecord

## Descripción
Por defecto devuelve una matriz asociativa con el primer registro encontrado. Si se especifica "arrayNumeric" como true, la matriz será numérica. Si se especifica "allRow" como true, devolverá una matriz de registros. Utiliza un puntero propio.

## Sintaxis
```php
qRecord($sql [, $arrayNumeric=false [, $allRow=false]])
```

## Parámetros
- **$sql** (string): Sentencia SQL SELECT a ejecutar
- **$arrayNumeric** (boolean, opcional): Si es true, devuelve matriz numérica en lugar de asociativa
- **$allRow** (boolean, opcional): Si es true, devuelve todos los registros en lugar de solo el primero

## Funcionalidad
La función ejecuta una consulta SQL y retorna los resultados en diferentes formatos según los parámetros especificados. Es útil para obtener datos de forma rápida y flexible, especialmente cuando solo se necesita un registro o cuando se quiere controlar el formato de salida.

## Ejemplos

### Ejemplo 1: Obtener registro como matriz asociativa
```php
$fields = qRecord("SELECT user_surname, user_name FROM gs_user WHERE cd_gs_user='{$_User}'");
$apellidos = $fields["user_surname"];
$nombre = $fields["user_name"];
```

### Ejemplo 2: Obtener registro como matriz numérica
```php
list($apellidos, $nombre) = qRecord("SELECT user_surname, user_name FROM gs_user WHERE cd_gs_user='{$_User}'", true);
echo "Nombre: $nombre, Apellidos: $apellidos";
```

### Ejemplo 3: Obtener todos los registros
```php
$usuarios = qRecord("SELECT id, nombre, email FROM usuarios WHERE activo=1", false, true);
foreach ($usuarios as $usuario) {
    echo "Usuario: " . $usuario['nombre'] . " - Email: " . $usuario['email'] . "\n";
}
```