# S.eventFire

## SINTAXIS
```javascript
S.eventFire(obj, eventName)
```

## DESCRIPCIÓN
Dispara/ejecuta un evento específico en un objeto o elemento del DOM.

## PARÁMETROS
- `obj` - Objeto o elemento que disparará el evento
- `eventName` - Nombre del evento a disparar (ej: "click", "change")

## EJEMPLO
```javascript
// Disparar evento click en elemento
let boton = document.getElementById("miBoton");
S.eventFire(boton, "click");

// Disparar evento personalizado
S.eventFire(window, "miEventoCustom");
```