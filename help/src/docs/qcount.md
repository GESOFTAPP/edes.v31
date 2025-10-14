# qCount

## Descripción
Devuelve el número de registros encontrados (Count) en una tabla que cumplen una condición específica.

## Sintaxis
```php
qCount($Tabla, $Condicion [, $Cursor])
```

## Parámetros
- **$Tabla**: Nombre de la tabla sobre la que realizar el conteo
- **$Condicion**: Condición SQL que deben cumplir los registros
- **$Cursor**: (Opcional) Cursor específico sobre el que ejecutar la operación. Si se omite, se usa el cursor actual

## Funcionalidad
Ejecuta una consulta COUNT sobre la tabla especificada aplicando la condición indicada. Útil para obtener estadísticas y validar la existencia de registros antes de realizar operaciones.

## Ejemplos

### Ejemplo 1: Contar empleados activos
```php
$activos = qCount("empleados", "estado = 'activo'");
echo "Empleados activos: " . $activos;
```

### Ejemplo 2: Validar existencia de registros
```php
$existe = qCount("usuarios", "email = 'usuario@example.com'");
if ($existe > 0) {
    echo "El usuario ya existe";
}
```

### Ejemplo 3: Estadísticas por departamento
```php
$ventas = qCount("empleados", "departamento = 'ventas'");
$marketing = qCount("empleados", "departamento = 'marketing'");
echo "Ventas: $ventas, Marketing: $marketing";
```