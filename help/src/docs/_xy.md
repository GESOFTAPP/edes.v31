# .xy

## SINTAXIS
```javascript
S().xy(obj)
```

## DESCRIPCIÓN
Obtiene o establece las coordenadas X e Y de un elemento.

## PARÁMETROS
- `obj`: Objeto con las coordenadas x, y (opcional)

## EJEMPLO
```javascript
// Obtener coordenadas
var pos = S("#elemento").xy();
console.log("X: " + pos.x + ", Y: " + pos.y);

// Establecer coordenadas
S("#elemento").xy({x: 100, y: 200});
```