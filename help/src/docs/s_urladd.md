# S.urlAdd

## SINTAXIS
```javascript
S.urlAdd(url, win, origen)
```

## DESCRIPCIÓN
Añade parámetros a una URL en la ventana especificada.

## PARÁMETROS
- `url` (string): URL o parámetros a añadir
- `win` (Window): Ventana donde aplicar los cambios
- `origen` (string): Origen de la URL

## EJEMPLO
```javascript
S.urlAdd('parametro=valor', window, 'origen');
```