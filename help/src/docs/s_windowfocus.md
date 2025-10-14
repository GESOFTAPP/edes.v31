# S.windowFocus

## SINTAXIS
```javascript
S.windowFocus([win])
```

## DESCRIPCIÓN
Tiene dos comportamientos:
- Si se indica la ventana la pondrá en primer plano.
- Si no se pasa ningún parámetro te devolverá la ventana activa.

## PARÁMETROS
- **win** (opcional): Objeto ventana a enfocar

## EJEMPLO
```javascript
// Enfocar una ventana específica
S.windowFocus(miVentana);

// Obtener la ventana activa
let ventanaActiva = S.windowFocus();
```