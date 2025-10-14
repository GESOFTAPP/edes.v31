# qGetSelect

## Descripción
Devuelve la lista de campos que se van a ejecutar en el "select". Esta función solo funciona en listados.

## Sintaxis
```php
qGetSelect()
```

## Parámetros
Esta función no requiere parámetros.

## Funcionalidad
La función retorna los campos que están configurados para ser seleccionados en una consulta SQL dentro del contexto de un listado. Es útil para obtener información sobre qué campos serán incluidos en la consulta antes de ejecutarla.

## Ejemplos

### Ejemplo 1: Obtener campos del listado actual
```php
$campos = qGetSelect();
echo "Campos a seleccionar: " . implode(', ', $campos);
```

### Ejemplo 2: Validar campos antes de ejecutar consulta
```php
$camposSelect = qGetSelect();
if (in_array('email', $camposSelect)) {
    echo "El campo email será incluido en la consulta";
}
```

### Ejemplo 3: Construir encabezados dinámicos
```php
$campos = qGetSelect();
echo "<tr>";
foreach ($campos as $campo) {
    echo "<th>" . ucfirst($campo) . "</th>";
}
echo "</tr>";
```