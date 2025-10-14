# S.ruleGet

## SINTAXIS
```javascript
S.ruleGet(win, Clase, Regla [, nmFile])
```

## DESCRIPCIÓN
Obtiene la definición de reglas CSS de las hojas de estilo cargadas en la ventana especificada.

## PARÁMETROS
- **win** (Window): Objeto ventana donde buscar las hojas de estilo
- **Clase** (String): Nombre de la clase CSS o selector
- **Regla** (String): Nombre de la propiedad CSS a obtener
- **nmFile** (String) [Opcional]: Nombre específico del archivo CSS donde buscar

## EJEMPLO
```javascript
// Obtener el color de fondo de la clase 'header'
const bgColor = S.ruleGet(window, '.header', 'background-color');

// Obtener una regla específica de un archivo CSS particular
const fontSize = S.ruleGet(window, 'h1', 'font-size', 'styles.css');

// Obtener múltiples propiedades
const margin = S.ruleGet(window, '.container', 'margin');
```