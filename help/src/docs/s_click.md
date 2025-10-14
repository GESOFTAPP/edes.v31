# S.click

## SINTAXIS
```javascript
S.click(func, tag, saltar)
```

## DESCRIPCIÓN
Gestiona eventos de click en elementos específicos con opciones de configuración.

## PARÁMETROS
- `func` - Función a ejecutar cuando se hace click
- `tag` - Selector o etiqueta del elemento objetivo
- `saltar` - Booleano para saltar la propagación del evento

## EJEMPLO
```javascript
// Click simple en botón
S.click(function() {
    alert("Botón clickeado");
}, "button", false);

// Click con prevención de propagación
S.click(miCallback, ".mi-clase", true);
```