# S.nsp

## SINTAXIS
```javascript
S.nsp(txt)
```

## DESCRIPCIÓN
Elimina espacios en blanco del texto. Función similar a trim pero con mayor control sobre diferentes tipos de espacios.

## PARÁMETROS
- `txt` (string): Texto del cual se eliminarán los espacios

## EJEMPLO
```javascript
S.nsp("  Hola mundo  ")     // "Holamundo"
S.nsp(" texto con espacios ") // "textoconsespacios"
```