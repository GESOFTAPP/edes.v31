# S.padR

## SINTAXIS
```javascript
S.padR(x, l, c)
```

## DESCRIPCIÓN
Rellena una cadena por la derecha hasta alcanzar la longitud especificada usando un carácter determinado.

## PARÁMETROS
- `x` (string|number): Valor a rellenar
- `l` (number): Longitud total deseada
- `c` (string): Carácter de relleno

## EJEMPLO
```javascript
S.padR("123", 5, "0")    // "12300"
S.padR("abc", 8, "*")    // "abc*****"
S.padR(42, 4, " ")       // "42  "
```