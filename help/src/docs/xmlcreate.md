# xmlCreate

## Descripción
Crea un fichero Excel, devuelve un puntero al fichero a crear ($handle). Hay que cargar la librería "xml" mediante la función eInclude("xml").

## Sintaxis
```php
xmlCreate($file)
```

## Parámetros
- `$file`: Nombre y ruta del archivo XML a crear

## Funcionalidad
Esta función inicializa un nuevo archivo XML compatible con Excel y devuelve un handle que se utilizará para realizar operaciones sobre el archivo. Es necesario cargar la librería "xml" antes de usar esta función.

## Ejemplos

### Ejemplo 1: Crear archivo XML básico
```php
eInclude("xml");
$pnt = xmlCreate("../_tmp/prueba");
xmlNumber($pnt, 0, 0, 123.45);
xmlText($pnt, 1, 0, "TEXTO");
xmlDate($pnt, 2, 0, "18-05-2001");
xmlClose($pnt);
```

### Ejemplo 2: Crear reporte de ventas
```php
eInclude("xml");
$handle = xmlCreate("reportes/ventas_2024.xml");
xmlText($handle, 0, 0, "Fecha");
xmlText($handle, 0, 1, "Producto");
xmlText($handle, 0, 2, "Importe");
xmlDate($handle, 1, 0, "01-01-2024");
xmlText($handle, 1, 1, "Producto A");
xmlNumber($handle, 1, 2, 150.75);
xmlClose($handle);
```

### Ejemplo 3: Crear archivo temporal
```php
eInclude("xml");
$archivo = xmlCreate("temp/datos_temp.xml");
xmlText($archivo, 0, 0, "Procesando...");
xmlDate($archivo, 1, 0, date("d-m-Y"));
xmlClose($archivo);
```