# eAlign

## Descripción
Función para establecer la alineación de columnas en listados (información incompleta en la documentación original).

## Sintaxis
```php
eAlign($Definicion)
```

## Parámetros
- **$Definicion**: Definición de alineación para las columnas

## Funcionalidad
Permite establecer la alineación de las columnas en los listados de forma dinámica mediante código PHP.

## Ejemplos
```php
// Ejemplo 1: Alineación básica
eAlign("l,c,r"); // Izquierda, Centro, Derecha

// Ejemplo 2: Alineación decimal
eAlign("l,d,c"); // Izquierda, Decimal, Centro

// Ejemplo 3: Múltiples columnas
eAlign("l,l,d,d,c"); // Combinación de alineaciones
```