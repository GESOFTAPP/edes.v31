# qArray

## Descripción
Devuelve una matriz asociativa con los valores de la fila del cursor actual.

## Sintaxis
```php
qArray([$Cursor])
```

## Parámetros
- **$Cursor**: (Opcional) Cursor específico sobre el que ejecutar la operación. Si se omite, se usa el cursor actual.

## Funcionalidad
Obtiene todos los valores de la fila actual del cursor en forma de array asociativo, donde las claves son los nombres de las columnas y los valores son los datos correspondientes.

## Ejemplos

### Ejemplo 1: Obtener datos del cursor actual
```php
$fila = qArray();
echo "Nombre: " . $fila['nombre'];
echo "Email: " . $fila['email'];
```

### Ejemplo 2: Usar cursor específico
```php
$cursor_empleados = qOpen("SELECT * FROM empleados");
$empleado = qArray($cursor_empleados);
echo "Empleado: " . $empleado['nombre'];
```

### Ejemplo 3: Procesar múltiples filas
```php
while (!qEOF()) {
    $registro = qArray();
    echo "ID: " . $registro['id'] . " - Nombre: " . $registro['nombre'];
    qNext();
}
```