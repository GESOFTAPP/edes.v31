# S.selectOff

## SINTAXIS
```javascript
S.selectOff(win)
```

## DESCRIPCIÓN
Desactiva o cierra cualquier elemento de selección abierto en la ventana especificada.

## PARÁMETROS
- `win` - Ventana o contexto donde desactivar las selecciones (opcional)

## EJEMPLO
```javascript
// Cerrar selecciones en ventana actual
S.selectOff();

// Cerrar selecciones en ventana específica
S.selectOff(window);

// Cerrar selecciones en modal
S.selectOff(ventanaModal);

// Uso en evento de clic fuera del elemento
document.addEventListener('click', function(e) {
    if (!e.target.closest('.select-container')) {
        S.selectOff();
    }
});
```