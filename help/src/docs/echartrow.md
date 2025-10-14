# eChartRow

## Descripción
Muestra una gráfica vertical incrustada en el listado.

## Sintaxis
```php
eChartRow($CadenaDeColumnas [, $Ancho=100 [, $Alto=100]])
```

## Parámetros
- **$CadenaDeColumnas**: Cadena de números de columna separados por coma
- **$Ancho** (opcional): Ancho de la gráfica en píxeles (por defecto 100)
- **$Alto** (opcional): Alto de la gráfica en píxeles (por defecto 100)

## Funcionalidad
Genera gráficas verticales integradas en el listado, permitiendo representar múltiples columnas en un solo gráfico dentro de la tabla.

## Ejemplos
```php
// Ejemplo 1: Gráfica básica de dos columnas
eChartRow("1,2");

// Ejemplo 2: Gráfica con dimensiones personalizadas
eChartRow("1,2,3", 150, 120);

// Ejemplo 3: Gráfica múltiple
eChartRow("2,4,6,8", 200, 150);
```