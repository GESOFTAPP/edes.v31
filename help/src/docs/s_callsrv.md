# S.callSrv

## SINTAXIS
```javascript
S.callSrv(url, win)
```

## DESCRIPCIÓN
Realiza una llamada a un servidor específico desde una ventana determinada.

## PARÁMETROS
- `url` - URL del servidor a contactar
- `win` - Ventana desde la cual realizar la llamada

## EJEMPLO
```javascript
// Llamada al servidor desde ventana actual
S.callSrv("/api/servidor", window);

// Llamada desde ventana específica
let iframe = document.getElementById("miFrame").contentWindow;
S.callSrv("/api/datos", iframe);
```