# eUcFirst

## Descripción
Pone una cadena con el primer carácter en mayúsculas y el resto en minúsculas, evitando los problemas con los caracteres especiales "àèìòùáéíóúñçü".

## Sintaxis
```php
eUcFirst($Cadena)
```

## Parámetros
- **$Cadena**: Cadena de texto a convertir

## Funcionalidad
Esta función es similar a `ucfirst()` de PHP pero maneja correctamente los caracteres especiales del español y otros idiomas, asegurando que la primera letra se convierta a mayúscula y el resto permanezca en minúsculas.

## Ejemplos
```php
// Ejemplo 1: Texto simple
echo eUcFirst("hola mundo"); // "Hola mundo"

// Ejemplo 2: Con caracteres especiales
echo eUcFirst("ñoño pérez"); // "Ñoño pérez"

// Ejemplo 3: Texto todo en mayúsculas
echo eUcFirst("MARÍA JOSÉ"); // "María josé"
```