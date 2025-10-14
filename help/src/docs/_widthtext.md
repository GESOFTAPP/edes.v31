# .widthText

## SINTAXIS
```javascript
S().widthText(txt)
```

## DESCRIPCIÓN
Calcula el ancho que ocuparía un texto en el elemento.

## PARÁMETROS
- `txt`: Texto para calcular su ancho

## EJEMPLO
```javascript
var ancho = S("#elemento").widthText("Texto de ejemplo");
console.log("El texto ocupará: " + ancho + "px");
```