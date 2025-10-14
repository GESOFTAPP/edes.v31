# S.selectClear

## SINTAXIS
```javascript
S.selectClear(txt, ConChange, win)
```

## DESCRIPCIÓN
Limpia la selección de elementos especificados y opcionalmente ejecuta eventos de cambio.

## PARÁMETROS
- `txt` - Selector o elemento a limpiar
- `ConChange` - Booleano que indica si ejecutar eventos de cambio (opcional)
- `win` - Ventana o contexto donde realizar la acción (opcional)

## EJEMPLO
```javascript
// Limpiar selección sin ejecutar eventos
S.selectClear('#miSelect');

// Limpiar selección y ejecutar eventos de cambio
S.selectClear('.campos-select', true);

// Limpiar en ventana específica
S.selectClear('#formulario select', false, ventanaModal);
```