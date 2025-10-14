# S.toTag

## SINTAXIS
```javascript
S.toTag(o, tag, saltar)
```

## DESCRIPCIÓN
Busca el elemento padre más cercano que tenga el tag especificado.

## PARÁMETROS
- `o` (Element): Elemento desde el cual iniciar la búsqueda
- `tag` (string): Nombre del tag a buscar
- `saltar` (boolean): Si saltar el elemento actual en la búsqueda

## EJEMPLO
```javascript
var elemento = document.getElementById('miElemento');
var padre = S.toTag(elemento, 'div', true);
```