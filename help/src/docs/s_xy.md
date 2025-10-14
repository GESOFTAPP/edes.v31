# S.xy

## SINTAXIS
```javascript
S.xy(obj, xObj)
```

## DESCRIPCIÓN
Obtiene las coordenadas X e Y de un elemento relativas a otro elemento.

## PARÁMETROS
- `obj` (Element): Elemento del cual obtener las coordenadas
- `xObj` (Element): Elemento de referencia para las coordenadas

## EJEMPLO
```javascript
var elemento = document.getElementById('miElemento');
var referencia = document.getElementById('referencia');
var coordenadas = S.xy(elemento, referencia);
console.log('X:', coordenadas.x, 'Y:', coordenadas.y);
```