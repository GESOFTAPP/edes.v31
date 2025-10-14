# eUnEscape

## Descripción
Traduce caracteres normales a extendidos, si se pone el segundo parámetro a true lo hará al revés.

## Sintaxis
```php
eUnEscape($Cadena [, $ModoAlReves=false])
```

## Parámetros
- **$Cadena**: Cadena de texto a procesar
- **$ModoAlReves** (opcional): Si es `true`, realiza la operación inversa (por defecto `false`)

## Funcionalidad
Convierte caracteres entre su forma normal y su forma extendida (escape/unescape). Cuando `$ModoAlReves` es `false`, convierte caracteres normales a su forma extendida. Cuando es `true`, hace la conversión inversa.

## Ejemplos
```php
// Ejemplo 1: Conversión normal
echo eUnEscape("texto con espacios"); // Convierte espacios a su forma extendida

// Ejemplo 2: Conversión inversa
echo eUnEscape("texto%20con%20espacios", true); // "texto con espacios"

// Ejemplo 3: Caracteres especiales
echo eUnEscape("ñoño&pérez"); // Convierte caracteres especiales
```