# S.tree

## SINTAXIS
```javascript
S.tree(win, context)
```

## DESCRIPCIÓN
Crea o maneja un control de árbol (tree view) en una ventana.

## PARÁMETROS
- `win` (Window): Ventana donde crear el árbol
- `context` (object): Contexto o configuración del árbol

## EJEMPLO
```javascript
S.tree(window, {
    data: treeData,
    expandable: true,
    selectable: true
});
```