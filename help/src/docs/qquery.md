# qQuery

## Descripción
Ejecuta una sentencia SQL y retorna el número de registros afectados. En el caso de Informix, ese número es aproximado. Si se ha insertado un nuevo registro, se puede obtener su serial mediante la matriz asociativa $_IdRegistro[NmTabla].

## Sintaxis
```php
qQuery($Sql [, $Cursor [, $Continuar=false]])
```

## Parámetros
- **$Sql** (string): Sentencia SQL a ejecutar
- **$Cursor** (resource, opcional): Cursor sobre el que ejecutar la consulta. Si se omite, será sobre el cursor actual
- **$Continuar** (boolean, opcional): Indica si en caso de error SQL/DB se detiene el script (false) o se permite continuar (true). Si es true, la función devolverá "-1" en caso de error

## Funcionalidad
La función ejecuta cualquier tipo de sentencia SQL y maneja el control de errores. Para Oracle, permite configurar el tipo de secuencia mediante la variable $_DBSEQUENCE:
- Por defecto usa la secuencia "sq[NmTabla]"
- Si $_DBSEQUENCE="NO", la secuencia será generada por el trigger de la tabla
- Si $_DBSEQUENCE contiene un valor, usará esa secuencia específica

## Ejemplos

### Ejemplo 1: INSERT básico
```php
$affected = qQuery("INSERT INTO usuarios (nombre, email) VALUES ('Juan', 'juan@email.com')");
echo "Registros insertados: " . $affected;
```

### Ejemplo 2: UPDATE con control de errores
```php
$result = qQuery("UPDATE productos SET precio = precio * 1.1 WHERE categoria = 'electrónicos'", null, true);
if ($result == -1) {
    echo "Error en la actualización";
} else {
    echo "Productos actualizados: " . $result;
}
```

### Ejemplo 3: DELETE con cursor específico
```php
$cursor = /* cursor específico */;
$deleted = qQuery("DELETE FROM logs WHERE fecha < '2023-01-01'", $cursor);
echo "Registros eliminados: " . $deleted;
```