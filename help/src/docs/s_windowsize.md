# S.windowSize

## SINTAXIS
```javascript
S.windowSize(win)
```

## DESCRIPCIÓN
Te devuelve una matriz hash con "width" y "height" de la ventana.

## PARÁMETROS
- **win**: Objeto ventana

## EJEMPLO
```javascript
let tamaño = S.windowSize(window);
console.log(tamaño.width);  // Ancho de la ventana
console.log(tamaño.height); // Alto de la ventana
```