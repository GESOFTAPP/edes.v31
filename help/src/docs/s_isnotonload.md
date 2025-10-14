# S.isNotOnLoad

## SINTAXIS
```javascript
S.isNotOnLoad(win)
```

## DESCRIPCIÓN
Verifica si una ventana no está en proceso de carga.

## PARÁMETROS
- `win` (Window): Objeto ventana a verificar

## EJEMPLO
```javascript
if (S.isNotOnLoad(window)) {
    // Ejecutar código cuando no esté cargando
    inicializarApp();
}
```