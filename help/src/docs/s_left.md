# S.left

## SINTAXIS
```javascript
S.left(txt, ini, len)
```

## DESCRIPCIÓN
Extrae una subcadena desde la izquierda de un texto, comenzando en una posición específica y con una longitud determinada.

## PARÁMETROS
- **txt** (string): El texto del cual se extraerá la subcadena.
- **ini** (number): La posición inicial desde donde comenzar la extracción (base 0).
- **len** (number): La longitud de caracteres a extraer.

## EJEMPLO
```javascript
// Extraer los primeros caracteres
var texto = "JavaScript es genial";
var primeros = S.left(texto, 0, 10);
console.log(primeros); // "JavaScript"

// Extraer desde una posición específica
var frase = "Hola mundo";
var subcadena = S.left(frase, 5, 5);
console.log(subcadena); // "mundo"

// Obtener iniciales de nombre
var nombreCompleto = "Ana María García";
var inicial1 = S.left(nombreCompleto, 0, 1);
var inicial2 = S.left(nombreCompleto, 4, 1);
var inicial3 = S.left(nombreCompleto, 10, 1);
console.log(inicial1 + inicial2 + inicial3); // "AMG"
```