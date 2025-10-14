# .html()

## SINTAXIS
```javascript
S(selector).html(x)
```

## DESCRIPCIÓN
Establece o obtiene el contenido HTML interno de los elementos seleccionados. Versión en minúsculas del método HTML que funciona de manera similar a jQuery.

## PARÁMETROS
- `x` (string): El contenido HTML que se establecerá en el elemento. Si no se proporciona, devuelve el HTML actual del elemento.

## EJEMPLO
```javascript
// Establecer HTML
S('.contenedor').html('<span>Contenido actualizado</span>');

// Obtener HTML
var html = S('#elemento').html();
console.log(html);

// Encadenar métodos
S('.lista').html('<li>Elemento 1</li><li>Elemento 2</li>').addClass('activa');
```

## NOTAS
- Comportamiento idéntico a `.HTML()` pero en minúsculas
- Compatible con el estilo de nomenclatura de jQuery
- Permite encadenamiento de métodos