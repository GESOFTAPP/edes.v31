# S.trimTextArea

## SINTAXIS
```javascript
S.trimTextArea(txt)
```

## DESCRIPCIÓN
Elimina espacios en blanco, saltos de línea y tabulaciones al principio y final de un texto, además de normalizar los espacios internos. Especialmente útil para limpiar contenido de elementos textarea que pueden contener formato adicional.

## PARÁMETROS
- **txt** (string): El texto que se desea limpiar, típicamente proveniente de un elemento textarea

## EJEMPLO
```javascript
// Limpiar texto de un textarea
var textoTextarea = '\n\n   Este es un texto\n   con saltos de línea   \n\n';
var textoLimpio = S.trimTextArea(textoTextarea);
console.log(textoLimpio); // "Este es un texto con saltos de línea"

// Procesar entrada de formulario
var comentario = '\t\n  Mi comentario aquí\n  con múltiples líneas  \t\n';
var resultado = S.trimTextArea(comentario);
console.log(resultado); // "Mi comentario aquí con múltiples líneas"
```