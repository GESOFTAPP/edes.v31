# S.mid

## SINTAXIS
```javascript
S.mid(txt, ini, len, inverso)
```

## DESCRIPCIÓN
Extrae una subcadena del medio de un texto, con opción de extracción inversa. Permite obtener caracteres desde una posición específica con dirección normal o inversa.

## PARÁMETROS
- **txt** (string): El texto del cual se extraerá la subcadena.
- **ini** (number): La posición inicial desde donde comenzar la extracción.
- **len** (number): La longitud de caracteres a extraer.
- **inverso** (boolean): Si es true, extrae en dirección inversa desde la posición inicial.

## EJEMPLO
```javascript
// Extracción normal
var texto = "JavaScript Programming";
var medio = S.mid(texto, 4, 6, false);
console.log(medio); // "Script"

// Extracción inversa
var frase = "Hola mundo";
var inverso = S.mid(frase, 8, 4, true);
console.log(inverso); // "odnu" (desde posición 8 hacia atrás)

// Obtener extensión de archivo
var archivo = "documento.pdf";
var extension = S.mid(archivo, archivo.lastIndexOf('.') + 1, 3, false);
console.log(extension); // "pdf"

// Extraer código de área
var telefono = "+34-91-555-1234";
var codigoArea = S.mid(telefono, 4, 2, false);
console.log(codigoArea); // "91"
```