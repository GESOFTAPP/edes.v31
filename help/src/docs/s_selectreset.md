# S.selectReset

## SINTAXIS
```javascript
S.selectReset(txt, win, ConChange)
```

## DESCRIPCIÓN
Restablece elementos de selección a su estado inicial, con opción de ejecutar eventos de cambio.

## PARÁMETROS
- `txt` - Selector o elemento a restablecer
- `win` - Ventana o contexto donde realizar la acción (opcional)
- `ConChange` - Booleano que indica si ejecutar eventos de cambio (opcional)

## EJEMPLO
```javascript
// Restablecer select a su valor inicial
S.selectReset('#miSelect');

// Restablecer con eventos de cambio
S.selectReset('.formulario select', window, true);

// Restablecer en ventana específica sin eventos
S.selectReset('#opciones', ventanaModal, false);

// Restablecer múltiples elementos
S.selectReset('select, .select-custom');
```