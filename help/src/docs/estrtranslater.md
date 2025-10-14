# eStrTranslater

## Descripción
Traduce los caracteres extendidos que genera el motor a caracteres normales. La variable pasa por referencia, modificando directamente el contenido original.

## Sintaxis
```php
eStrTranslater($MatrizOCadena)
```

## Parámetros
- **$MatrizOCadena**: Matriz o cadena de texto a traducir (pasa por referencia)

## Funcionalidad
Esta función convierte caracteres especiales o extendidos generados por el motor del sistema a sus equivalentes normales. Es útil para normalizar texto que contiene caracteres especiales antes de procesarlo o almacenarlo.

## Ejemplos
```php
// Ejemplo con cadena
$texto = "Texto con caracteres especiales del motor";
eStrTranslater($texto);
echo $texto; // Texto normalizado

// Ejemplo con matriz
$datos = array(
    'nombre' => 'José María',
    'descripcion' => 'Descripción con caracteres especiales'
);
eStrTranslater($datos);
print_r($datos); // Array con caracteres normalizados

// Ejemplo práctico en procesamiento de datos
$registros = obtenerDatosDelMotor();
eStrTranslater($registros);
guardarEnBaseDatos($registros);
```