# S.xyTop

## SINTAXIS
```javascript
S.xyTop(obj)
```

## DESCRIPCIÓN
Obtiene las coordenadas X e Y de un elemento relativas a la parte superior de la página.

## PARÁMETROS
- `obj` (Element): Elemento del cual obtener las coordenadas absolutas

## EJEMPLO
```javascript
var elemento = document.getElementById('miElemento');
var coordenadas = S.xyTop(elemento);
console.log('X absoluta:', coordenadas.x, 'Y absoluta:', coordenadas.y);
```