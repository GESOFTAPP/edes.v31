# .appendTo()

## Sintaxis

```javascript
S().appendTo( target )
```

## Descripción

Inserta los elementos seleccionados al final del interior del elemento objetivo. Es la operación inversa de .append() - en lugar de añadir contenido al elemento actual, añade el elemento actual a otro contenedor.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| target | string/element/S | Selector, elemento DOM o objeto S donde se insertarán los elementos | Sí |

## Ejemplos

### Ejemplo básico con selector
```javascript
S('<p>Nuevo párrafo</p>').appendTo('#contenedor');
```

### Ejemplo moviendo elementos existentes
```javascript
S('.item-temporal').appendTo('.contenedor-final');
```

### Ejemplo con múltiples destinos
```javascript
S('<span class="etiqueta">Nuevo</span>').appendTo('.producto');
```

### Ejemplo creando y añadiendo
```javascript
S('<li>')
    .text('Elemento dinámico')
    .addClass('nuevo')
    .appendTo('ul.lista');
```

### Ejemplo práctico con botones
```javascript
S('<button>')
    .text('Eliminar')
    .addClass('btn-eliminar')
    .click(function() {
        S(this).parent().remove();
    })
    .appendTo('.item');
```

## Notas importantes

- Opera de forma inversa a .append()
- Mueve elementos existentes o inserta nuevos elementos
- Mantiene los event handlers al mover elementos
- Útil para crear elementos y posicionarlos en una sola operación