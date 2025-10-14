# S.split

## SINTAXIS
```javascript
S.split(c, txt)
```

## DESCRIPCIÓN
Divide una cadena de texto en un array utilizando un carácter o cadena separadora específica.

## PARÁMETROS
- `c` (string): Carácter o cadena separadora
- `txt` (string): Texto a dividir

## EJEMPLO
```javascript
S.split(",", "uno,dos,tres")        // ["uno", "dos", "tres"]
S.split(" ", "Hola mundo")          // ["Hola", "mundo"]
S.split("|", "a|b|c|d")             // ["a", "b", "c", "d"]
```