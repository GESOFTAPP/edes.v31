# eExecute

## Descripción
Ejecuta una instancia del motor EDes, permitiendo ejecutar archivos .edf con parámetros POST y GET específicos.

## Sintaxis
```php
eExecute($ObjEDes [, $arrayPOST=null [, $arrayGET=null]])
```

## Parámetros
- `$ObjEDes` (string): Nombre del archivo a ejecutar (formato: 'Ll:archivo.edf')
- `$arrayPOST` (array, opcional): Array asociativo con los parámetros POST a enviar
- `$arrayGET` (array, opcional): Array asociativo con los parámetros GET a enviar

## Funcionalidad
Permite ejecutar archivos del motor EDes desde el servidor, pasando parámetros como si fuera una petición HTTP. Útil para generar reportes, PDFs, o ejecutar procesos específicos del motor.

## Ejemplos
```php
// Ejemplo 1: Generar PDF con parámetros
$txt = eExecute('Ll:generapdf.edf', array(
    "campo1" => "valor1", 
    "_EXPORTLIST" => "PDF"
));

// Ejemplo 2: Ejecutar proceso con múltiples parámetros
$resultado = eExecute('Ll:procesardatos.edf', array(
    "usuario" => "admin",
    "accion" => "procesar",
    "fecha" => "2024-01-15"
));

// Ejemplo 3: Ejecutar con parámetros GET y POST
$output = eExecute('Ll:reporte.edf', 
    array("tipo" => "ventas", "mes" => "enero"), // POST
    array("formato" => "html", "idioma" => "es") // GET
);
```