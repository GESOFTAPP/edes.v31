# eFormPrint

## Descripción
Imprime uno o varios formularios/impresos generados con el "Editor de Impresos", con opciones de personalización y descarga.

## Sintaxis
```php
eFormPrint($pkForm, $replaceText=array(), $totalCopy=1, $download=true, $fileCopyTo="")
```

## Parámetros
- `$pkForm` (int/array/string): ID del formulario, array de IDs, o token de la tabla "gs_form"
- `$replaceText` (array, opcional): Array con texto de reemplazo para personalizar el impreso
- `$totalCopy` (int, opcional): Número total de copias a generar (default: 1)
- `$download` (bool, opcional): Si debe descargarse automáticamente (default: true)
- `$fileCopyTo` (string, opcional): Ruta donde guardar una copia del archivo

## Funcionalidad
Genera e imprime formularios usando plantillas del "Editor de Impresos". Permite múltiples formas de uso:
- Un solo formulario por ID
- Múltiples formularios por array de IDs
- Formularios con texto personalizado
- Acceso por token de seguridad

## Ejemplos
```php
// Ejemplo 1: Imprimir un formulario simple
eFormPrint(123, array('{{nombre}}' => 'Juan Pérez'), 1, true);

// Ejemplo 2: Imprimir múltiples formularios con diferentes textos
$formularios = array(101, 102, 103);
$textos = array(
    array('{{cliente}}' => 'Empresa A', '{{fecha}}' => '2024-01-15'),
    array('{{cliente}}' => 'Empresa B', '{{fecha}}' => '2024-01-16'),
    array('{{cliente}}' => 'Empresa C', '{{fecha}}' => '2024-01-17')
);
eFormPrint($formularios, $textos, 2, true);

// Ejemplo 3: Generar formulario y guardar copia
eFormPrint(456, 
    array('{{numero_factura}}' => 'F-2024-001', '{{total}}' => '1,250.00€'),
    1, 
    true, 
    '/_datos/facturas/F-2024-001.pdf'
);
```