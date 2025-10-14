# S.loadJS

## SINTAXIS
```javascript
S.loadJS(win, txt)
```

## DESCRIPCIÓN
Carga y ejecuta código JavaScript dinámicamente en una ventana específica.

## PARÁMETROS
- `win` - Ventana donde cargar el JavaScript
- `txt` - Texto/código JavaScript a cargar y ejecutar

## EJEMPLO
```javascript
// Cargar código JS en ventana actual
S.loadJS(window, "console.log('Hola mundo');");

// Cargar función en iframe
let codigo = "function saludar() { alert('Hola'); }";
S.loadJS(iframe.contentWindow, codigo);
```