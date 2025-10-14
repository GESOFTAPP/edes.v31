# S.selectValue

## SINTAXIS
```javascript
S.selectValue(o, val)
```

## DESCRIPCIÓN
Establece o obtiene el valor de un elemento de selección de forma programática.

## PARÁMETROS
- `o` - Elemento DOM de selección
- `val` - Valor a establecer (opcional, si se omite obtiene el valor actual)

## EJEMPLO
```javascript
// Obtener valor actual
var valorActual = S.selectValue(document.getElementById('miSelect'));

// Establecer nuevo valor
S.selectValue(document.getElementById('miSelect'), 'opcion2');

// Trabajar con múltiples selects
var selects = document.querySelectorAll('.mi-select');
selects.forEach(function(select) {
    S.selectValue(select, 'valorDefecto');
});

// Establecer valor condicionalmente
if (condicion) {
    S.selectValue(elemento, 'valorA');
} else {
    S.selectValue(elemento, 'valorB');
}
```