# S.loading

## SINTAXIS
```javascript
S.loading(win, on)
```

## DESCRIPCIÓN
Muestra u oculta un indicador de carga en una ventana.

## PARÁMETROS
- `win` (Window): Ventana donde mostrar el indicador
- `on` (boolean): true para mostrar, false para ocultar

## EJEMPLO
```javascript
// Mostrar loading
S.loading(window, true);

// Ocultar loading después de una operación
setTimeout(() => {
    S.loading(window, false);
}, 3000);
```