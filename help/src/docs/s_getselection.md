# S.getSelection

## SINTAXIS
```javascript
S.getSelection(win)
```

## DESCRIPCIÓN
Obtiene el texto seleccionado por el usuario en una ventana específica. Útil para capturar la selección actual del usuario en el navegador.

## PARÁMETROS
- **win** (window): El objeto window del cual se obtendrá la selección. Normalmente se pasa `window` para la ventana actual.

## EJEMPLO
```javascript
// Obtener la selección actual en la ventana
var textoSeleccionado = S.getSelection(window);
console.log("Texto seleccionado:", textoSeleccionado);

// Usar en un evento para capturar selección
document.addEventListener('mouseup', function() {
    var seleccion = S.getSelection(window);
    if (seleccion.length > 0) {
        console.log("El usuario seleccionó:", seleccion);
        // Hacer algo con el texto seleccionado
        mostrarMenuContextual(seleccion);
    }
});

// En un iframe
var iframe = document.getElementById('miIframe');
var seleccionIframe = S.getSelection(iframe.contentWindow);
```