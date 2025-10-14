# S.midn

## SINTAXIS
```javascript
S.midn(txt, ini, len)
```

## DESCRIPCIÓN
Extrae una subcadena del medio de un texto de forma normal (sin opción inversa). Versión simplificada de S.mid que siempre extrae en dirección normal.

## PARÁMETROS
- **txt** (string): El texto del cual se extraerá la subcadena.
- **ini** (number): La posición inicial desde donde comenzar la extracción.
- **len** (number): La longitud de caracteres a extraer.

## EJEMPLO
```javascript
// Extraer parte del medio
var texto = "JavaScript es genial";
var parte = S.midn(texto, 11, 2);
console.log(parte); // "es"

// Obtener nombre de archivo sin extensión
var rutaCompleta = "/ruta/archivo.txt";
var puntoPos = rutaCompleta.lastIndexOf('.');
var nombre = S.midn(rutaCompleta, rutaCompleta.lastIndexOf('/') + 1, puntoPos - rutaCompleta.lastIndexOf('/') - 1);
console.log(nombre); // "archivo"

// Extraer código postal
var direccion = "Madrid 28001 España";
var codigoPostal = S.midn(direccion, 7, 5);
console.log(codigoPostal); // "28001"

// Obtener iniciales del medio
var nombreCompleto = "Ana María José García";
var inicial = S.midn(nombreCompleto, 10, 1);
console.log(inicial); // "J"
```