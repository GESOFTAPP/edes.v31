# eStrLower

## Descripción
Convierte una cadena de texto a minúsculas, manejando correctamente los caracteres especiales y acentuados del español.

## Sintaxis
```php
eStrLower($Cadena)
```

## Parámetros
- **$Cadena**: Cadena de texto a convertir a minúsculas

## Funcionalidad
Esta función convierte el texto a minúsculas evitando problemas con caracteres especiales como "ÑÇÁÉÍÓÚÂÊÎÔÛÀÈÌÒÙ". Es una versión mejorada de la función estándar `strtolower()` de PHP que maneja correctamente los caracteres acentuados.

## Ejemplos
```php
// Ejemplo básico
$texto = "HOLA MUNDO";
echo eStrLower($texto); // "hola mundo"

// Ejemplo con caracteres acentuados
$texto = "ÑOÑO JOSÉ MARÍA";
echo eStrLower($texto); // "ñoño josé maría"

// Ejemplo con caracteres especiales
$texto = "ÀÈÌÒÙ ÂÊÎÔÛ";
echo eStrLower($texto); // "àèìòù âêîôû"
```