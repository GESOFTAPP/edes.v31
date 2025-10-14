# S.captureImage

## SINTAXIS
```javascript
S.captureImage(op)
```

## DESCRIPCIÓN
Captura una imagen desde la cámara o dispositivo de entrada.

## PARÁMETROS
- `op` (object): Opciones de configuración para la captura
  - `quality` (number): Calidad de la imagen
  - `format` (string): Formato de salida
  - `callback` (function): Función a ejecutar tras la captura

## EJEMPLO
```javascript
S.captureImage({
    quality: 0.8,
    format: 'jpeg',
    callback: function(imageData) {
        console.log('Imagen capturada:', imageData);
    }
});
```