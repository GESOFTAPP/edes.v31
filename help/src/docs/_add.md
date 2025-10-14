# .add()

## Sintaxis

```javascript
S().add( query )
```

## Descripción

Añade elementos a una selección existente de S (librería tipo jQuery). Permite combinar múltiples elementos o selectores en una sola colección para aplicar operaciones conjuntas.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| query | string/element/S | Selector CSS, elemento DOM o objeto S a añadir a la selección actual | Sí |

## Ejemplos

### Ejemplo básico con selectores CSS
```javascript
S('.clase1').add('.clase2').css('color', 'red');
```

### Ejemplo añadiendo múltiples elementos
```javascript
S('#elemento1').add('#elemento2').add('.clase').fadeIn();
```

### Ejemplo con elementos DOM
```javascript
var elemento = document.getElementById('nuevo');
S('.existente').add(elemento).hide();
```

### Ejemplo encadenando operaciones
```javascript
S('p').add('div').add('span')
  .addClass('destacado')
  .click(function() {
    S(this).toggleClass('activo');
  });
```

### Ejemplo práctico con formulario
```javascript
S('input[type="text"]').add('input[type="email"]')
  .val('')
  .focus(function() {
    S(this).addClass('enfocado');
  });
```

## Notas importantes

- Mantiene el orden de los elementos en el DOM
- No modifica la selección original, devuelve una nueva
- Útil para aplicar la misma operación a diferentes conjuntos de elementos
- Se puede encadenar con otros métodos de S