# S.event

## SINTAXIS
```javascript
S.event(win, tag, saltar)
```

## DESCRIPCIÓN
Gestiona eventos generales en una ventana específica con selectores y opciones de propagación.

## PARÁMETROS
- `win` - Ventana donde gestionar el evento
- `tag` - Selector o etiqueta del elemento objetivo
- `saltar` - Booleano para controlar la propagación del evento

## EJEMPLO
```javascript
// Gestionar eventos en ventana actual
S.event(window, "input", false);

// Eventos con prevención de propagación
S.event(window, ".formulario", true);

// Eventos en iframe
S.event(iframe.contentWindow, "button", false);
```