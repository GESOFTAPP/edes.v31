# S.fitHeight

## SINTAXIS
```javascript
S.fitHeight(win, txt)
```

## DESCRIPCIÓN
Ajusta automáticamente la altura de un elemento para que se adapte al contenido disponible en la ventana especificada.

## PARÁMETROS
- `win` - Referencia a la ventana o elemento contenedor
- `txt` - Elemento de texto o contenido al que se le ajustará la altura

## EJEMPLO
```javascript
// Ajustar altura de un textarea al contenido de la ventana
S.fitHeight(window, document.getElementById('miTextarea'));

// Ajustar altura en una ventana modal específica
S.fitHeight(ventanaModal, elementoTexto);
```