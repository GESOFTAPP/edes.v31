# eAddMonth

## Descripción
Añade cualquier número de meses (positivo o negativo) a un valor de periodo (AAAA-MM) y devuelve el nuevo periodo. Para utilizar la función se ha de cargar mediante "eInclude('lib')".

## Sintaxis
```php
eAddMonth( $Periodo, $NºDeperiodos )
```

## Parámetros
- `$Periodo` (string): Periodo en formato "AAAA-MM"
- `$NºDeperiodos` (int): Número de meses a añadir (puede ser negativo)

## Funcionalidad
Calcula un nuevo periodo añadiendo o restando meses al periodo proporcionado, manejando correctamente los cambios de año.

## Ejemplos
```php
// Ejemplo 1: Añadir 3 meses
$nuevoPeriodo = eAddMonth("2024-01", 3); // Resultado: "2024-04"

// Ejemplo 2: Restar 2 meses
$periodoAnterior = eAddMonth("2024-03", -2); // Resultado: "2024-01"

// Ejemplo 3: Cambio de año
$siguienteAño = eAddMonth("2024-11", 3); // Resultado: "2025-02"
```