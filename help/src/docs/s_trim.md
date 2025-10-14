# S.trim

## SINTAXIS
```javascript
S.trim(txt)
```

## DESCRIPCIÓN
Elimina los espacios en blanco al principio y al final de una cadena de texto. Equivalente al método nativo `trim()` de JavaScript pero con la sintaxis de la librería S.

## PARÁMETROS
- **txt** (string): La cadena de texto de la cual se desean eliminar los espacios en blanco iniciales y finales

## EJEMPLO
```javascript
// Eliminar espacios al inicio y final
var texto = '   Hola mundo   ';
var textoLimpio = S.trim(texto);
console.log(textoLimpio); // "Hola mundo"

// Procesar entrada de usuario
var entrada = '\n\t  Mi nombre es Juan  \t\n';
var resultado = S.trim(entrada);
console.log(resultado); // "Mi nombre es Juan"
```