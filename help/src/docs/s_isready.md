# S.isReady

## SINTAXIS
```javascript
S.isReady(win)
```

## DESCRIPCIÓN
Verifica si una ventana está completamente cargada y lista para usar.

## PARÁMETROS
- `win` (Window): Objeto ventana a verificar

## EJEMPLO
```javascript
if (S.isReady(window)) {
    // La ventana está lista
    ejecutarScript();
} else {
    // Esperar a que esté lista
    setTimeout(() => S.isReady(window), 100);
}
```