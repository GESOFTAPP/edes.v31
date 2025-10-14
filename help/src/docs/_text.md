# .text()

## SINTAXIS
```javascript
S(selector).text(x)
```

## DESCRIPCIÓN
Establece o obtiene el contenido de texto de los elementos seleccionados. Versión en minúsculas que funciona de manera similar a jQuery, tratando todo el contenido como texto plano.

## PARÁMETROS
- `x` (string): El texto que se establecerá en el elemento. Si no se proporciona, devuelve el texto actual del elemento.

## EJEMPLO
```javascript
// Establecer texto
S('.descripcion').text('Descripción del producto');

// Obtener texto
var contenido = S('#contenido').text();
console.log(contenido);

// Texto con caracteres especiales
S('#codigo').text('function test() { return "<div>"; }');

// Encadenar métodos
S('.botones').text('Guardar').addClass('btn-primary');
```

## NOTAS
- Comportamiento idéntico a `.TEXT()` pero en minúsculas
- Compatible con el estilo de nomenclatura de jQuery
- Escapa automáticamente caracteres HTML
- Permite encadenamiento de métodos