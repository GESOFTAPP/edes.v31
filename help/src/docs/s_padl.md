# S.padL

## SINTAXIS
```javascript
S.padL(x, l, c)
```

## DESCRIPCIÓN
Rellena una cadena por la izquierda hasta alcanzar la longitud especificada usando un carácter determinado.

## PARÁMETROS
- `x` (string|number): Valor a rellenar
- `l` (number): Longitud total deseada
- `c` (string): Carácter de relleno

## EJEMPLO
```javascript
S.padL("123", 5, "0")    // "00123"
S.padL("abc", 8, "*")    // "*****abc"
S.padL(42, 4, " ")       // "  42"
```