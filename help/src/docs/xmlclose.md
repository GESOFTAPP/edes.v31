# xmlClose

## Descripción
Cierra el archivo XML y libera los recursos asociados al handle.

## Sintaxis
```php
xmlClose($handle)
```

## Parámetros
- `$handle`: Puntero al archivo XML creado con xmlCreate()

## Funcionalidad
Esta función finaliza el trabajo con el archivo XML, guardando todos los cambios realizados y liberando los recursos del sistema. Es esencial llamar a esta función al terminar de trabajar con el archivo.

## Ejemplos

### Ejemplo 1: Cerrar archivo después de insertar datos
```php
eInclude("xml");
$pnt = xmlCreate("datos.xml");
xmlText($pnt, 0, 0, "Información");
xmlNumber($pnt, 1, 0, 42);
xmlClose($pnt);
```

### Ejemplo 2: Uso en función con manejo de errores
```php
function crearReporteXML($archivo, $datos) {
    eInclude("xml");
    $handle = xmlCreate($archivo);
    
    if ($handle) {
        foreach ($datos as $fila => $valor) {
            xmlText($handle, $fila, 0, $valor);
        }
        xmlClose($handle);
        return true;
    }
    return false;
}
```

### Ejemplo 3: Cerrar múltiples archivos
```php
eInclude("xml");
$archivo1 = xmlCreate("reporte1.xml");
$archivo2 = xmlCreate("reporte2.xml");

xmlText($archivo1, 0, 0, "Reporte 1");
xmlText($archivo2, 0, 0, "Reporte 2");

xmlClose($archivo1);
xmlClose($archivo2);
```