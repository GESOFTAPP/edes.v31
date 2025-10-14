# qGetWhere

## Descripción
Devuelve la condición "WHERE" de la sentencia SQL que se va a ejecutar. Esta función solo funciona en listados.

## Sintaxis
```php
qGetWhere([$Alias="", [$Transforma=true/Array, [$Dim]]])
```

## Parámetros
- **$Alias** (string, opcional): Alias principal 'A' cuando se recuperan campos de más de una tabla
- **$Transforma** (boolean/array, opcional): 
  - `true`: Transformar los campos de tipo fecha (solo para MySQL)
  - `Array`: Matriz hash para calcular el WHERE en función de los datos proporcionados
- **$Dim** (array, opcional): Matriz con las condiciones por campo

## Funcionalidad
La función construye dinámicamente las condiciones WHERE basándose en los parámetros proporcionados. Puede generar condiciones complejas con alias de tabla y transformaciones específicas para diferentes tipos de datos.

## Ejemplos

### Ejemplo 1: WHERE básico con alias
```php
$where = qGetWhere("A");
echo "WHERE generado: " . $where;
```

### Ejemplo 2: WHERE con condiciones personalizadas
```php
$condiciones = array("nombre" => "Juan*", "edad" => ">18<65");
$where = qGetWhere("A", $condiciones);
// Resultado: A.nombre like 'Juan%' and A.edad>'18' and A.edad<'65'
```

### Ejemplo 3: WHERE con transformación de fechas
```php
$where = qGetWhere("P", true);
// Transformará automáticamente los campos de fecha para MySQL
echo "WHERE con fechas transformadas: " . $where;
```