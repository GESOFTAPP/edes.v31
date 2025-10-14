# S.fileName

## SINTAXIS
```javascript
S.fileName(txt)
```

## DESCRIPCIÓN
Extrae el nombre del archivo de una ruta completa, incluyendo su extensión pero sin la ruta de directorio. Útil para obtener solo el nombre del archivo desde una ruta completa del sistema de archivos o URL.

## PARÁMETROS
- **txt** (string): La ruta completa del archivo de la cual se desea extraer el nombre

## EJEMPLO
```javascript
// Extraer nombre de archivo de una ruta Windows
var archivo = S.fileName('C:\\Documentos\\MiCarpeta\\documento.pdf');
console.log(archivo); // "documento.pdf"

// Extraer nombre de archivo de una ruta Unix/Linux
var imagen = S.fileName('/home/usuario/imagenes/foto.jpg');
console.log(imagen); // "foto.jpg"

// Extraer nombre de archivo de una URL
var recurso = S.fileName('https://ejemplo.com/archivos/descarga.zip');
console.log(recurso); // "descarga.zip"
```