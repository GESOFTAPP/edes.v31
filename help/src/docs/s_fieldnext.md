# S.fieldNext

## SINTAXIS
```javascript
S.fieldNext(el, cmpAnt)
```

## DESCRIPCIÓN
Encuentra y enfoca el siguiente campo de formulario en el orden de tabulación. Útil para crear navegación automática entre campos o para implementar funcionalidad de "siguiente campo" en formularios.

## PARÁMETROS
- **el** (element|string): El elemento de referencia desde el cual buscar el siguiente campo
- **cmpAnt** (element|string): El campo anterior (opcional) para evitar bucles o determinar la dirección

## EJEMPLO
```javascript
// Mover al siguiente campo después de completar uno
S.fieldNext('#campoActual');

// Navegar al siguiente campo con referencia al anterior
var campoAnterior = document.getElementById('nombre');
S.fieldNext('#apellido', campoAnterior);

// Implementar navegación automática en formulario
document.getElementById('telefono').addEventListener('blur', function() {
    S.fieldNext(this);
});
```