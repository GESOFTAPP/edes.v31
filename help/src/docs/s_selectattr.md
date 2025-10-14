# S.selectAttr

## SINTAXIS
```javascript
S.selectAttr(txt, attr, win)
```

## DESCRIPCIÓN
Obtiene o establece atributos de elementos seleccionados en el contexto especificado.

## PARÁMETROS
- `txt` - Selector o texto para identificar los elementos
- `attr` - Nombre del atributo a obtener o establecer
- `win` - Ventana o contexto donde realizar la selección (opcional)

## EJEMPLO
```javascript
// Obtener atributo de elementos seleccionados
var valores = S.selectAttr('.mi-clase', 'data-value');

// Establecer atributo en elementos seleccionados
S.selectAttr('#miElemento', 'disabled', 'true');

// Trabajar en ventana específica
S.selectAttr('.botones', 'class', ventanaModal);
```