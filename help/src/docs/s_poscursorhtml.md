# S.posCursorHtml

## SINTAXIS
```javascript
S.posCursorHtml(obj, start, end)
```

## DESCRIPCIÓN
Establece la posición del cursor en un elemento HTML con posiciones de inicio y fin.

## PARÁMETROS
- `obj` (Element): Elemento HTML donde posicionar el cursor
- `start` (number): Posición de inicio de la selección
- `end` (number): Posición de fin de la selección

## EJEMPLO
```javascript
var div = document.getElementById('miDiv');
S.posCursorHtml(div, 0, 10); // Selecciona desde la posición 0 hasta la 10
```