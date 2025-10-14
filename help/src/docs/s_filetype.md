# S.fileType

## SINTAXIS
```javascript
S.fileType(txt)
```

## DESCRIPCIÓN
Extrae la extensión de un archivo desde una ruta o nombre de archivo. Devuelve únicamente la extensión sin el punto, útil para determinar el tipo de archivo o realizar validaciones basadas en la extensión.

## PARÁMETROS
- **txt** (string): La ruta o nombre del archivo del cual se desea obtener la extensión

## EJEMPLO
```javascript
// Obtener extensión de un archivo
var extension = S.fileType('documento.pdf');
console.log(extension); // "pdf"

// Obtener extensión de una ruta completa
var tipo = S.fileType('/ruta/completa/imagen.png');
console.log(tipo); // "png"

// Validar tipo de archivo
var archivo = 'presentacion.pptx';
var tipoArchivo = S.fileType(archivo);
if (tipoArchivo === 'pdf' || tipoArchivo === 'doc' || tipoArchivo === 'docx') {
    console.log('Es un documento');
}
```