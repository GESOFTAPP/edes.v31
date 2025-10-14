# .get()

## Sintaxis

```javascript
S().get( [index] )
```

## Descripción

Obtiene los elementos DOM puros de la selección. Sin parámetros devuelve un array con todos los elementos. Con un índice específico devuelve solo ese elemento DOM.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| index | number | Índice del elemento a obtener. Si es negativo, cuenta desde el final | No |

## Ejemplos

### Ejemplo básico - todos los elementos
```javascript
var elementos = S('div').get();
console.log(elementos); // Array de elementos DOM
```

### Ejemplo con índice específico
```javascript
var primerElemento = S('p').get(0);
console.log(primerElemento.tagName); // 'P'
```

### Ejemplo con índice negativo
```javascript
var ultimoElemento = S('li').get(-1);
console.log(ultimoElemento.textContent);
```

### Ejemplo comparando con array
```javascript
var elementos = S('.item').get();
for (var i = 0; i < elementos.length; i++) {
    console.log('Elemento ' + i + ':', elementos[i].id);
}
```

### Ejemplo práctico - acceso a propiedades DOM
```javascript
var input = S('#usuario').get(0);
if (input) {
    console.log('Valor:', input.value);
    console.log('Tipo:', input.type);
}
```

### Ejemplo con validación
```javascript
var formulario = S('#mi-formulario').get(0);
if (formulario && formulario.checkValidity) {
    var esValido = formulario.checkValidity();
    console.log('Formulario válido:', esValido);
}
```

## Notas importantes

- Devuelve elementos DOM puros, no objetos S
- Sin parámetros devuelve un Array
- Con índice devuelve un elemento DOM o undefined
- Útil cuando necesitas acceder a propiedades/métodos DOM nativos
- Índices negativos cuentan desde el final (-1 es el último)