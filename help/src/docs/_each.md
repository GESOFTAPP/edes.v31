# .each()

## Sintaxis

```javascript
S().each( callback [, hash] )
```

## Descripción

Es un "foreach" de la selección que permite iterar sobre cada elemento con opciones adicionales de configuración.

## Parámetros

| Parámetro | Tipo | Descripción | Requerido |
|-----------|------|-------------|-----------|
| callback | function | Función a ejecutar para cada elemento. Recibe orderNumber, object, break, arg como parámetros | Sí |
| hash | object | Objeto con opciones de configuración (opcional) | No |

### Opciones del hash

| Opción | Tipo | Valor por defecto | Descripción |
|--------|------|-------------------|-------------|
| bak | boolean | false | Indica el sentido de la iteración. false: del primero al último, true: del último al primero |
| arg | any | undefined | Valor o valores a pasar como argumentos a la función callback |

### Parámetros del callback

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| orderNumber | number | Número de orden del elemento en la iteración |
| object | element | Elemento DOM actual |
| break | null/undefined | Si se asigna null, saldrá del bucle |
| arg | any | Argumentos pasados desde el hash |

## Ejemplos

### Ejemplo básico
```javascript
S("SPAN").each(function(orderNumber, object, break, arg) {
    console.log('Elemento', orderNumber, ':', object.textContent);
});
```

### Ejemplo con break
```javascript
S("div").each(function(orderNumber, object, break, arg) {
    if (object.className === 'stop') {
        break = null; // Sale del bucle
        return;
    }
    console.log('Procesando div', orderNumber);
});
```

### Ejemplo con iteración inversa
```javascript
S("li").each(function(orderNumber, object, break, arg) {
    console.log('Elemento desde el final:', orderNumber, object.textContent);
}, { bak: true });
```

### Ejemplo con argumentos
```javascript
S("input").each(function(orderNumber, object, break, arg) {
    object.value = arg.prefijo + orderNumber;
}, { 
    arg: { prefijo: 'item_' }
});
```

### Ejemplo completo con todas las opciones
```javascript
S(".producto").each(function(orderNumber, object, break, arg) {
    if (orderNumber > arg.limite) {
        break = null;
        return;
    }
    
    object.style.backgroundColor = arg.colores[orderNumber % arg.colores.length];
    console.log('Procesado producto', orderNumber);
}, {
    bak: false,
    arg: {
        limite: 5,
        colores: ['red', 'blue', 'green']
    }
});
```

### Ejemplo práctico con validación
```javascript
S("input[required]").each(function(orderNumber, object, break, arg) {
    if (object.value.trim() === '') {
        object.style.border = '2px solid red';
        arg.errores++;
    }
}, { 
    arg: { errores: 0 }
});
```

## Notas importantes

- Asignar `null` a `break` dentro del callback detiene la iteración
- `bak: true` itera desde el último al primer elemento
- Los argumentos se pasan a través del objeto `hash.arg`
- `orderNumber` indica la posición en la iteración, no necesariamente el índice DOM