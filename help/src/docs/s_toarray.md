# S.toArray

## SINTAXIS
```javascript
S.toArray(txt)
```

## DESCRIPCIÓN
Convierte una cadena de texto en un array, donde cada elemento del array corresponde a un carácter individual de la cadena.

## PARÁMETROS
- `txt` (string): La cadena de texto que se desea convertir en array

## EJEMPLO
```javascript
// Convertir una cadena simple
let resultado = S.toArray("Hola");
console.log(resultado); // ["H", "o", "l", "a"]

// Convertir una cadena con espacios
let resultado2 = S.toArray("Hola Mundo");
console.log(resultado2); // ["H", "o", "l", "a", " ", "M", "u", "n", "d", "o"]

// Convertir una cadena vacía
let resultado3 = S.toArray("");
console.log(resultado3); // []
```