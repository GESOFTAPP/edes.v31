# qRecordMD5

## Descripción
Calcula el hash MD5 de un registro específico de una tabla, excluyendo los campos especificados del cálculo.

## Sintaxis
```php
qRecordMD5($NomTabla, $CondicionWhere, $ListaCamposNoMD5)
```

## Parámetros
- **$NomTabla** (string): Nombre de la tabla de la cual calcular el MD5
- **$CondicionWhere** (string): Condición WHERE para identificar el registro específico
- **$ListaCamposNoMD5** (string/array): Lista de campos que no deben incluirse en el cálculo del MD5

## Funcionalidad
La función genera un hash MD5 único para un registro específico basándose en los valores de sus campos, excluyendo aquellos campos especificados en la lista de exclusión. Es útil para detectar cambios en registros o para crear firmas únicas de datos.

## Ejemplos

### Ejemplo 1: MD5 básico excluyendo campos de control
```php
$hash = qRecordMD5('usuarios', 'id_usuario=123', 'fecha_modificacion,usuario_modificacion');
echo "Hash del usuario: " . $hash;
```

### Ejemplo 2: Comparar registros para detectar cambios
```php
$hashOriginal = qRecordMD5('productos', 'codigo="PROD001"', 'fecha_actualizacion');
// ... realizar modificaciones ...
$hashActual = qRecordMD5('productos', 'codigo="PROD001"', 'fecha_actualizacion');

if ($hashOriginal !== $hashActual) {
    echo "El producto ha sido modificado";
}
```

### Ejemplo 3: MD5 con múltiples campos excluidos
```php
$camposExcluidos = array('created_at', 'updated_at', 'version', 'last_access');
$hash = qRecordMD5('documentos', 'id_documento=456', $camposExcluidos);
echo "Firma del documento: " . $hash;
```