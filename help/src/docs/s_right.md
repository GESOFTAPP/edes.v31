# S.right

## SINTAXIS
```javascript
S.right(txt, ini, len)
```

## DESCRIPCIÓN
Extrae una subcadena desde la derecha del texto, comenzando en una posición específica y con una longitud determinada.

## PARÁMETROS
- `txt` (string): Texto del cual extraer la subcadena
- `ini` (number): Posición inicial desde la derecha
- `len` (number): Longitud de caracteres a extraer

## EJEMPLO
```javascript
S.right("Hello World", 5, 3)   // "orl"
S.right("JavaScript", 4, 2)    // "ri"
S.right("testing", 0, 3)       // "ing"
```