# eRowsOp

## Descripción
Genera dinámicamente con PHP operaciones por cada fila, similar a la etiqueta [RowsOp]. Crea una columna al final con el resultado de operaciones aritméticas verticales.

## Sintaxis
```php
eRowsOp($Definicion)
```

## Parámetros
- **$Definicion**: String que define las operaciones a realizar
  - Formato: "ColOp1, ColOp2, ..... , ColOpN"
  - Las columnas sin operación se dejan en blanco
  - En la posición de la nueva columna se pone el título

## Funcionalidad
Realiza operaciones aritméticas por cada fila en listados, creando una columna adicional con los resultados. Solo funciona en listados y permite realizar cálculos verticales sobre las columnas especificadas.

## Ejemplos

### Ejemplo 1: Suma simple
```php
eRowsOp("cantidad, precio, , TOTAL");
```

### Ejemplo 2: Operaciones múltiples
```php
eRowsOp("base, , iva, descuento, IMPORTE FINAL");
```

### Ejemplo 3: Cálculo de promedios
```php
eRowsOp("nota1, nota2, nota3, , PROMEDIO");
```