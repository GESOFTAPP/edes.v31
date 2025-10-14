# S.url

## SINTAXIS
```javascript
S.url(win, name)
```

## DESCRIPCIÓN
Obtiene o manipula la URL de una ventana específica.

## PARÁMETROS
- `win` (Window): Ventana de la cual obtener/modificar la URL
- `name` (string): Nombre del parámetro URL a obtener

## EJEMPLO
```javascript
var url = S.url(window, 'parametro');
console.log('Valor del parámetro:', url);
```