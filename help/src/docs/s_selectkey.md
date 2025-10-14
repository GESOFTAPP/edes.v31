# S.selectKey

## SINTAXIS
```javascript
S.selectKey(obj, ev)
```

## DESCRIPCIÓN
Maneja eventos de teclado en elementos de selección, permitiendo navegación y selección mediante teclas.

## PARÁMETROS
- `obj` - Elemento DOM que recibe el evento de teclado
- `ev` - Objeto del evento de teclado

## EJEMPLO
```javascript
// Configurar manejador de teclas para select
document.getElementById('miSelect').onkeydown = function(e) {
    S.selectKey(this, e);
};

// Uso con autocompletado
var campoBusqueda = document.getElementById('busqueda');
campoBusqueda.addEventListener('keydown', function(e) {
    S.selectKey(this, e);
});
```