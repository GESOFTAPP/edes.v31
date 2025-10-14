# eStrUpper

## Descripción
Convierte una cadena de texto a mayúsculas, manejando correctamente los caracteres especiales y acentuados del español.

## Sintaxis
```php
eStrUpper($Cadena)
```

## Parámetros
- **$Cadena**: Cadena de texto a convertir a mayúsculas

## Funcionalidad
Esta función convierte el texto a mayúsculas evitando problemas con caracteres especiales como "ñçáéíóúàèìòùâêîôû". Es una versión mejorada de la función estándar `strtoupper()` de PHP que maneja correctamente los caracteres acentuados.

## Ejemplos
```php
// Ejemplo básico
$texto = "hola mundo";
echo eStrUpper($texto); // "HOLA MUNDO"

// Ejemplo con caracteres acentuados
$texto = "ñoño josé maría";
echo eStrUpper($texto); // "ÑOÑO JOSÉ MARÍA"

// Ejemplo con caracteres especiales
$texto = "àèìòù âêîôû";
echo eStrUpper($texto); // "ÀÈÌÒÙ ÂÊÎÔÛ"
```