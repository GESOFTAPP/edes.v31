# S.rgb2hex

## SINTAXIS
```javascript
S.rgb2hex(c)
```

## DESCRIPCIÓN
Convierte un color en formato RGB a formato hexadecimal.

## PARÁMETROS
- `c` - Color en formato RGB (objeto con propiedades r, g, b o string "rgb(r,g,b)")

## EJEMPLO
```javascript
// Convertir RGB a hexadecimal
let hex = S.rgb2hex({r: 255, g: 0, b: 0});
// Resultado: "#FF0000"

// Desde string RGB
let hex2 = S.rgb2hex("rgb(255, 0, 0)");
```