# .after()

## Sintaxis

```javascript
S().after( content )
```

## Descripción

Inserta contenido después de cada elemento seleccionado. El contenido se coloca como hermano inmediatamente posterior al elemento en el DOM.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| content | string/element/S | Contenido HTML, elemento DOM o objeto S a insertar después del elemento | Sí |

## Ejemplos

### Ejemplo básico con HTML
```javascript
S('p').after('<div>Nuevo contenido</div>');
```

### Ejemplo con elemento existente
```javascript
S('#elemento1').after(S('#elemento2'));
```

### Ejemplo con múltiples elementos
```javascript
S('.item').after('<span class="separador"> | </span>');
```

### Ejemplo con función
```javascript
S('li').after(function(index) {
    return '<span>(' + (index + 1) + ')</span>';
});
```

### Ejemplo práctico
```javascript
S('button').after('<small class="ayuda">Click para continuar</small>');
```

## Notas importantes

- Inserta como hermano, no como hijo del elemento
- Se aplica a todos los elementos de la selección
- El contenido se inserta inmediatamente después en el DOM
- Mantiene los event handlers del contenido insertado