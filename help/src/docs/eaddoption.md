# eAddOption

## Descripción

Añade opciones a un campo select existente permitiendo agregar nuevos elementos dinámicamente.

## Sintaxis

```php
eAddOption(NmSelect, DimValues [, Position])
```

## Parámetros

- **NmSelect**: Nombre del campo select al que se añadirán las opciones
- **DimValues**: Matriz de dos dimensiones con los valores de las opciones, contiene:
  - El valor real del campo
  - El innerText de las opciones
  - Opcionalmente una lista de atributos
- **Position**: Posición donde insertar las opciones (por defecto se insertan al final)

## Funcionalidad

- Permite agregar dinámicamente opciones a elementos select
- Soporta múltiples opciones en una sola llamada
- Permite definir atributos adicionales para cada opción
- Las opciones se pueden insertar en posiciones específicas o al final

## Ejemplos

### Ejemplo 1: Añadir opciones simples
```php
eAddOption('cd_prov', Array(
  Array('01', 'ANDALUCIA'),
  Array('02', 'ARAGON')
));
```

### Ejemplo 2: Añadir opciones con atributos
```php
eAddOption('cd_prov', Array(
  Array('1', 'TIPO-1', 'Atributo-1', 'Atributo-2'),
  Array('2', 'TIPO-2', 'Atributo-3', 'Atributo-4')
));
```

### Ejemplo 3: Insertar en posición específica
```php
eAddOption('cd_categoria', Array(
  Array('cat1', 'Categoría 1'),
  Array('cat2', 'Categoría 2')
), 2);
```