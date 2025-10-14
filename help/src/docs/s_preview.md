# S.preview

## SINTAXIS
```javascript
S.preview(xField/oFile, window/Function/oImg [, xTitle])
```

## DESCRIPCIÓN
Carga de imágenes/pdf desde el disco local después de seleccionarla en un campo file, de tres formas distintas:

1. **Previsualizar la imagen en una subventana** (con el botón derecho en el icono de seleccionar fichero o en el input del fichero se puede ejecutar la previsualización):
   ```javascript
   S.preview("CampoFile", window);
   ```

2. **Cargar la imagen en un determinado tag**:
   ```javascript
   S.preview(oFile, oImg);
   ```

3. **Enviar el base64 de la imagen como parámetro a una función**:
   ```javascript
   S.preview(oFile, Function);
   ```

## PARÁMETROS
- `xField/oFile` (string/File): Campo file o objeto File con la imagen
- `window/Function/oImg` (Window/Function/Element): Destino de la previsualización
- `xTitle` (string, opcional): Título para la ventana de previsualización

## EJEMPLO
```javascript
// Previsualizar en ventana
S.preview("inputFile", window, "Vista previa");

// Cargar en imagen
var img = document.getElementById('miImagen');
S.preview(fileObject, img);

// Procesar con función
S.preview(fileObject, function(base64) {
    console.log('Base64:', base64);
});
```