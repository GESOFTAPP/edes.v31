# S.sheet

## SINTAXIS
```javascript
S.sheet(win)
```

## DESCRIPCIÓN
Obtiene o manipula las hojas de estilo de la ventana especificada, proporcionando acceso programático a los estilos CSS.

## PARÁMETROS
- **win** (Window): Objeto ventana de la cual obtener las hojas de estilo

## EJEMPLO
```javascript
// Obtener todas las hojas de estilo de la ventana actual
const sheets = S.sheet(window);

// Obtener hojas de estilo de una ventana específica
const parentSheets = S.sheet(parent.window);

// Trabajar con las hojas obtenidas
console.log('Número de hojas de estilo:', sheets.length);
```