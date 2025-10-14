# S.display

## SINTAXIS
```javascript
S.display(obj, on, ver)
```

## DESCRIPCIÓN
Controla la visibilidad y visualización de elementos en el DOM, similar a la función show/hide de jQuery pero con funcionalidades extendidas.

## PARÁMETROS
- **obj** (Element|String): El elemento DOM o selector del elemento a mostrar/ocultar
- **on** (Boolean): `true` para mostrar el elemento, `false` para ocultarlo
- **ver** (String): Tipo de visualización CSS (opcional: 'block', 'inline', 'flex', etc.)

## EJEMPLO
```javascript
// Mostrar un elemento como block
S.display('#miElemento', true, 'block');

// Ocultar un elemento
S.display('#miElemento', false);

// Mostrar como flex
S.display(document.getElementById('container'), true, 'flex');
```