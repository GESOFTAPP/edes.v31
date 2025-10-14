# S.focusOff

## SINTAXIS
```javascript
S.focusOff()
```

## DESCRIPCIÓN
Elimina el foco de cualquier elemento que actualmente lo tenga, desactivando la selección o entrada de datos.

## PARÁMETROS
- Ninguno

## EJEMPLO
```javascript
// Quitar el foco de cualquier elemento activo
S.focusOff();

// Uso típico después de una acción
document.getElementById('miBoton').onclick = function() {
    // Realizar acción
    procesarDatos();
    // Quitar foco
    S.focusOff();
};
```