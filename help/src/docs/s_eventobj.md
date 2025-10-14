# S.eventObj

## SINTAXIS
```javascript
S.eventObj(evt)
```

## DESCRIPCIÓN
Obtiene o normaliza el objeto evento para compatibilidad entre navegadores.

## PARÁMETROS
- `evt` - Objeto evento a normalizar

## EJEMPLO
```javascript
// En un event handler
function manejarEvento(e) {
    let evento = S.eventObj(e);
    console.log("Evento normalizado:", evento);
    
    // Usar propiedades del evento
    console.log("Target:", evento.target);
}

// Con evento de ventana
window.onclick = function(e) {
    let evt = S.eventObj(e);
    evt.preventDefault();
};
```