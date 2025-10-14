# S.selectClick

## SINTAXIS
```javascript
S.selectClick(obj, ev)
```

## DESCRIPCIÓN
Maneja eventos de clic en elementos de selección, proporcionando funcionalidad personalizada para la interacción del usuario.

## PARÁMETROS
- `obj` - Elemento DOM que recibe el clic
- `ev` - Objeto del evento de clic

## EJEMPLO
```javascript
// Configurar manejador de clic personalizado
document.getElementById('miSelect').onclick = function(e) {
    S.selectClick(this, e);
};

// Uso con múltiples elementos
var elementos = document.querySelectorAll('.select-personalizado');
elementos.forEach(function(elem) {
    elem.addEventListener('click', function(e) {
        S.selectClick(this, e);
    });
});
```