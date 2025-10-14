# S.callCreate

## SINTAXIS
```javascript
S.callCreate(win)
```

## DESCRIPCIÓN
Crea un objeto de llamada o inicializa el sistema de llamadas en una ventana específica.

## PARÁMETROS
- `win` - Referencia a la ventana (window object) donde crear la llamada

## EJEMPLO
```javascript
// Crear llamada en la ventana actual
S.callCreate(window);

// Crear llamada en una ventana emergente
let popup = window.open();
S.callCreate(popup);
```