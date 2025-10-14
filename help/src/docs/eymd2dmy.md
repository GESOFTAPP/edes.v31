# eYmd2Dmy

## Descripción
Convierte una fecha del formato "yyyy-mm-dd" o "yyyy/mm/dd" al formato "dd-mm-yyyy".

## Sintaxis
```php
eYmd2Dmy($Date)
```

## Parámetros
- **$Date**: Fecha en formato "yyyy-mm-dd" o "yyyy/mm/dd"

## Funcionalidad
Convierte fechas del formato ISO (año-mes-día) al formato europeo (día-mes-año), aceptando tanto guiones como barras como separadores en la fecha de entrada.

## Ejemplos
```php
// Ejemplo 1: Fecha con guiones
echo eYmd2Dmy("2023-12-25"); // "25-12-2023"

// Ejemplo 2: Fecha con barras
echo eYmd2Dmy("2023/06/15"); // "15-06-2023"

// Ejemplo 3: Fecha actual del sistema
echo eYmd2Dmy("2024-01-01"); // "01-01-2024"
```