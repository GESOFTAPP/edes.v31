# S.relationReset

## SINTAXIS
```javascript
S.relationReset(o)
```

## DESCRIPCIÓN
Restablece las relaciones entre elementos del formulario, limpiando las dependencias establecidas previamente.

## PARÁMETROS
- `o` - Elemento o configuración de la relación a restablecer

## EJEMPLO
```javascript
// Restablecer relación específica
S.relationReset('campoVinculado');

// Restablecer múltiples relaciones
S.relationReset(['campo1', 'campo2', 'campo3']);

// Restablecer todas las relaciones de un formulario
S.relationReset(document.getElementById('miFormulario'));
```