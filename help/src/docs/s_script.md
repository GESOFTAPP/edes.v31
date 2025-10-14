# S.script

## SINTAXIS
```javascript
S.script(win, dim, func)
```

## DESCRIPCIÓN
Gestiona scripts en una ventana con dimensiones y funciones específicas.

## PARÁMETROS
- `win` - Ventana objetivo
- `dim` - Dimensiones o configuración del script
- `func` - Función a ejecutar o callback

## EJEMPLO
```javascript
// Ejecutar script con configuración
S.script(window, {width: 800, height: 600}, function() {
    console.log("Script cargado");
});

// Script en iframe con dimensiones
S.script(iframe.contentWindow, "100%", callback);
```