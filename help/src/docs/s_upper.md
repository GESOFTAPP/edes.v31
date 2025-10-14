# S.upper

## SINTAXIS
```javascript
S.upper(x)
```

## DESCRIPCIÓN
Convierte todo el texto a mayúsculas. Equivalente al método nativo `toUpperCase()` de JavaScript pero con la sintaxis de la librería S.

## PARÁMETROS
- **x** (string): La cadena de texto que se desea convertir a mayúsculas

## EJEMPLO
```javascript
// Convertir texto a mayúsculas
var texto = 'hola mundo';
var textoMayuscula = S.upper(texto);
console.log(textoMayuscula); // "HOLA MUNDO"

// Normalizar entrada de usuario
var nombre = 'juan pérez';
var nombreFormateado = S.upper(nombre);
console.log(nombreFormateado); // "JUAN PÉREZ"
```