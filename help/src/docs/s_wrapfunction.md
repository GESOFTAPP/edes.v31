# S.wrapFunction

## SINTAXIS
```javascript
S.wrapFunction(win, fun, uFun, antes)
```

## DESCRIPCIÓN
Envuelve una función existente con otra función personalizada.

## PARÁMETROS
- `win` (Window): Ventana donde está la función
- `fun` (string): Nombre de la función a envolver
- `uFun` (Function): Función personalizada que envuelve
- `antes` (boolean): Si ejecutar la función personalizada antes o después

## EJEMPLO
```javascript
S.wrapFunction(window, 'alert', function(original, ...args) {
    console.log('Ejecutando alert...');
    return original(...args);
}, true);
```