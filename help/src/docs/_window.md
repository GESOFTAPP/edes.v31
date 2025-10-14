# .window

## SINTAXIS
```javascript
S().window()
```

## DESCRIPCION
Crea y gestiona ventanas modales o flotantes.

## PARAMETROS
- `fullscreen`: Ventana en pantalla completa
- `modal`: Ventana modal
- `noresize`: Ventana no redimensionable
- `x, y, w, h`: Posición y dimensiones
- `print, minimize, maximize, close`: Botones de control
- `content`: Contenido de la ventana
- `status`: Barra de estado
- `pwopener`: Ventana padre
- `onclose`: Función al cerrar
- `noDestroy`: No destruir al cerrar

## EJEMPLO
```javascript
S().window({
    modal: true,
    content: 'Contenido de la ventana',
    w: 400,
    h: 300
});
```