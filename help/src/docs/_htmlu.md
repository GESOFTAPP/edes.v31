# .HTML()

## SINTAXIS
```javascript
S(selector).HTML(x)
```

## DESCRIPCIÓN
Establece o obtiene el contenido HTML interno de los elementos seleccionados. La versión en mayúsculas del método HTML permite insertar código HTML directamente en el elemento.

## PARÁMETROS
- `x` (string): El contenido HTML que se establecerá en el elemento. Si no se proporciona, devuelve el HTML actual del elemento.

## EJEMPLO
```javascript
// Establecer HTML
S('#miDiv').HTML('<p>Nuevo contenido <strong>HTML</strong></p>');

// Obtener HTML
var contenido = S('#miDiv').HTML();
console.log(contenido); // <p>Nuevo contenido <strong>HTML</strong></p>

// Ejemplo con múltiples elementos
S('.cards').HTML('<div class="card">Tarjeta generada</div>');
```

## NOTAS
- Este método modifica el innerHTML del elemento
- Puede ejecutar scripts si el HTML contiene etiquetas `<script>`
- Para contenido texto plano, considere usar `.TEXT()` o `.text()`