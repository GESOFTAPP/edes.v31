# xlsClose

## Descripción
Cierra el archivo Excel y libera los recursos asociados al handle.

## Sintaxis
```php
xlsClose($handle)
```

## Parámetros
- `$handle`: Puntero al archivo Excel creado con xlsCreate()

## Funcionalidad
Esta función finaliza el trabajo con el archivo Excel, guardando todos los cambios realizados y liberando los recursos del sistema. Es esencial llamar a esta función al terminar de trabajar con el archivo.

## Ejemplos

### Ejemplo 1: Cerrar archivo después de insertar datos
```php
eInclude("xls");
$pnt = xlsCreate("datos.xls");
xlsText($pnt, 0, 0, "Información");
xlsNumber($pnt, 1, 0, 42);
xlsClose($pnt);
```

### Ejemplo 2: Uso en función con manejo de errores
```php
function crearReporte($archivo, $datos) {
    eInclude("xls");
    $handle = xlsCreate($archivo);
    
    if ($handle) {
        foreach ($datos as $fila => $valor) {
            xlsText($handle, $fila, 0, $valor);
        }
        xlsClose($handle);
        return true;
    }
    return false;
}
```

### Ejemplo 3: Cerrar múltiples archivos
```php
eInclude("xls");
$archivo1 = xlsCreate("reporte1.xls");
$archivo2 = xlsCreate("reporte2.xls");

xlsText($archivo1, 0, 0, "Reporte 1");
xlsText($archivo2, 0, 0, "Reporte 2");

xlsClose($archivo1);
xlsClose($archivo2);
```