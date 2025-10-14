# eChartCol

## Descripción
Añade una gráfica al final de cada fila incrustada en el listado, se representa la última columna.

## Sintaxis
```php
eChartCol([LongitudGrafica=100 [, ColumnaARepresentar=Ultima]])
```

## Parámetros
- **LongitudGrafica** (opcional): Longitud de la gráfica en píxeles (por defecto 100)
- **ColumnaARepresentar** (opcional): Número de columna a representar (por defecto la última)

## Funcionalidad
Genera gráficas horizontales integradas en cada fila del listado, permitiendo visualizar datos numéricos de forma gráfica directamente en la tabla.

## Ejemplos
```php
// Ejemplo 1: Gráfica básica con valores por defecto
eChartCol();

// Ejemplo 2: Gráfica con longitud personalizada
eChartCol(150);

// Ejemplo 3: Gráfica de columna específica
eChartCol(100, 3); // Representa la columna 3 con longitud 100
```