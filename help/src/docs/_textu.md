# .TEXT()

## SINTAXIS
```javascript
S(selector).TEXT(x)
```

## DESCRIPCIÓN
Establece o obtiene el contenido de texto de los elementos seleccionados. La versión en mayúsculas escapa automáticamente los caracteres HTML para mostrar texto plano.

## PARÁMETROS
- `x` (string): El texto que se establecerá en el elemento. Si no se proporciona, devuelve el texto actual del elemento.

## EJEMPLO
```javascript
// Establecer texto
S('#titulo').TEXT('Mi título importante');

// Establecer texto con caracteres especiales (se escapan automáticamente)
S('.mensaje').TEXT('<script>alert("hack")</script>'); // Se muestra como texto literal

// Obtener texto
var texto = S('#parrafo').TEXT();
console.log(texto); // Solo el texto, sin etiquetas HTML

// Ejemplo con múltiples elementos
S('.etiquetas').TEXT('Texto común para todas');
```

## NOTAS
- Este método modifica el textContent del elemento
- Los caracteres HTML se escapan automáticamente para prevenir XSS
- No interpreta etiquetas HTML, todo se trata como texto plano
- Más seguro que `.HTML()` para contenido de usuario