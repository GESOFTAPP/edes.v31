# S.error

## SINTAXIS
```javascript
S.error(win, txt)
```

## DESCRIPCIÓN
Muestra un mensaje de error en una ventana específica con opciones adicionales.

## PARÁMETROS
- `win` (Window): Ventana donde mostrar el error
- `txt` (string): Texto del mensaje de error

## EJEMPLO
```javascript
S.error("Para salir utilice los botones de la fila", {focus: oInput});
```
*Mostrará un mensaje de error y al cerrarlo pondrá el foco en el campo oInput.*