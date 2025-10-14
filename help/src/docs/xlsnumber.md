# xlsNumber

## Descripción
Inserta un número en la celda indicada. La primera celda es la 0,0.

## Sintaxis
```php
xlsNumber($handle, $row, $col, $value)
```

## Parámetros
- `$handle`: Puntero al archivo Excel creado con xlsCreate()
- `$row`: Número de fila (comenzando desde 0)
- `$col`: Número de columna (comenzando desde 0)
- `$value`: Número a insertar en la celda

## Funcionalidad
Esta función permite insertar valores numéricos en una celda específica de un archivo Excel. Los números se almacenan en formato numérico, lo que permite realizar cálculos y operaciones matemáticas en Excel.

## Ejemplos

### Ejemplo 1: Insertar números decimales
```php
eInclude("xls");
$pnt = xlsCreate("numeros.xls");
xlsNumber($pnt, 0, 0, 123.45);
xlsNumber($pnt, 1, 0, 67.89);
xlsNumber($pnt, 2, 0, 234.56);
xlsClose($pnt);
```

### Ejemplo 2: Crear una tabla de ventas
```php
eInclude("xls");
$pnt = xlsCreate("ventas.xls");
xlsText($pnt, 0, 0, "Producto");
xlsText($pnt, 0, 1, "Cantidad");
xlsText($pnt, 0, 2, "Precio");
xlsText($pnt, 1, 0, "Producto A");
xlsNumber($pnt, 1, 1, 10);
xlsNumber($pnt, 1, 2, 25.50);
xlsClose($pnt);
```

### Ejemplo 3: Insertar números enteros
```php
eInclude("xls");
$pnt = xlsCreate("inventario.xls");
xlsText($pnt, 0, 0, "Stock");
xlsNumber($pnt, 1, 0, 100);
xlsNumber($pnt, 2, 0, 250);
xlsNumber($pnt, 3, 0, 75);
xlsClose($pnt);
```