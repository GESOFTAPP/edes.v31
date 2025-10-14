# eTest

## Descripción
Función para realizar pruebas unitarias que permite probar múltiples funciones con diferentes parámetros. Al ejecutarse, muestra los resultados en pantalla, destacando en rojo aquellos que no coinciden con los valores esperados.

## Sintaxis
```php
eTest(NomFunction, DimParametros [, NomFunction, DimParametros] ...)
```

## Parámetros
- **NomFunction** (string): Nombre de la función a probar
- **DimParametros** (array): Array bidimensional donde cada elemento contiene:
  - Parámetros de entrada para la función
  - Resultado esperado (último elemento del array)

## Funcionalidad
Esta función ejecuta pruebas unitarias automatizadas, comparando los resultados obtenidos con los esperados. Los resultados que no coinciden se muestran en color rojo para facilitar la identificación de errores.

## Ejemplos

### Ejemplo 1: Prueba de función eStrUpper
```php
eTest('eStrUpper', array(
    array('aeiou', 'AEIOU'),
    array('áèü', 'AEIOU'),
    array('áèü', 'ÁÈÜ')
));
```

### Ejemplo 2: Prueba de múltiples funciones
```php
eTest('eStrUpper', array(
    array('aeiou', 'AEIOU'),
    array('áèü', 'ÁÈÜ')
),
'Prueba', array(
    array(1, 2, 3, 6),
    array(2, 2, 3, 7),
    array(0, -5, 3, 8)
));
```

### Ejemplo 3: Prueba de función matemática
```php
eTest('suma', array(
    array(2, 3, 5),
    array(10, 15, 25),
    array(-5, 5, 0)
),
'multiplicacion', array(
    array(2, 3, 6),
    array(4, 5, 20),
    array(0, 10, 0)
));
```