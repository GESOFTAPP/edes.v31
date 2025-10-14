# S.char

## SINTAXIS
```javascript
S.char(n)
```

## DESCRIPCIÓN
Convierte un código numérico en su carácter correspondiente utilizando el código ASCII/Unicode.

## PARÁMETROS
- **n** (Number): Código numérico ASCII/Unicode del carácter a obtener

## EJEMPLO
```javascript
// Obtener el carácter 'A' (código ASCII 65)
const letraA = S.char(65); // Devuelve 'A'

// Obtener un símbolo especial
const copyright = S.char(169); // Devuelve '©'

// Generar caracteres de control
const tab = S.char(9); // Devuelve carácter de tabulación

// Caracteres Unicode
const smile = S.char(9786); // Devuelve '☺'
```