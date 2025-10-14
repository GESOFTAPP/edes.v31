# eColsOp

## Descripción
Hace lo mismo que la etiqueta [ColsOp] pero dinámicamente con PHP. Operaciones a realizar en las columnas de los listados. En los listados, crea una fila más con el resultado de las operaciones, es decir, las operaciones se efectúan en las columnas especificadas.

## Sintaxis
```php
eColsOp($Definicion)
```

## Parámetros
- **$Definicion**: Lista de operaciones aritméticas separadas por comas. Cada operación indicada corresponde a la columna de su posición en el listado.

## Funcionalidad
Permite realizar operaciones aritméticas en las columnas de los listados, creando una fila de totales con los resultados. Las operaciones disponibles incluyen suma (+), resta (-), multiplicación (*), división (/), etc.

## Ejemplos
```php
// Ejemplo 1: Suma en todas las columnas
eColsOp("+,+,+,+");

// Ejemplo 2: Operaciones mixtas
eColsOp("S,+,-,*"); // Sin operación, Suma, Resta, Multiplicación

// Ejemplo 3: Con títulos personalizados
eColsOp("+,+,+ | Total General, Subtotal | 3");
```