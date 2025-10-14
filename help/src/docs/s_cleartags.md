# S.clearTags

## SINTAXIS
```javascript
S.clearTags(x)
```

## DESCRIPCIÓN
Elimina todas las etiquetas HTML de una cadena de texto, dejando únicamente el contenido de texto plano. Es útil para sanitizar contenido HTML y extraer solo el texto visible.

## PARÁMETROS
- **x** (string): La cadena de texto que contiene etiquetas HTML que se desean eliminar

## EJEMPLO
```javascript
// Eliminar etiquetas HTML de un texto
var htmlTexto = '<p>Hola <strong>mundo</strong></p>';
var textoLimpio = S.clearTags(htmlTexto);
console.log(textoLimpio); // "Hola mundo"

// Limpiar contenido con múltiples etiquetas
var contenido = '<div class="contenedor"><h1>Título</h1><p>Párrafo con <em>énfasis</em></p></div>';
var resultado = S.clearTags(contenido);
console.log(resultado); // "TítuloPárrafo con énfasis"
```