# S.toClass

## SINTAXIS
```javascript
S.toClass(o, clas)
```

## DESCRIPCIÓN
Busca el elemento padre más cercano que tenga la clase especificada.

## PARÁMETROS
- `o` (Element): Elemento desde el cual iniciar la búsqueda
- `clas` (string): Nombre de la clase a buscar

## EJEMPLO
```javascript
var elemento = document.getElementById('miElemento');
var padre = S.toClass(elemento, 'contenedor');
```