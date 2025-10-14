# S.eventClear

## SINTAXIS
```javascript
S.eventClear(win, ev)
```

## DESCRIPCIÓN
Limpia o elimina eventos de una ventana específica.

## PARÁMETROS
- `win` - Ventana de la cual limpiar los eventos
- `ev` - Evento específico a limpiar o configuración

## EJEMPLO
```javascript
// Limpiar todos los eventos de la ventana
S.eventClear(window, null);

// Limpiar evento específico
S.eventClear(window, "click");

// Limpiar eventos de iframe
S.eventClear(iframe.contentWindow, "keydown");
```