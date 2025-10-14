# xlsText

## Descripción
Inserta un texto en la celda indicada. La primera celda es la 0,0.

## Sintaxis
```php
xlsText($handle, $row, $col, $value)
```

## Parámetros
- `$handle`: Puntero al archivo Excel creado con xlsCreate()
- `$row`: Número de fila (comenzando desde 0)
- `$col`: Número de columna (comenzando desde 0)
- `$value`: Texto a insertar en la celda

## Funcionalidad
Esta función permite insertar contenido de texto en una celda específica de un archivo Excel. Se utiliza en conjunto con xlsCreate() para crear el archivo y xlsClose() para cerrarlo.

## Ejemplos

### Ejemplo 1: Insertar texto básico
```php
eInclude("xls");
$pnt = xlsCreate("reporte.xls");
xlsText($pnt, 0, 0, "Nombre");
xlsText($pnt, 0, 1, "Apellido");
xlsClose($pnt);
```

### Ejemplo 2: Crear una tabla con encabezados
```php
eInclude("xls");
$pnt = xlsCreate("empleados.xls");
xlsText($pnt, 0, 0, "ID");
xlsText($pnt, 0, 1, "Nombre");
xlsText($pnt, 0, 2, "Departamento");
xlsText($pnt, 1, 0, "001");
xlsText($pnt, 1, 1, "Juan Pérez");
xlsText($pnt, 1, 2, "Ventas");
xlsClose($pnt);
```

### Ejemplo 3: Insertar fechas como texto
```php
eInclude("xls");
$pnt = xlsCreate("fechas.xls");
xlsText($pnt, 0, 0, "Fecha de inicio");
xlsText($pnt, 1, 0, "01-01-2024");
xlsText($pnt, 2, 0, "15-03-2024");
xlsClose($pnt);
```