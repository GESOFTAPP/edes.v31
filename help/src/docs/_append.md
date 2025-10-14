# .append()

## Sintaxis

```javascript
S().append( content )
```

## Descripción

Inserta contenido al final del interior de cada elemento seleccionado. El contenido se añade como último hijo del elemento.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| content | string/element/S | Contenido HTML, elemento DOM o objeto S a insertar como último hijo | Sí |

## Ejemplos

### Ejemplo básico con HTML
```javascript
S('#contenedor').append('<p>Nuevo párrafo</p>');
```

### Ejemplo con elemento existente
```javascript
S('.lista').append(S('#nuevo-item'));
```

### Ejemplo con múltiples elementos
```javascript
S('.card').append('<button class="btn-accion">Acción</button>');
```

### Ejemplo con función
```javascript
S('ul').append(function(index) {
    return '<li>Item ' + (index + 1) + '</li>';
});
```

### Ejemplo práctico con formulario
```javascript
S('#formulario').append('<input type="hidden" name="token" value="abc123">');
```

## Notas importantes

- Inserta como hijo, dentro del elemento
- Se añade al final del contenido existente
- Se aplica a todos los elementos de la selección
- Útil para construir contenido dinámico