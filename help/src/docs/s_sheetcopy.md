# S.sheetCopy

## SINTAXIS
```javascript
S.sheetCopy(win, nm, add)
```

## DESCRIPCIÓN
Copia una hoja de estilo existente, permitiendo duplicar estilos CSS para modificaciones o reutilización.

## PARÁMETROS
- **win** (Window): Objeto ventana que contiene la hoja de estilo
- **nm** (String): Nombre o identificador de la hoja de estilo a copiar
- **add** (Boolean): Si `true`, añade la copia al documento; si `false`, solo devuelve el objeto

## EJEMPLO
```javascript
// Copiar una hoja de estilo y añadirla al documento
S.sheetCopy(window, 'theme.css', true);

// Copiar una hoja de estilo sin añadirla (para procesamiento)
const copiedSheet = S.sheetCopy(window, 'main.css', false);

// Copiar hoja de estilo de otra ventana
S.sheetCopy(parentWindow, 'shared-styles.css', true);
```