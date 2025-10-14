# xlsCreate

## Descripción
Crea un fichero Excel, devuelve un puntero al fichero a crear ($handle). Hay que cargar la librería "xls" mediante la función eInclude("xls").

## Sintaxis
```php
xlsCreate($file)
```

## Parámetros
- `$file`: Nombre y ruta del archivo Excel a crear

## Funcionalidad
Esta función inicializa un nuevo archivo Excel y devuelve un handle que se utilizará para realizar operaciones sobre el archivo. Es necesario cargar la librería "xls" antes de usar esta función.

## Ejemplos

### Ejemplo 1: Crear archivo Excel básico
```php
eInclude("xls");
$pnt = xlsCreate("../_tmp/prueba");
xlsNumber($pnt, 0, 0, 123.45);
xlsText($pnt, 1, 0, "TEXTO");
xlsText($pnt, 2, 0, "18-05-2001");
xlsClose($pnt);
```

### Ejemplo 2: Crear reporte de ventas
```php
eInclude("xls");
$handle = xlsCreate("reportes/ventas_2024.xls");
xlsText($handle, 0, 0, "Fecha");
xlsText($handle, 0, 1, "Producto");
xlsText($handle, 0, 2, "Importe");
xlsText($handle, 1, 0, "01-01-2024");
xlsText($handle, 1, 1, "Producto A");
xlsNumber($handle, 1, 2, 150.75);
xlsClose($handle);
```

### Ejemplo 3: Crear archivo temporal
```php
eInclude("xls");
$archivo = xlsCreate("temp/datos_temp.xls");
xlsText($archivo, 0, 0, "Procesando...");
xlsNumber($archivo, 1, 0, time());
xlsClose($archivo);
```