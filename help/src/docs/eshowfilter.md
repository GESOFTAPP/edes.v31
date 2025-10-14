# eShowFilter

## Descripción
Define las condiciones del usuario en un listado, mostrando los filtros aplicados de manera organizada.

## Sintaxis
```php
eShowFilter($ArrayCondiciones)
```

## Parámetros
- **$ArrayCondiciones**: Array que contiene el título y las condiciones a mostrar
  - Primer elemento: Título de las condiciones
  - Elementos siguientes: Arrays con ['Label', 'Condición']

## Funcionalidad
Genera una visualización estructurada de las condiciones de filtrado aplicadas a un listado. Permite al usuario ver qué filtros están activos y sus valores correspondientes.

## Ejemplos

### Ejemplo 1: Filtros básicos
```php
eShowFilter(array(
    'FILTROS APLICADOS',
    array('Estado', 'Activo'),
    array('Fecha', 'Desde 01/01/2024')
));
```

### Ejemplo 2: Filtros de búsqueda
```php
eShowFilter(array(
    'CONDICIONES DE BÚSQUEDA',
    array('Nombre', 'Juan Pérez'),
    array('Departamento', 'Ventas'),
    array('Salario', 'Mayor a 2000€')
));
```

### Ejemplo 3: Filtros dinámicos
```php
$condiciones = array('FILTROS ACTIVOS');
if (!empty($_POST['nombre'])) {
    $condiciones[] = array('Nombre', $_POST['nombre']);
}
if (!empty($_POST['ciudad'])) {
    $condiciones[] = array('Ciudad', $_POST['ciudad']);
}
eShowFilter($condiciones);
```