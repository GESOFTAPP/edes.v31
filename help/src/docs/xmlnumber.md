# xmlNumber

## Descripción
Inserta un número en la celda indicada. La primera celda es la 0,0.

## Sintaxis
```php
xmlNumber($handle, $row, $col, $value)
```

## Parámetros
- `$handle`: Puntero al archivo XML creado con xmlCreate()
- `$row`: Número de fila (comenzando desde 0)
- `$col`: Número de columna (comenzando desde 0)
- `$value`: Número a insertar en la celda

## Funcionalidad
Esta función permite insertar valores numéricos en una celda específica de un archivo XML compatible con Excel. Los números se almacenan en formato numérico, permitiendo cálculos y operaciones matemáticas.

## Ejemplos

### Ejemplo 1: Insertar números decimales
```php
eInclude("xml");
$pnt = xmlCreate("precios.xml");
xmlNumber($pnt, 0, 0, 99.99);
xmlNumber($pnt, 1, 0, 149.50);
xmlNumber($pnt, 2, 0, 75.25);
xmlClose($pnt);
```

### Ejemplo 2: Crear tabla de inventario
```php
eInclude("xml");
$pnt = xmlCreate("inventario.xml");
xmlText($pnt, 0, 0, "Producto");
xmlText($pnt, 0, 1, "Stock");
xmlText($pnt, 0, 2, "Precio");
xmlText($pnt, 1, 0, "Artículo A");
xmlNumber($pnt, 1, 1, 50);
xmlNumber($pnt, 1, 2, 12.99);
xmlClose($pnt);
```

### Ejemplo 3: Insertar cantidades enteras
```php
eInclude("xml");
$pnt = xmlCreate("cantidades.xml");
xmlText($pnt, 0, 0, "Unidades");
xmlNumber($pnt, 1, 0, 100);
xmlNumber($pnt, 2, 0, 250);
xmlNumber($pnt, 3, 0, 75);
xmlClose($pnt);
```