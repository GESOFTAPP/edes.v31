# eAddForm

## Descripción
Añade campos a la etiqueta [Fields] de forma dinámica.

## Sintaxis
```php
eAddForm($LineaDefinicionEDF)
```

## Parámetros
- **$LineaDefinicionEDF**: Línea de definición del campo en formato EDF (Easy Data Format)

## Funcionalidad
Permite añadir dinámicamente campos a un formulario mediante código PHP, utilizando el mismo formato que la etiqueta [Fields] pero de forma programática.

## Ejemplos
```php
// Ejemplo 1: Añadir campo de área de trabajo
eAddForm('Area de Trabajo | nm_areas | D | T | 70 || M |||');

// Ejemplo 2: Añadir campo de texto
eAddForm('Nombre | nombre | D | T | 50 || M |||');

// Ejemplo 3: Añadir campo numérico
eAddForm('Cantidad | cantidad | D | N | 10 || M |||');
```