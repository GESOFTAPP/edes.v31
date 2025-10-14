# S.objWindow

## SINTAXIS
```javascript
S.objWindow(obj)
```

## DESCRIPCIÓN
Obtiene el objeto window que contiene el elemento especificado.

## PARÁMETROS
- `obj` (Element): Elemento del DOM del cual obtener su ventana contenedora

## EJEMPLO
```javascript
var elemento = document.getElementById('miElemento');
var ventana = S.objWindow(elemento);
```