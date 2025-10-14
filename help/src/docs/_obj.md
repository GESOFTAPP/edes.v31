# .obj()

## Sintaxis

```javascript
S().obj( [index] )
```

## Descripción

Obtiene los elementos de la selección como objetos S. Sin parámetros devuelve un array con todos los elementos envueltos en objetos S. Con un índice específico devuelve solo ese elemento como objeto S.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| index | number | Índice del elemento a obtener como objeto S. Si es negativo, cuenta desde el final | No |

## Ejemplos

### Ejemplo básico - todos los elementos
```javascript
var objetos = S('div').obj();
console.log(objetos); // Array de objetos S
```

### Ejemplo con índice específico
```javascript
var primerObjeto = S('p').obj(0);
primerObjeto.addClass('destacado');
```

### Ejemplo con índice negativo
```javascript
var ultimoObjeto = S('li').obj(-1);
ultimoObjeto.css('color', 'red');
```

### Ejemplo iterando objetos
```javascript
var elementos = S('.item').obj();
elementos.forEach(function(elemento, index) {
    elemento.attr('data-posicion', index);
});
```

### Ejemplo práctico - manipulación individual
```javascript
var inputs = S('input[type="text"]').obj();
inputs.forEach(function(input, index) {
    input.on('focus', function() {
        S(this).addClass('enfocado');
    });
});
```

### Ejemplo con validación
```javascript
var boton = S('#submit').obj(0);
if (boton) {
    boton.click(function() {
        console.log('Botón clickeado');
    });
}
```

## Notas importantes

- Devuelve objetos S, no elementos DOM puros
- Sin parámetros devuelve un Array de objetos S
- Con índice devuelve un objeto S o undefined
- Mantiene toda la funcionalidad de la librería S
- Útil cuando necesitas trabajar individualmente con elementos manteniendo las capacidades de S
- Diferencia clave con .get(): devuelve objetos S en lugar de elementos DOM