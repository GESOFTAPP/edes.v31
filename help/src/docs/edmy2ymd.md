# eDmy2Ymd

## Descripción
Convierte una fecha del formato "DDMMYYYY" al formato "YYYY-MM-DD".

## Sintaxis
```php
eDmy2Ymd($valor)
```

## Parámetros
- `$valor` (string): Fecha en formato "DDMMYYYY"

## Funcionalidad
Esta función toma una fecha en formato día-mes-año (DDMMYYYY) y la convierte al formato estándar ISO (YYYY-MM-DD), que es más adecuado para bases de datos y operaciones de fecha.

## Ejemplos
```php
// Ejemplo 1: Convertir fecha básica
$fechaOriginal = "25122023";
$fechaConvertida = eDmy2Ymd($fechaOriginal);
echo $fechaConvertida; // Resultado: 2023-12-25

// Ejemplo 2: Convertir fecha de inicio de año
$fechaOriginal = "01012024";
$fechaConvertida = eDmy2Ymd($fechaOriginal);
echo $fechaConvertida; // Resultado: 2024-01-01

// Ejemplo 3: Convertir fecha con mes de febrero
$fechaOriginal = "29022024";
$fechaConvertida = eDmy2Ymd($fechaOriginal);
echo $fechaConvertida; // Resultado: 2024-02-29
```