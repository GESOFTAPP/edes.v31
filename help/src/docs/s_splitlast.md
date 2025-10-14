# S.splitLast

## SINTAXIS
```javascript
S.splitLast(c, txt)
```

## DESCRIPCIÓN
Divide un texto por un carácter específico y devuelve la última parte resultante. Útil para obtener la parte final de una cadena después del último delimitador encontrado.

## PARÁMETROS
- **c** (string): El carácter delimitador que se utilizará para dividir el texto
- **txt** (string): El texto que se va a dividir

## EJEMPLO
```javascript
// Obtener la extensión de un archivo
var extension = S.splitLast('.', 'documento.backup.pdf');
console.log(extension); // "pdf"

// Obtener el último segmento de una ruta
var archivo = S.splitLast('/', '/carpeta/subcarpeta/archivo.txt');
console.log(archivo); // "archivo.txt"
```